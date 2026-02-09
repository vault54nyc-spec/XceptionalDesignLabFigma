import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-7d38c017/health", (c) => {
  return c.json({ status: "ok" });
});

// ============================================
// RESEND EMAIL ENDPOINT
// Sends consultation request email to XDL team
// and a confirmation email to the submitter.
// ============================================
app.post("/make-server-7d38c017/send-email", async (c) => {
  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.log("Error: RESEND_API_KEY environment variable is not set");
      return c.json(
        { error: "Email service not configured. RESEND_API_KEY is missing." },
        500
      );
    }

    const payload = await c.req.json();
    const { name, email, company, interest, message, budget, timeline, services } = payload;

    // Validate required fields
    if (!name || !email || !message) {
      return c.json(
        { error: "Missing required fields: name, email, and message are required." },
        400
      );
    }

    const FROM_EMAIL = "onboarding@resend.dev"; // Update to your verified Resend domain
    const TO_EMAIL = "xceptional.designlab@gmail.com";

    // Build services HTML for the email
    const servicesHtml =
      services && services.length > 0
        ? `<h3 style="color:#D4AF37;margin-top:24px;">Selected Services for Consultation (${services.length}):</h3>
           <ul style="padding-left:20px;">${services
              .map(
                (s: { name: string; category: string }) =>
                  `<li style="color:#E5E5E5;margin-bottom:6px;"><strong>${s.name}</strong> — ${s.category}</li>`
              )
              .join("")}</ul>`
        : "";

    // ---- Email 1: Notification to XDL team ----
    const teamEmailHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0A0A0A;color:#FAFAFA;padding:40px;border:1px solid rgba(212,175,55,0.3);border-radius:16px;">
        <div style="border-bottom:2px solid #D4AF37;padding-bottom:20px;margin-bottom:20px;">
          <h1 style="color:#D4AF37;margin:0;">New Consultation Request</h1>
          <p style="color:#A0A0A0;margin:8px 0 0;">via Xceptional Design Lab</p>
        </div>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="color:#D4AF37;padding:8px 0;vertical-align:top;width:120px;">Name:</td><td style="padding:8px 0;color:#FAFAFA;">${name}</td></tr>
          <tr><td style="color:#D4AF37;padding:8px 0;vertical-align:top;">Email:</td><td style="padding:8px 0;color:#FAFAFA;">${email}</td></tr>
          <tr><td style="color:#D4AF37;padding:8px 0;vertical-align:top;">Company:</td><td style="padding:8px 0;color:#FAFAFA;">${company || "Not provided"}</td></tr>
          <tr><td style="color:#D4AF37;padding:8px 0;vertical-align:top;">Interest:</td><td style="padding:8px 0;color:#FAFAFA;">${interest || "Not specified"}</td></tr>
          <tr><td style="color:#D4AF37;padding:8px 0;vertical-align:top;">Budget:</td><td style="padding:8px 0;color:#FAFAFA;">${budget || "Not specified"}</td></tr>
          <tr><td style="color:#D4AF37;padding:8px 0;vertical-align:top;">Timeline:</td><td style="padding:8px 0;color:#FAFAFA;">${timeline || "Not specified"}</td></tr>
        </table>
        <div style="margin-top:20px;padding:20px;background:rgba(212,175,55,0.1);border-radius:8px;border:1px solid rgba(212,175,55,0.2);">
          <h3 style="color:#D4AF37;margin-top:0;">Message:</h3>
          <p style="color:#E5E5E5;line-height:1.6;">${message}</p>
        </div>
        ${servicesHtml}
        <div style="margin-top:30px;padding-top:20px;border-top:1px solid rgba(212,175,55,0.2);color:#A0A0A0;font-size:12px;">
          <p>Sent from xdesignlabs.co contact form</p>
        </div>
      </div>
    `;

    // ---- Email 2: Confirmation to the submitter ----
    const confirmationHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0A0A0A;color:#FAFAFA;padding:40px;border:1px solid rgba(212,175,55,0.3);border-radius:16px;">
        <div style="border-bottom:2px solid #D4AF37;padding-bottom:20px;margin-bottom:20px;">
          <h1 style="color:#D4AF37;margin:0;">We've Received Your Request</h1>
          <p style="color:#A0A0A0;margin:8px 0 0;">Xceptional Design Lab</p>
        </div>
        <p style="color:#E5E5E5;line-height:1.7;font-size:16px;">
          Hi ${name},
        </p>
        <p style="color:#E5E5E5;line-height:1.7;font-size:16px;">
          Thank you for reaching out to Xceptional Design Lab. We've received your consultation request and our team will review it promptly.
        </p>
        <p style="color:#E5E5E5;line-height:1.7;font-size:16px;">
          <strong style="color:#D4AF37;">What happens next:</strong>
        </p>
        <ul style="color:#E5E5E5;line-height:1.8;font-size:16px;padding-left:20px;">
          <li>Our team will review your requirements within 24 hours</li>
          <li>You'll receive a personalized response with next steps</li>
          <li>If applicable, we'll propose a strategy call to discuss your project in detail</li>
        </ul>
        ${services && services.length > 0 ? `
          <div style="margin-top:20px;padding:20px;background:rgba(212,175,55,0.1);border-radius:8px;border:1px solid rgba(212,175,55,0.2);">
            <h3 style="color:#D4AF37;margin-top:0;">Services You're Interested In (${services.length}):</h3>
            <ul style="padding-left:20px;">${services
              .map(
                (s: { name: string; category: string }) =>
                  `<li style="color:#E5E5E5;margin-bottom:6px;">${s.name} — ${s.category}</li>`
              )
              .join("")}</ul>
          </div>
        ` : ""}
        <div style="margin-top:30px;padding:20px;background:rgba(212,175,55,0.05);border-radius:8px;text-align:center;">
          <p style="color:#D4AF37;font-weight:bold;margin:0 0 8px;">16+ Years of Experience</p>
          <p style="color:#A0A0A0;font-size:14px;margin:0;">PMP&reg; &middot; CCOS &middot; CFE &middot; Fortune 10 Background</p>
        </div>
        <div style="margin-top:30px;padding-top:20px;border-top:1px solid rgba(212,175,55,0.2);color:#A0A0A0;font-size:12px;">
          <p style="margin:0;">Xceptional Design Lab &middot; Strategic Design & Digital Infrastructure</p>
          <p style="margin:4px 0 0;">xdesignlabs.co &middot; xceptional.designlab@gmail.com</p>
        </div>
      </div>
    `;

    // Send team notification email
    console.log("Sending consultation notification email to XDL team...");
    const teamEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `New Consultation Request from ${name}${company ? ` — ${company}` : ""}`,
        html: teamEmailHtml,
      }),
    });

    const teamEmailResult = await teamEmailResponse.json();
    if (!teamEmailResponse.ok) {
      console.log("Resend API error (team email):", JSON.stringify(teamEmailResult));
      return c.json(
        {
          error: `Failed to send email via Resend: ${teamEmailResult.message || teamEmailResult.name || "Unknown error"}`,
          details: teamEmailResult,
        },
        teamEmailResponse.status
      );
    }
    console.log("Team notification email sent successfully:", teamEmailResult.id);

    // Send confirmation email to the submitter
    console.log("Sending confirmation email to submitter:", email);
    const confirmEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [email],
        subject: `Your Consultation Request Has Been Received — Xceptional Design Lab`,
        html: confirmationHtml,
      }),
    });

    const confirmEmailResult = await confirmEmailResponse.json();
    if (!confirmEmailResponse.ok) {
      // Log but don't fail — the primary email was sent successfully
      console.log("Resend API error (confirmation email):", JSON.stringify(confirmEmailResult));
    } else {
      console.log("Confirmation email sent successfully:", confirmEmailResult.id);
    }

    // Store submission in KV for record keeping
    const submissionId = `contact_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    await kv.set(submissionId, JSON.stringify({
      name,
      email,
      company,
      interest,
      message,
      budget,
      timeline,
      services,
      submittedAt: new Date().toISOString(),
      emailId: teamEmailResult.id,
    }));
    console.log("Submission stored in KV:", submissionId);

    return c.json({
      success: true,
      id: teamEmailResult.id,
      confirmationSent: confirmEmailResponse.ok,
      message: "Consultation request sent successfully.",
    });
  } catch (error) {
    console.log("Unhandled error in /send-email:", error);
    return c.json(
      { error: `Server error while sending email: ${error instanceof Error ? error.message : String(error)}` },
      500
    );
  }
});

// ============================================
// STRIPE CHECKOUT SESSION ENDPOINT
// Creates a Stripe Checkout Session with
// optional discount codes for affiliations.
// ============================================

// Discount programs — percentages applied at checkout
const DISCOUNT_PROGRAMS: Record<string, { label: string; percent: number }> = {
  "alpha-phi-alpha": {
    label: "Alpha Phi Alpha Fraternity, Inc.",
    percent: 10,
  },
  "nphc-hudson": {
    label: "NPHC of Hudson County",
    percent: 10,
  },
  "referral": {
    label: "Referral Redemption",
    percent: 15,
  },
  "legacy": {
    label: "Legacy Client",
    percent: 20,
  },
};

// Base starting prices (in cents) for each package tier
const PACKAGE_BASE_PRICES: Record<string, { name: string; priceInCents: number; description: string }> = {
  "brand-foundation": {
    name: "Brand Foundation — Xceptional Design Lab",
    priceInCents: 300000, // $3,000
    description: "Brand Strategy, Logo Design, Typography System, Brand Guidelines, Business Card & Letterhead, Social Media Kit",
  },
  "digital-presence": {
    name: "Digital Presence — Xceptional Design Lab",
    priceInCents: 800000, // $8,000
    description: "Full Brand Foundation + Custom Website (up to 8 pages), Mobile-Responsive, CMS, SEO, Analytics, 30-Day Support",
  },
  "full-infrastructure": {
    name: "Full Infrastructure — Xceptional Design Lab",
    priceInCents: 1800000, // $18,000
    description: "Full Digital Presence + CRM, Email Marketing, Workflow Automation, SOPs, Training, 90-Day Support, Quarterly Check-In",
  },
};

// GET discount programs (public — no secrets exposed)
app.get("/make-server-7d38c017/discount-programs", (c) => {
  const programs = Object.entries(DISCOUNT_PROGRAMS).map(([id, info]) => ({
    id,
    label: info.label,
    percent: info.percent,
  }));
  return c.json({ programs });
});

// POST create Stripe Checkout Session
app.post("/make-server-7d38c017/create-checkout-session", async (c) => {
  try {
    const STRIPE_SECRET_KEY = Deno.env.get("STRIPE_SECRET_KEY");
    if (!STRIPE_SECRET_KEY) {
      console.log("Error: STRIPE_SECRET_KEY environment variable is not set");
      return c.json(
        { error: "Payment service not configured. STRIPE_SECRET_KEY is missing." },
        500
      );
    }

    const payload = await c.req.json();
    const { packageId, discountCode, customerEmail, originUrl } = payload;

    // Validate package
    const pkg = PACKAGE_BASE_PRICES[packageId];
    if (!pkg) {
      return c.json(
        { error: `Invalid package: "${packageId}". Valid packages: ${Object.keys(PACKAGE_BASE_PRICES).join(", ")}` },
        400
      );
    }

    // Calculate discount
    let discountPercent = 0;
    let discountLabel = "";
    if (discountCode && DISCOUNT_PROGRAMS[discountCode]) {
      discountPercent = DISCOUNT_PROGRAMS[discountCode].percent;
      discountLabel = DISCOUNT_PROGRAMS[discountCode].label;
    }

    const discountedPriceInCents = Math.round(
      pkg.priceInCents * (1 - discountPercent / 100)
    );

    const successUrl = `${originUrl || "https://xdesignlabs.co"}/contact?payment=success&session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${originUrl || "https://xdesignlabs.co"}/?payment=cancelled`;

    // Build line item description with discount info
    const lineDescription = discountLabel
      ? `${pkg.description} | ${discountPercent}% ${discountLabel} discount applied`
      : pkg.description;

    // Create Stripe Checkout Session via API
    console.log(`Creating Stripe checkout: ${pkg.name}, base=$${pkg.priceInCents / 100}, discount=${discountPercent}%, final=$${discountedPriceInCents / 100}`);

    const params = new URLSearchParams();
    params.append("mode", "payment");
    params.append("success_url", successUrl);
    params.append("cancel_url", cancelUrl);
    params.append("line_items[0][price_data][currency]", "usd");
    params.append("line_items[0][price_data][product_data][name]", pkg.name);
    params.append("line_items[0][price_data][product_data][description]", lineDescription);
    params.append("line_items[0][price_data][unit_amount]", String(discountedPriceInCents));
    params.append("line_items[0][quantity]", "1");
    params.append("payment_method_types[0]", "card");
    if (customerEmail) {
      params.append("customer_email", customerEmail);
    }
    // Metadata for record-keeping
    params.append("metadata[package_id]", packageId);
    params.append("metadata[discount_code]", discountCode || "none");
    params.append("metadata[discount_percent]", String(discountPercent));
    params.append("metadata[original_price_cents]", String(pkg.priceInCents));

    const stripeResponse = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
      },
      body: params.toString(),
    });

    const session = await stripeResponse.json();

    if (!stripeResponse.ok) {
      console.log("Stripe API error:", JSON.stringify(session));
      return c.json(
        {
          error: `Stripe error: ${session.error?.message || "Unknown error"}`,
          details: session.error,
        },
        stripeResponse.status
      );
    }

    console.log("Stripe checkout session created:", session.id);

    // Store the checkout record in KV
    const checkoutId = `checkout_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    await kv.set(checkoutId, JSON.stringify({
      sessionId: session.id,
      packageId,
      packageName: pkg.name,
      originalPrice: pkg.priceInCents / 100,
      discountCode: discountCode || null,
      discountPercent,
      finalPrice: discountedPriceInCents / 100,
      customerEmail: customerEmail || null,
      createdAt: new Date().toISOString(),
    }));

    return c.json({
      success: true,
      sessionId: session.id,
      url: session.url,
      originalPrice: pkg.priceInCents / 100,
      discountPercent,
      finalPrice: discountedPriceInCents / 100,
    });
  } catch (error) {
    console.log("Unhandled error in /create-checkout-session:", error);
    return c.json(
      { error: `Server error creating checkout session: ${error instanceof Error ? error.message : String(error)}` },
      500
    );
  }
});

Deno.serve(app.fetch);
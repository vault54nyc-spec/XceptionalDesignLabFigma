# Deployment Guide - Xceptional Design Lab

This guide provides comprehensive instructions for deploying the Xceptional Design Lab application to Vercel.

## Prerequisites

Before deploying, ensure you have the following installed:

- **Node.js** v18 or higher ([Download](https://nodejs.org/))
- **pnpm** v10.4.1 or higher
  ```bash
  npm install -g pnpm@10.4.1
  ```
- **Vercel CLI** (optional, for CLI deployments)
  ```bash
  npm install -g vercel
  ```

## Environment Variables Setup

1. Copy the example environment file:

   ```bash
   cp .env.example .env
   ```

2. Configure the following environment variables:

   ### Required Variables
   - `VITE_APP_TITLE` - Application title (default: "Xceptional Design Lab")
   - `VITE_APP_LOGO` - Path to logo (default: "/xceptional-logo-hero.png")
   - `NODE_ENV` - Set to "production" for production builds

   ### Optional Variables
   - `VITE_FORMSPREE_ENDPOINT` - Formspree form endpoint for contact form
     - Sign up at [formspree.io](https://formspree.io/)
     - Create a new form and copy the endpoint URL
     - Format: `https://formspree.io/f/YOUR_FORM_ID`
   - `VITE_ANALYTICS_ENDPOINT` - Umami analytics endpoint (optional)
   - `VITE_ANALYTICS_WEBSITE_ID` - Umami website ID (optional)

## Local Build Testing

Before deploying to Vercel, test the build locally:

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Run the build:

   ```bash
   pnpm build
   ```

3. Test the production build locally:

   ```bash
   pnpm start
   ```

4. Open http://localhost:3000 in your browser to verify the build

## Deployment Methods

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Connect Repository**
   - Visit [vercel.com](https://vercel.com/)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your repository: `vault54nyc-spec/xceptional-design-lab`

2. **Configure Project**
   - **Framework Preset**: Select "Other" or "Vite"
   - **Build Command**: `pnpm build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `pnpm install`
   - **Development Command**: `pnpm dev`

3. **Set Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add all required environment variables from `.env.example`
   - For Formspree integration, add `VITE_FORMSPREE_ENDPOINT`

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (usually 2-3 minutes)
   - Vercel will provide a preview URL

### Method 2: Deploy via Vercel CLI

1. **Login to Vercel**

   ```bash
   vercel login
   ```

2. **Deploy to Preview**

   ```bash
   vercel
   ```

3. **Deploy to Production**

   ```bash
   vercel --prod
   ```

4. **Set Environment Variables via CLI**
   ```bash
   vercel env add VITE_FORMSPREE_ENDPOINT
   ```

## Domain Configuration

### Custom Domain Setup

1. Go to your Vercel project dashboard
2. Navigate to Settings → Domains
3. Click "Add Domain"
4. Enter your custom domain (e.g., `xceptionaldesignlab.com`)
5. Follow the DNS configuration instructions provided by Vercel

### DNS Configuration

Add the following DNS records to your domain provider:

**For root domain:**

- Type: A
- Name: @
- Value: 76.76.21.21

**For www subdomain:**

- Type: CNAME
- Name: www
- Value: cname.vercel-dns.com

### Update Sitemap and Robots.txt

After domain configuration, update:

1. `client/public/sitemap.xml` - Replace `yourdomain.com` with your actual domain
2. `client/public/robots.txt` - Update sitemap URL

## Troubleshooting

### Build Failures

**Issue: "Module not found" errors**

- Solution: Ensure all dependencies are listed in `package.json`
- Run `pnpm install` to verify dependency installation

**Issue: "Out of memory" during build**

- Solution: Vercel Pro plan provides more memory
- Or optimize bundle size by code splitting

**Issue: Environment variables not working**

- Solution: Ensure variables are prefixed with `VITE_`
- Redeploy after adding new environment variables

### Runtime Issues

**Issue: 404 on page refresh**

- Solution: Already configured in `vercel.json` with rewrites
- Verify `vercel.json` is in the repository root

**Issue: Images not loading**

- Solution: Ensure images are in `client/public` directory
- Check image paths start with `/`

**Issue: Contact form not working**

- Solution: Verify `VITE_FORMSPREE_ENDPOINT` is set in Vercel environment variables
- Check Formspree endpoint is active and correct

### Performance Issues

**Issue: Slow initial load**

- Solution: Implement lazy loading for heavy components
- Use image optimization (see IMAGE-OPTIMIZATION.md)

**Issue: Large bundle size**

- Solution: Analyze bundle with `pnpm build` output
- Consider code splitting for routes

## Post-Deployment Checklist

After successful deployment, verify:

- [ ] All pages load correctly (Home, Operations, Design, Communications, Technical, Packages, Portfolio, Case Studies, About, Contact)
- [ ] Navigation works on all pages
- [ ] Contact form submits successfully
- [ ] Images and assets load properly
- [ ] Meta tags appear correctly when sharing on social media
- [ ] Mobile responsive design works
- [ ] No console errors in browser
- [ ] Analytics tracking works (if configured)
- [ ] Custom domain resolves correctly (if configured)
- [ ] HTTPS is enabled
- [ ] Security headers are set (check browser DevTools → Network → Response Headers)

## Continuous Deployment

Vercel automatically deploys:

- **Production**: Commits to `main` branch
- **Preview**: Pull requests and other branches

Every push triggers a new build. Preview deployments get unique URLs for testing.

## Monitoring and Logs

### View Deployment Logs

1. Go to Vercel Dashboard
2. Select your project
3. Click on a deployment
4. View build logs and runtime logs

### Analytics

- Built-in Vercel Analytics available in dashboard
- Umami analytics (if configured via environment variables)

## Support

For deployment issues:

- Check Vercel documentation: https://vercel.com/docs
- Vercel Discord: https://vercel.com/discord
- GitHub Issues: Create an issue in the repository

For application-specific issues:

- Contact: hello@xceptionaldesignlab.com

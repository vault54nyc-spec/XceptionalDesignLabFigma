import { Link, useLocation } from "wouter";

const LOGO_WHITE =
  "https://pub-28a5a1ab60b44821b2111f74965f9cbf.r2.dev/XDL%20White.svg";

export default function Navigation() {
  const [location] = useLocation();

  // Navigation order: Home → About → Operations → Technical → Communications → Design → Packages → Services → Portfolio
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/operations", label: "Operations" },
    { href: "/technical", label: "Technical" },
    { href: "/communications", label: "Communications" },
    { href: "/design", label: "Design" },
    { href: "/packages", label: "Packages" },
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Portfolio" },
  ];

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="relative">
          {/* Glass base */}
          <div className="absolute inset-0 bg-black/55 backdrop-blur-2xl" />
          {/* Holographic wash */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-white/5 to-fuchsia-400/10 mix-blend-screen" />
          {/* Border glow */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          <div className="relative flex h-16 items-center gap-3 px-4 sm:px-6">
            <Link href="/">
              <div className="flex items-center">
                <img
                  src={LOGO_WHITE}
                  alt="XDL"
                  className="h-8 w-auto object-contain"
                />
              </div>
            </Link>

            <nav
              className="min-w-0 flex-1 overflow-x-auto"
              aria-label="Primary"
              style={{ scrollbarWidth: "none" }}
              data-nav-scroll
            >
              <div className="flex items-center gap-5 whitespace-nowrap px-2">
                {navLinks.map((link) => {
                  const active = location === link.href;
                  return (
                    <Link key={link.href} href={link.href}>
                      <span
                        className={[
                          "text-sm font-medium tracking-wide transition-colors",
                          active
                            ? "text-white"
                            : "text-white/70 hover:text-white",
                        ].join(" ")}
                        aria-current={active ? "page" : undefined}
                      >
                        {link.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </nav>

            <a
              href="/#book-call"
              className="shrink-0 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15 transition-colors"
            >
              Book Call
            </a>
          </div>
        </div>
      </header>

      {/* Spacer so page content isn't hidden behind fixed top bar */}
      <div className="h-16" />

      <style>{`
        [data-nav-scroll]::-webkit-scrollbar { display: none; }
      `}</style>
    </>
  );
}

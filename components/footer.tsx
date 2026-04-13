import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#" },
  ],
  company: [
    { label: "About", href: "#vision" },
    { label: "Contact", href: "#" },
  ],
  legal: [
    { label: "Terms", href: "/legal#terms" },
    { label: "Privacy", href: "/legal#privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and tagline */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/#top" className="inline-block">
              <Image
                src="/images/readlink-logo.png"
                alt="Readlink"
                width={120}
                height={28}
                className="h-7 w-auto invert"
              />
            </Link>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
              Follow people. Explore libraries. Expand knowledge.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Readlink. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="https://discord.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
     
              <span className="sr-only">Discord</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.369A19.79 19.79 0 0 0 15.559 3c-.206.37-.444.867-.608 1.257a18.27 18.27 0 0 0-5.902 0A12.38 12.38 0 0 0 8.441 3a19.736 19.736 0 0 0-4.759 1.37C.671 8.874-.156 13.267.258 17.598A19.9 19.9 0 0 0 6.115 21c.474-.65.896-1.334 1.257-2.05a12.89 12.89 0 0 1-1.98-.947c.164-.12.325-.247.482-.378 3.817 1.8 7.959 1.8 11.73 0 .16.131.321.258.482.378-.63.373-1.296.694-1.98.947.361.716.783 1.4 1.257 2.05a19.84 19.84 0 0 0 5.86-3.402c.484-5.025-.827-9.377-3.906-13.229ZM8.02 14.96c-1.143 0-2.083-1.055-2.083-2.352 0-1.296.92-2.352 2.083-2.352 1.173 0 2.103 1.066 2.083 2.352 0 1.297-.92 2.352-2.083 2.352Zm7.697 0c-1.143 0-2.083-1.055-2.083-2.352 0-1.296.92-2.352 2.083-2.352 1.173 0 2.103 1.066 2.083 2.352 0 1.297-.91 2.352-2.083 2.352Z" />
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/showcase/readlink/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/readlink_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm-.25 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm10.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
            </Link>
            <Link
              href="https://www.tiktok.com/@readlink"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="sr-only">TikTok</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 3c.4 2.4 1.9 3.9 4 4.2V10a7 7 0 0 1-4-1.3v6.8a5.5 5.5 0 1 1-4.2-5.4v2.5a3 3 0 1 0 1.7 2.8V3H14Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import { Instagram, Youtube } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/constants/site";
import { FOOTER_CONTENT } from "@/constants/content";

const socialLinks = [
  {
    label: "Instagram",
    href: SITE_CONFIG.social.instagram,
    icon: Instagram,
  },
  {
    label: "YouTube",
    href: SITE_CONFIG.social.youtube,
    icon: Youtube,
  },
];

export function Footer() {
  const { tagline, copyright, links } = FOOTER_CONTENT;

  return (
    <footer className="bg-brand-bg">
      <div className="container-wide section-padding py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Image
              src={SITE_CONFIG.logo}
              alt={SITE_CONFIG.name}
              width={200}
              height={140}
              className="h-8 md:h-12 w-auto object-contain mb-4"
            />
            <p className="text-sm text-brand-muted leading-relaxed mb-4 max-w-xs">
              {tagline}
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <p className="text-xs font-medium tracking-widest text-brand-secondary uppercase mb-4">
              Navigasi
            </p>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-text/70 hover:text-brand-text transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-medium tracking-widest text-brand-secondary uppercase mb-4">
              Hubungi Kami
            </p>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-brand-text/70 hover:text-brand-text transition-colors mb-6"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 32 32"
                className="w-4 h-4 text-brand-accent flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z" />
              </svg>
              Chat WhatsApp
            </a>

            {/* Socials */}
            <div className="flex items-center gap-4 mt-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-brand-border flex items-center justify-center text-brand-text/60 hover:text-brand-text hover:border-brand-text/40 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-10 pt-6">
          <p className="text-xs text-brand-text/40 text-center">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}

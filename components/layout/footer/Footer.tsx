import Link from "next/link";
import FooterRibbon from "./FooterRibbon";
import { servicesDetails } from "@/data/ServicesDetails";

//adding in footer ribbon required if necessary, but can be removed if not needed. It is a decorative element that adds a visual accent to the footer section of the website. The ribbon is designed to scroll and fade as the user interacts with the page, creating a dynamic and engaging visual effect. The ribbon has a maximum width of 1360 pixels and includes 32px gutters for spacing. It is important to note that the ribbon is purely decorative and does not contain any interactive elements or links.
const Footer = () => {
  return (
    <div>
      <FooterRibbon />

      <div className="footer-ribbon" aria-hidden="true" />

      <footer className="relative overflow-hidden bg-ink pt-1 pb-10 ">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_15%_90%,color-mix(in_oklch,var(--accent)_40%,transparent),transparent_42%),radial-gradient(circle_at_85%_95%,color-mix(in_oklch,var(--accent-2)_48%,transparent),transparent_36%),radial-gradient(circle_at_50%_75%,color-mix(in_oklch,var(--accent-3)_22%,transparent),transparent_52%)]"
        />

        <div className="container-thin relative">
          <div className="text-[clamp(56px,18vw,220px)] leading-[0.9] font-serif my-14 md:my-20 tracking-[-0.02em] text-cream drop-shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
            default<span className="italic text-accent">/social</span>
          </div>

          <div className="grid mt-6 md:mt-14 gap-10 md:gap-12 grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr]">
            <div className="group border border-transparent hover:border-[color-mix(in_oklch,var(--accent)_20%,var(--line))] col-span-2 md:col-span-1 rounded-xl hidden md:block p-5 md:p-6 mb-10 md:mb-0 shadow-[0_12px_32px_rgba(0,0,0,0.25),0_1px_0_rgba(255,255,255,0.05)_inset]">
              <div className="font-mono text-[clamp(12px,2.2vw,14px)] tracking-[0.16em] uppercase text-muted mb-2 md:mb-4">
                <span className="group-hover:text-accent transition-all duration-300 group-hover:tracking-[0.34em] group-hover:font-bold">
                  AI
                </span>
                <span className="group-hover:opacity-50">-enabled studio</span>
              </div>

              <p className="text-[clamp(14px,1.8vw,18px)] leading-[1.2] text-cream max-w-[55ch] md:max-w-[40ch] ">
                Strategy, content, technology and{" "}
                <span className="group-hover:text-accent-deep transition-all duration-300 ">
                  AI systems{" "}
                </span>
                designed to help brands move faster and grow smarter.
              </p>
            </div>

            <div>
              <h4 className="footer-headings">Practices</h4>
              <ul className="flex flex-col gap-1.5 md:gap-2.5 p-0 m-0 list-none">
                {servicesDetails.map((service) => (
                  <li key={service.id}>
                    <Link className="footer-links" href="/services">
                      <span className="text-accent-deep">/ </span>
                      {service.linkName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="footer-headings">Explore</h4>
              <ul className="flex flex-col gap-1.5 md:gap-2.5 p-0 m-0 list-none text-cream-2">
                <li>
                  <span className="text-accent-deep">/ </span>
                  <Link className="footer-links" href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <span className="text-accent-deep">/ </span>
                  <Link className="footer-links" href="/insights">
                    Insights
                  </Link>
                </li>
                <li>
                  <span className="text-accent-deep">/ </span>
                  <Link className="footer-links" href="#contact">
                    Contact
                  </Link>
                </li>
                <li className="flex gap-1">
                  <span className="text-accent-deep">/</span>
                  <Link
                    className="footer-links font-semibold font-accent-2"
                    href="https://defaultmedia.com"
                  >
                    Default Media Group
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="footer-headings">Contact</h4>

              <div className="space-y-1.5 md:space-y-2.5 font-mono text-[11px] tracking-[0.08em] uppercase">
                <Link
                  href="mailto:info@defaultmedia.com"
                  className="footer-links block"
                >
                  info@defaultmedia.com
                </Link>

                <div className="text-cream-2">(+44) 7878 849 182</div>

                <div className="text-muted leading-relaxed">
                  Brentford · London
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-end mt-12 md:mt-16 pt-6 border-t border-t-line">
            <span className="font-mono text-[10px] md:text-[11px] tracking-[0.06em] text-muted">
              © {new Date().getFullYear()} Default Social · Default Media Group
            </span>

            <span className="font-mono text-[10px] md:text-[11px] tracking-[0.06em] text-muted">
              Built with Next.js · Sanity · AI
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;

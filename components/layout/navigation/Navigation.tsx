import NavHamburgerMenu from "./NavHamburgerMenu";
import Link from "next/link";
import Image from "next/image";
import type { SiteChromeProps } from "@/types/site";

const Navigation = ({ navigation }: SiteChromeProps) => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-nav flex justify-between items-center py-4.5 px-3 bg-[color-mix(in_oklch,var(--ink)_70%,transparent)] backdrop-blur-[20px] backdrop-saturate-160 border-b border-b-[color-mix(in_oklch,var(--line)_60%,transparent)] 720:px-5
  720:py-3.5 max-w-[100vw]"
      aria-label="Primary navigation"
    >
      <div className="inline-flex items-center gap-3.5 md:gap-2.5">
        <Link
          href="/"
          className="font-serif text-[24px] leading-1 tracking-[-0.01em] text-cream inline-flex items-baseline lowercase md:text-[20px]"
          aria-label="Default Social"
        >
          <div className="shrink-0">
            <Image
              src="/assets/branding/Default-Alt_DF SOCIAL-White.png"
              alt="Default Social"
              width={370}
              height={100}
              priority
              className="h-auto w-45 sm:w-60 max-w-none"
            />
          </div>
        </Link>
      </div>

      <NavHamburgerMenu navigation={navigation} />
    </nav>
  );
};

export default Navigation;

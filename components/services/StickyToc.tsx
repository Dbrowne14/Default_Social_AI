import StickyTocPills from "./StickyTocPills";
import type { ServicesProps } from "@/types/collections/services";

const StickyToc = ({services}:ServicesProps) => {
  return (
    <aside className="sticky top-nav flex flex-wrap gap-2 py-4 bg-[color-mix(in_oklch,var(--ink)_90%,transparent)] backdrop-blur-lg z-30 border-b border-line ">
      <StickyTocPills services={services}/>
    </aside>
  );
};

export default StickyToc;

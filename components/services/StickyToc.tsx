import StickyTocPills from "./StickyTocPills";
import type { ServicesProps } from "@/types/collections/services";

type StickyTocProps = ServicesProps & {
  practicesStatement: string;
};

const StickyToc = ({ services, practicesStatement }: StickyTocProps) => {
  return (
    <aside className="sticky top-nav flex flex-wrap gap-2 py-4 bg-[color-mix(in_oklch,var(--ink)_90%,transparent)] backdrop-blur-lg z-30 border-b border-line">
      <StickyTocPills services={services} practicesStatement={practicesStatement} />
    </aside>
  );
};

export default StickyToc;

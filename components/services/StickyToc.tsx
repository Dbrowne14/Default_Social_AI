import StickyTocPills from "./StickyTocPills";

const StickyToc = () => {
  return (
    <aside className="sticky top-21.5 flex flex-wrap gap-2 py-4 bg-[color-mix(in_oklch,var(--ink)_80%,transparent)] backdrop-blur-lg z-30 border-b border-line">
      <StickyTocPills />
    </aside>
  );
};

export default StickyToc;

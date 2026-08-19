import PageHeader from "../ui/PageHeader";
import type { PageHeading } from "@/types/shared";

type InsightsHeaderProps = {
  insightsHeader: PageHeading;
};

const InsightsHeader = ({ insightsHeader }: InsightsHeaderProps) => {
  const { eyebrow, title, lede } = insightsHeader;
  return (
    <PageHeader eyebrow={eyebrow} title={title}>
      <div>
        <p className="lede">{lede}</p>

        <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 text-[11px] tracking-widest uppercase text-muted">
          <div className="flex items-center gap-3">
            <span className="size-1.5 rounded-full border border-line" />
            <span className="text-cream-2">Articles</span>
            <span className="text-muted">What we think</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="size-1.5 rounded-full bg-accent" />
            <span className="text-cream-2">Case studies</span>
            <span className="text-muted">What we&apos;ve done</span>
          </div>
        </div>
      </div>
    </PageHeader>
  );
};

export default InsightsHeader;

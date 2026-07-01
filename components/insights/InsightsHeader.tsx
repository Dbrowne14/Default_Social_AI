import PageHeader from "../ui/PageHeader";
import type { PageHeading } from "@/types/shared";

type InsightsHeaderProps = {
  insightsHeader: PageHeading;
};

const InsightsHeader = ({ insightsHeader }: InsightsHeaderProps) => {
  const { eyebrow, title, lede } = insightsHeader;
  return (
    <>
      {" "}
      <PageHeader eyebrow={eyebrow} title={title}>
        <div>
          <p className="lede">{lede}</p>
        </div>
      </PageHeader>
    </>
  );
};

export default InsightsHeader;

import PageHeader from "../ui/PageHeader";
import { headerData } from "@/data/headerData";

const InsightsHeader = () => {
  const header = headerData.find((header) => header.eyebrow === "Insights")
  if(!header) return null;
  return (
    <>
      {" "}
      <PageHeader eyebrow={header.eyebrow} titleLines={header.titleLines}>
        <div>
          <p className="lede">
            Essays, teardowns and quiet experiments — written by our practice
            leads. Long-form by default, edited by humans, published when we
            have something worth saying.
          </p>
        </div>
      </PageHeader>
    </>
  );
};

export default InsightsHeader;

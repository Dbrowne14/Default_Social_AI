import PageHeader from "../ui/PageHeader";
import type { PageHeading } from "@/types/shared";

type servicesHeader = {
  servicesHeader: PageHeading;
};

const servicesHeader = ({ servicesHeader }: servicesHeader) => {
  const { eyebrow, title, lede } = servicesHeader;
  return (
    <PageHeader eyebrow={eyebrow} title={title}>
      <div>
        <p className="lede">
         {lede}
        </p>
      </div>
    </PageHeader>
  );
};

export default servicesHeader;

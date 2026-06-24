import PageHeader from "../ui/PageHeader";

const InsightsHeader = () => {
  return (
    <>
      {" "}
      <PageHeader
        eyebrow="Insights"
        title={
          <>
            Field notes
            <br />
            from the
            <br />
            <em className="text-accent italic">practice.</em>
          </>
        }
      >
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

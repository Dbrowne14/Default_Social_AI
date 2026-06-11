
const InsightsHeader = () => {
  return (
    <header className="pt-15 border-b border-line min-h-screen ">
      <div className="container-custom">
        <div className="eyebrow mb-9">Insights</div>
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-20 md:gap-10 items-end">
          <h1 className="font-serif text-[clamp(56px,9vw,140px)]">
            Field notes
            <br />
            from the
            <br />
            <em className="text-accent italic">practice.</em>
          </h1>
          <div>
            <p className="lede">
              Essays, teardowns and quiet experiments — written by our practice
              leads. Long-form by default, edited by humans, published when we
              have something worth saying.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default InsightsHeader;

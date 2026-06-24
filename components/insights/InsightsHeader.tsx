const InsightsHeader = () => {
  return (
    <header className="pt-nav border-b border-line min-h-screen flex items-center ">
      <div
        aria-hidden="true"
       className="absolute inset-0 z-0 opacity-100 blur-[140px]
bg-[radial-gradient(circle_at_15%_20%,color-mix(in_oklch,var(--accent)_40%,transparent),transparent_42%),radial-gradient(circle_at_85%_15%,color-mix(in_oklch,var(--accent-2)_48%,transparent),transparent_36%),radial-gradient(circle_at_50%_40%,color-mix(in_oklch,var(--accent-3)_22%,transparent),transparent_52%)]"/>      <div className="container-custom">
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

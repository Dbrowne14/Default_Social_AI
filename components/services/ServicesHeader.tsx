const servicesHeader = () => {
  return (
    <header className="pt-nav flex items-center min-h-screen border-b border-line">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-100 blur-[140px]
bg-[radial-gradient(circle_at_15%_20%,color-mix(in_oklch,var(--accent)_40%,transparent),transparent_42%),radial-gradient(circle_at_85%_15%,color-mix(in_oklch,var(--accent-2)_48%,transparent),transparent_36%),radial-gradient(circle_at_50%_40%,color-mix(in_oklch,var(--accent-3)_22%,transparent),transparent_52%)]"
      />
      <div className="container-custom">
        <div className="eyebrow mb-9  font-bold border-none">Services</div>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-20 items-end">
          <h1 className="font-serif text-[clamp(50px,9vw,120px)]">
            Five practices.
            <br />
            One <em className="text-accent italic">AI-native</em>
            <br />
            operating model.
          </h1>
          <div>
            <p className="lede">
              Each practice ships standalone work — or networks together as a
              programme. Underneath all of them: a shared spine of strategy,
              data and an AI layer built to evolve with the market.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default servicesHeader;

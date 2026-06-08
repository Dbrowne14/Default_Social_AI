const servicesHeader = () => {
  return (
    <header className="pt-50 pb-20 border-b border-line">
      <div className="container-custom">
        <div className="eyebrow mb-9">Services</div>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-20 items-end">
          <h1 className="font-serif text-[clamp(56px,9vw,140px)]">
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

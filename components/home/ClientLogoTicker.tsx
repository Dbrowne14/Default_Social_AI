import DummyClientData from "../ui/DummyClientData"

const ClientLogoTicker = () => {
  return (
          <section className="border-y border-y-line" data-screen-label="Clients">
        <div className="container-thin py-10">
          <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted mb-7">
            Selected clients · 2023 — {new Date().getFullYear()}
          </div>
          <div className="flex whitespace-nowrap mask-[linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
            <div className="flex items-center w-max will-change-transform animate-marquee motion-reduce:animate-none [animation-duration:40s]">
              <DummyClientData />
              <DummyClientData />
            </div>
          </div>
        </div>
      </section>
  )
}

export default ClientLogoTicker

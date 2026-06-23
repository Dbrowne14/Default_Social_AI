import DummyClientData from "../ui/DummyClientData"

const ClientLogoTicker = () => {
  return (
<section
  className="border-y border-line "
  data-screen-label="Clients"
>
  <div className="container-thin py-5 xs:py-10">
    <div className="mb-3.5 xs:mb-7 flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase text-muted">
      <span className="font-semibold text-cream">Selected clients</span>
      <span className="h-px w-8 bg-line" aria-hidden="true" />
      <span>Since 2023</span>
    </div>

    <div className="rounded-xl border border-line bg-[color-mix(in_oklch,var(--ink)_82%,transparent)] py-4 shadow-[0_1px_0_rgba(255,255,255,0.05)_inset,0_18px_40px_rgba(0,0,0,0.18)] overflow-hidden">
      <div className="flex whitespace-nowrap mask-[linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex items-center w-max will-change-transform animate-marquee motion-reduce:animate-none [animation-duration:40s]">
          <DummyClientData />
          <DummyClientData />
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default ClientLogoTicker

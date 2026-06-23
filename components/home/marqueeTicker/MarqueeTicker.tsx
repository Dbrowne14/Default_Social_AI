import MarqueeTrack from "./MarqueeTrack"

const MarqueeTicker = () => {
  return (
     <div
        className="border-y border-line bg-ink py-4 xs:py-5.5 overflow-hidden"
        id="marquee-ticker"
      >
        <div className="flex whitespace-nowrap overflow-hidden mask-[linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex items-center animate-marquee [animation-duration:40s] motion-reduce:animate-none">
            {/* Track 1 */}
            <MarqueeTrack />
            {/* Track 2 */}
            <MarqueeTrack />
          </div>
        </div>
      </div>
  )
}

export default MarqueeTicker

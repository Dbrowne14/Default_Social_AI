import React from 'react'
import MarqueeTrack from './MarqueeTrack'

const MarqueeTicker = () => {
  return (
     <div
        className="border-y border-line bg-ink py-5.5 overflow-hidden"
        id="Marquee Ticker"
      >
        <div className="flex whitespace-nowrap overflow-hidden mask-[linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex items-center animate-marquee [animation-duration:40s]">
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

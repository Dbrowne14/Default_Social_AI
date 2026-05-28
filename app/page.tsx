const services = [
  "Web Development",
  "SEO & Organic Growth",
  "Social & Viral Campaigns",
  "Social-First Creative",
  "Marketing Strategy",
  "AI Integration",
];

export default function Home() {
  return (
    <div>
      /*---complete later---*/
      <section id="hero" className="min-h-screen"></section>
      <div className="border-y border-line bg-ink py-5.5 overflow-hidden">
        <div className="flex whitespace-nowrap mask-[linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex gap-12 items-center animate-marquee [animation-duration:26s]">
            {/* Track 1 */}
            <div className="flex gap-12 items-center shrink-0">
              {services.map((service, index) => (
                <span
                  key={`first-${index}`}
                  className={`font-serif text-[64px] text-cream inline-flex items-center gap-12 ${
                    index % 2 === 0 ? "" : "italic"
                  }`}
                >
                  {service}
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                </span>
              ))}
            </div>

            {/* Track 2 */}
            <div
              className="flex gap-12 items-center shrink-0"
              aria-hidden="true"
            >
              {services.map((service, index) => (
                <span
                  key={`second-${index}`}
                  className={`font-serif text-[64px] text-cream inline-flex items-center gap-12 ${
                    index % 2 === 0 ? "" : "italic"
                  }`}
                >
                  {service}
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

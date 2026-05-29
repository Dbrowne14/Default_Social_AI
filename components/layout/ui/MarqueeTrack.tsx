const services = [
  "Web Development",
  "SEO & Organic Growth",
  "Social & Viral Campaigns",
  "Social-First Creative",
  "Marketing Strategy",
  "AI Integration",
];

const MarqueeTrack = () => {
  return (
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
  );
};

export default MarqueeTrack;

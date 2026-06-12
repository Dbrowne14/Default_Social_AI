const SingleStatBlock = ({
  statsHeader,
  stat,
}: {
  statsHeader: string;
  stat: string;
}) => {
  return (
    <div className="flex flex-col gap-0.75">
      <span className="font-sans font-semibold text-[15px] text-cream">
        {statsHeader}
      </span>
      <span className="font-mono text-[10px] tracking-widest uppercase text-muted">
        {stat}
      </span>
    </div>
  );
};

export default SingleStatBlock;

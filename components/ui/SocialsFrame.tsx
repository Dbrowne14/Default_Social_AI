const SocialsFrame = ({link, logo}: {link:string, logo:string}) => {
  return (
    <a
      href={link}
      aria-label="Share on LinkedIn"
      className="w-9.5 h-9.5 rounded-[50%] border border-line flex items-center justify-center font-mono text-[12px] text-cream-2 [transition:border-color_.15s_ease,color_.15s_ease,transform_.15s_ease] hover:border-accent hover:text-accent hover:translate-y-px"
    >
      {logo}
    </a>
  );
};

export default SocialsFrame;

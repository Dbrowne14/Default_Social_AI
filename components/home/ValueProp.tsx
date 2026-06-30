import { getValueProp } from "@/lib/content/homePage";
import RichTitle from "../ui/RichTitle";

const ValueProp = async () => {
  const { eyebrow, title, lede } = await getValueProp();
  return (
    <section className="py-10" data-screen-label="Value prop">
      <div className="container-custom">
        <div className="max-w-190">
          <div className="eyebrow mb-7">{eyebrow}</div>
          <p className="font-serif text-[clamp(38px,4.6vw,64px)] leading-[1.1] max-w-[18ch] tracking-[-0.01em]">
            <RichTitle title={title} />
          </p>
          <p className="lede mt-9 max-w-[58ch] text-cream-2 text-4.5 leading-[1.55]">
            {lede}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;

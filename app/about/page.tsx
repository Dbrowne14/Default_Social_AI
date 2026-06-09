import AboutHeader from "@/components/about/AboutHeader";
import AboutValues from "@/components/about/AboutValues";

const Page = () => {
  return (
    <div data-screen-label="02 About">
      <AboutHeader />
      <AboutValues />
      <section className="group-structure" data-screen-label="Group">
        <div className="container">
          <div className="section-head">
            <div className="title-block">
              <div className="eyebrow">02 · Our place in the group</div>
              <h2>
                Part of Default
                <br />
                Media Group.
              </h2>
            </div>
            <p className="meta">
              We're one of three sibling studios inside Default Media Group —
              each independent, but networked through a shared operating spine,
              shared AI tooling, and a shared address in Brentford.
            </p>
          </div>

          <div className="org-tree">
            <div className="org-card parent">
              <span className="label">Group</span>
              <h3 className="serif ">Default Media Group</h3>
              <p className="max-w-[50ch]">
                A privately-held media, marketing and technology group founded
                in 2016. Three sibling studios operate beneath one shared spine
                of finance, AI, data and people.
              </p>
            </div>

            <div className="org-card self">
              <span className="label text-accent">
                ▍ This studio
              </span>
              <h3 className="serif">Default Social</h3>
              <p>
                Digital, social, technology &amp; AI. Web builds, SEO, social
                systems, viral campaign IP, marketing strategy, AI integration.
              </p>
            </div>

            <div className="org-card">
              <span className="label">Sibling</span>
              <h3 className="serif">Default Media</h3>
              <p>
                Above-the-line media planning, partnerships, sponsorships and
                broadcast — the group's traditional media engine.
              </p>
            </div>

            <div className="org-card">
              <span className="label">Sibling</span>
              <h3 className="serif">Default Studios</h3>
              <p>
                Brand, identity, packaging and editorial — the group's creative
                house, supplying craft into every engagement.
              </p>
            </div>
          </div>

          <p className="lede mt-19 max-w-[70ch]">
            When a client engages Default Social, they get our studio on the
            front line — and the group's full operating depth standing behind
            it. One brief, one team, four houses' worth of muscle.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Page;

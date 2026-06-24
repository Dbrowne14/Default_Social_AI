import PageHeader from "../ui/PageHeader";

const servicesHeader = () => {
  return (
    <PageHeader
      eyebrow="Services"
      title={
        <>
          Five practices.
          <br />
          One <em className="text-accent italic">AI-native</em>
          <br />
          operating model.
        </>
      }
    >
      <div>
        <p className="lede">
          Each practice ships standalone work — or networks together as a
          programme. Underneath all of them: a shared spine of strategy, data
          and an AI layer built to evolve with the market.
        </p>
      </div>
    </PageHeader>
  );
};

export default servicesHeader;

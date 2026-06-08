import React from "react";

const ServicesContact = () => {
  return (
    <section className=" border-t border-line">
      <div className="container-custom flex justify-between items-end flex-wrap gap-8">
        <h2 className="font-serif max-w-[18ch]">
          Not sure where to start?
          <br />
          <em className="text-accent">Talk to a strategist.</em>
        </h2>
        <div className="flex gap-3">
          <a className="btn" href="/contact">
            Start a project <span className="arr">→</span>
          </a>
          <a className="btn ghost" href="about-v0.html">
            About the studio <span className="arr">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesContact;

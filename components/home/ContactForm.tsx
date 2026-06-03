import React from "react";

const ContactForm = () => {
  return (
    <section
      className="border-t border-line bg-ink"
      id="contact"
      data-screen-label="Contact"
    >
      <div className="container-custom py-20 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
        <div>
          <div className="eyebrow">05 · Contact</div>
          <h2 className="font-serif text=[clamp(40px,5vw,80px)] mt-5">
            Let's make
            <br />
            your default,
            <br />
            <em className="text-accent">remarkable.</em>
          </h2>
          <p className="text-cream-2 max-w-[38ch] mt-4.5">
            Tell us where you're going — a sentence or two is fine. A real human
            reads everything that comes in, and we aim to reply within two
            working days.
          </p>

          <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6">
            <div className="flex justify-between items-center font-mono text-[12px] tracking-[0.08em] uppercase">
              <span className="text-muted">Studio</span>
              <span>Brentford · London</span>
            </div>
            <div className="flex justify-between items-center font-mono text-[12px] tracking-[0.08em] uppercase">
              <span className="text-muted">Email</span>
              <span>
                <a href="mailto:info@defaultmedia.com" className="footer-links">
                  info@defaultmedia.com
                </a>
              </span>
            </div>
            <div className="flex justify-between items-center font-mono text-[12px] tracking-[0.08em] uppercase">
              <span className="text-muted">Phone</span>
              <span>+44 7878 849 182</span>
            </div>
            <div className="flex justify-between items-center font-mono text-[12px] tracking-[0.08em] uppercase">
              <span className="text-muted">Part of</span>
              <span>Default Media Group</span>
            </div>
          </div>
        </div>

        <form className="flex flex-col gap-4.5">
          <div className="grid grid-cols-1 xs520:grid-cols-2 gap-2.5">
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted">
                Name
              </label>
              <input
                className="form-field"
                type="text"
                placeholder="First &amp; last"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted">
                Company
              </label>
              <input
                className="form-field"
                type="text"
                placeholder="Brand or org"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 xs520:grid-cols-2 gap-2.5">
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted">
                Work email
              </label>
              <input
                className="form-field"
                type="email"
                placeholder="you@company.com"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted">
                Type of enquiry
              </label>
              <select className="form-field">
                <option>New project</option>
                <option>Retained partnership</option>
                <option>Speaking &amp; press</option>
                <option>Careers</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted">
              What are you trying to make happen?
            </label>
            <textarea
              rows={5}
              placeholder="A few sentences is enough."
              className="form-field"
            ></textarea>
          </div>
          <button
            className="w-fit bg-accent hover:bg-accent-deep text-on-accent border text-[12px] inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-mono uppercase transition-all duration-150 ease-in-out hover:-translate-y-px tracking-widest"
            type="submit"
          >
            <span>Send message</span>{" "}
            <span className="flex size-4.5 shrink-0 items-center justify-center rounded-full bg-cream text-on-accent text-[10px] leading-none">
              →
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

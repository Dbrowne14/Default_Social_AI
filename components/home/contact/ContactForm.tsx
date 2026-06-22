const inputFields = [
  {
    label: "Name",
    type: "text",
    placeholder: "First & last",
    name: "name",
  },
  {
    label: "Company",
    type: "text",
    placeholder: "Brand or org",
    name: "company",
  },
  {
    label: "Work email",
    type: "email",
    placeholder: "you@company.com",
    name: "email",
  },
] as const;

const enquiries = [
  "New project",
  "Retained partnership",
  "Speaking & press",
  "Careers",
  "Other",
];

type LabelledSlotProps = {
  label: string;
  children: React.ReactNode;
};

function Field({ label, children }: LabelledSlotProps) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}

function InfoRow({ label, children }: LabelledSlotProps) {
  return (
    <div className="flex items-center justify-between font-mono text-[12px] uppercase tracking-[0.08em]">
      <span className="text-muted">{label}</span>
      <span>{children}</span>
    </div>
  );
}

export default function ContactForm() {
  return (
    <section
      id="contact"
      data-screen-label="Contact"
      className="border-t border-line bg-ink"
    >
      <div className="container-custom grid gap-10 py-20 md:grid-cols-2 md:gap-12">
        <div>
          <div className="eyebrow">05 · Contact</div>

          <h2 className="mt-5 font-serif text-[clamp(40px,5vw,80px)]">
            Let&apos;s make
            <br />
            your default,
            <br />
            <em className="text-accent">remarkable.</em>
          </h2>

          <p className="mt-4.5 max-w-[38ch] text-cream-2">
            Tell us where you&apos;re going — a sentence or two is fine. A real
            human reads everything that comes in, and we aim to reply within two
            working days.
          </p>

          <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6">
            <InfoRow label="Studio">Brentford · London</InfoRow>

            <InfoRow label="Email">
              <a href="mailto:info@defaultmedia.com" className="footer-links">
                info@defaultmedia.com
              </a>
            </InfoRow>

            <InfoRow label="Phone">+44 7878 849 182</InfoRow>
            <InfoRow label="Part of">Default Media Group</InfoRow>
          </div>
        </div>

        <form className="flex flex-col gap-4.5">
          <div className="grid gap-2.5 xs520:grid-cols-2">
            {inputFields.map((field) => (
              <Field key={field.name} label={field.label}>
                <input
                  required
                  className="form-field"
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              </Field>
            ))}

            <Field label="Type of enquiry">
              <select required name="enquiryType" className="form-field">
                {enquiries.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="What are you trying to make happen?">
            <textarea
              required
              rows={5}
              name="message"
              className="form-field"
              placeholder="A few sentences is enough."
            />
          </Field>

          <button
            type="submit"
            className="btn w-fit border bg-accent text-on-accent hover:bg-accent-deep"
          >
            Send message
            <span className="flex size-4.5 shrink-0 items-center justify-center rounded-full bg-cream text-on-accent text-[10px] leading-none">
              →
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

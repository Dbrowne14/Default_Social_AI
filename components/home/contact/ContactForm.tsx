"use client";
import { useActionState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import type { ContactFormState } from "@/app/actions/contact";

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

const initialState: ContactFormState = {
  success: false,
  message: "",
  errors: {},
};

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );

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

        <form className="flex flex-col gap-4.5" action={formAction}>
          <div className="grid gap-2.5 xs520:grid-cols-2">
            <Field label="Name">
              <input
                required
                className="form-field"
                type="text"
                name="name"
                placeholder="First & last"
              />
              {state.errors.name && (
                <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-red-400">
                  {state.errors.name[0]}
                </p>
              )}
            </Field>

            <Field label="Company">
              <input
                className="form-field"
                type="text"
                name="company"
                placeholder="Brand or org"
              />
              {state.errors.company && (
                <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-red-400">
                  {state.errors.company[0]}
                </p>
              )}
            </Field>

            <Field label="Work email">
              <input
                required
                className="form-field"
                type="email"
                name="email"
                placeholder="you@company.com"
              />
              {state.errors.email && (
                <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-red-400">
                  {state.errors.email[0]}
                </p>
              )}
            </Field>

            <Field label="Type of enquiry">
              <select required name="enquiryType" className="form-field">
                {enquiries.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
              {state.errors.enquiryType && (
                <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-red-400">
                  {state.errors.enquiryType[0]}
                </p>
              )}
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
            {state.errors.message && (
              <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-red-400">
                {state.errors.message[0]}
              </p>
            )}
          </Field>

          <button
            disabled={pending}
            type="submit"
            className="btn w-fit border bg-accent text-on-accent hover:bg-accent-deep disabled:opacity-60"
          >
            {pending ? "Sending..." : "Send message"}
            <span className="flex size-4.5 shrink-0 items-center justify-center rounded-full bg-cream text-on-accent text-[10px] leading-none">
              →
            </span>
          </button>

          {state.message && (
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
              {state.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

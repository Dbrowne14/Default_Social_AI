"use client";

import { useActionState, useState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import type { ContactFormState } from "@/app/actions/contact";
import type { SectionIntro, TitleLine } from "@/types/shared";
import type { SiteSettings } from "@/types/site";
import RichTitle from "@/components/ui/RichTitle";

const enquiries = [
  "New project",
  "Careers",
  "Retained partnership",
  "Speaking & press",
  "Other",
] as const;

type EnquiryType = (typeof enquiries)[number];

type FieldText = {
  label: string;
  placeholder: string;
};

type CareersData = {
  eyebrow: string;
  title: TitleLine[];
  meta: string;
  email: FieldText;
  company: FieldText;
  message: FieldText;
  buttonText: string;
};

const careersData: CareersData = {
  eyebrow: "05 · Join us",
  title: [
    {
      segments: [{ text: "LET'S MAKE" }],
    },
    {
      segments: [{ text: "SOMETHING" }],
    },
    {
      segments: [{ text: "REMARKABLE.", accent: true }],
    },
  ],
  meta: "Interested in joining Default Social? Tell us a little about yourself, what you do and where you think you could make an impact.",
  email: {
    label: "Email",
    placeholder: "you@email.com",
  },
  company: {
    label: "Current role",
    placeholder: "Role / area of expertise",
  },
  message: {
    label: "Tell us about yourself",
    placeholder:
      "What you do, what you're looking for, and why Default Social.",
  },
  buttonText: "Send application",
};

type LabelledSlotProps = {
  label: string;
  children: React.ReactNode;
};

type ContactFormProps = {
  section: SectionIntro;
  siteSettings: SiteSettings;
};

const initialState: ContactFormState = {
  success: false,
  message: "",
  errors: {},
};

function Field({ label, children }: LabelledSlotProps) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="heading-sans text-[10px] uppercase text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}

function InfoRow({ label, children }: LabelledSlotProps) {
  return (
    <div className="flex items-center justify-between heading-sans text-[12px] tracking-[0.09em]">
      <span className="text-muted">{label}</span>
      <span className="text-[color-mix(in_oklch,white_80%,black)]">
        {children}
      </span>
    </div>
  );
}

export default function ContactForm({
  section,
  siteSettings,
}: ContactFormProps) {
  const { eyebrow, title, meta } = section;
  const { contact, groupLink } = siteSettings;
  const { email, location } = contact;

  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );

  const [enquiry, setEnquiry] = useState<EnquiryType>("New project");

  const isCareers = enquiry === "Careers";

  const intro = isCareers
    ? {
        eyebrow: careersData.eyebrow,
        title: careersData.title,
        meta: careersData.meta,
      }
    : {
        eyebrow,
        title,
        meta,
      };

  const formCopy = isCareers
    ? {
        company: careersData.company,
        email: careersData.email,
        message: careersData.message,
        buttonText: careersData.buttonText,
      }
    : {
        company: {
          label: "Company",
          placeholder: "Brand or org",
        },
        email: {
          label: "Work email",
          placeholder: "you@company.com",
        },
        message: {
          label: "What are you trying to make happen?",
          placeholder: "A few sentences is enough.",
        },
        buttonText: "Send message",
      };

  return (
    <section
      id="contact"
      data-screen-label="Contact"
      className="border-t border-line bg-ink"
    >
      <div className="container-custom grid gap-10 py-20 md:grid-cols-2 md:gap-12">
        <div>
          <div className="eyebrow">{intro.eyebrow}</div>

          <h2 className="mt-5 text-[clamp(40px,5vw,70px)]">
            <RichTitle title={intro.title} />
          </h2>

          <p className="mt-4.5 max-w-[38ch] text-cream-2">
            {intro.meta}
          </p>

          <div className="mt-10 hidden flex-col gap-4 border-t border-line pt-6 md:flex">
            <InfoRow label="Studio">{location}</InfoRow>

            <InfoRow label="Email">
              <a href={`mailto:${email}`} className="hover:text-signal-red">
                {email}
              </a>
            </InfoRow>

            <InfoRow label="Part of">{groupLink.label}</InfoRow>
          </div>
        </div>

        <form className="flex flex-col gap-4.5" action={formAction} noValidate>
          <div className="grid gap-2.5 xs520:grid-cols-2">
            <Field label="Name">
              <input
                required
                id="name"
                className="form-field"
                type="text"
                name="name"
                placeholder="First & last"
                aria-invalid={Boolean(state.errors.name)}
                aria-describedby={state.errors.name ? "name-error" : undefined}
              />

              {state.errors.name && (
                <p
                  id="name-error"
                  className="heading-sans text-[10px] text-red-400"
                >
                  {state.errors.name[0]}
                </p>
              )}
            </Field>

            <Field label={formCopy.company.label}>
              <input
                id="company"
                className="form-field"
                type="text"
                name="company"
                placeholder={formCopy.company.placeholder}
                aria-invalid={Boolean(state.errors.company)}
                aria-describedby={
                  state.errors.company ? "company-error" : undefined
                }
              />

              {state.errors.company && (
                <p
                  id="company-error"
                  className="heading-sans text-[10px] text-red-400"
                >
                  {state.errors.company[0]}
                </p>
              )}
            </Field>

            <Field label={formCopy.email.label}>
              <input
                required
                id="email"
                className="form-field"
                type="email"
                name="email"
                placeholder={formCopy.email.placeholder}
                aria-invalid={Boolean(state.errors.email)}
                aria-describedby={
                  state.errors.email ? "email-error" : undefined
                }
              />

              {state.errors.email && (
                <p
                  id="email-error"
                  className="heading-sans text-[10px] uppercase tracking-[0.08em] text-red-400"
                >
                  {state.errors.email[0]}
                </p>
              )}
            </Field>

            <Field label="Type of enquiry">
              <select
                required
                id="enquiryType"
                name="enquiryType"
                value={enquiry}
                className="form-field"
                onChange={(e) => setEnquiry(e.target.value as EnquiryType)}
                aria-invalid={Boolean(state.errors.enquiryType)}
                aria-describedby={
                  state.errors.enquiryType ? "enquiryType-error" : undefined
                }
              >
                {enquiries.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              {state.errors.enquiryType && (
                <p
                  id="enquiryType-error"
                  className="heading-sans text-[10px] text-red-400"
                >
                  {state.errors.enquiryType[0]}
                </p>
              )}
            </Field>
          </div>

          <Field label={formCopy.message.label}>
            <textarea
              required
              id="message"
              rows={5}
              name="message"
              className="form-field"
              placeholder={formCopy.message.placeholder}
              aria-invalid={Boolean(state.errors.message)}
              aria-describedby={
                state.errors.message ? "message-error" : undefined
              }
            />

            {state.errors.message && (
              <p
                id="message-error"
                className="heading-sans text-red-400"
              >
                {state.errors.message[0]}
              </p>
            )}
          </Field>

          <button
            disabled={pending}
            type="submit"
            className="btn w-fit border bg-accent-deep text-on-accent hover:bg-accent disabled:opacity-60"
          >
            {pending ? "Sending..." : formCopy.buttonText}

            <span
              aria-hidden="true"
              className="flex size-4.5 shrink-0 items-center justify-center rounded-full bg-ink text-[10px] leading-none text-cream"
            >
              →
            </span>
          </button>

          {state.message && (
            <p role="status" className="heading-sans text-[11px]">
              {state.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
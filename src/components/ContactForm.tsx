"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const defaultFormspreeEndpoint = "https://formspree.io/f/xyezdbjo";

function validate(values: FormState) {
  const errors: Partial<FormState> = {};
  if (!values.name.trim()) errors.name = "Full name is required.";
  if (!values.email.trim()) errors.email = "Email address is required.";
  else if (!emailPattern.test(values.email)) errors.email = "Enter a valid email address.";
  if (!values.subject.trim()) errors.subject = "Subject is required.";
  if (!values.message.trim()) errors.message = "Message is required.";
  else if (values.message.trim().length < 20) {
    errors.message = "Please write at least 20 characters so we can help you properly.";
  }
  return errors;
}

export function ContactForm() {
  const router = useRouter();
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setFormError("");
    if (Object.keys(nextErrors).length > 0) return;

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || defaultFormspreeEndpoint;

    setSubmitting(true);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      router.push("/thank-you");
    } catch {
      setFormError("We could not send your message because of a network or server error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="surface-card rounded-2xl p-6 sm:p-8" noValidate>
      <div className="grid gap-5">
        <Field
          id="name"
          label="Full Name"
          value={values.name}
          error={errors.name}
          onChange={(value) => setValues((current) => ({ ...current, name: value }))}
        />
        <Field
          id="email"
          label="Email Address"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={(value) => setValues((current) => ({ ...current, email: value }))}
        />
        <Field
          id="subject"
          label="Subject"
          value={values.subject}
          error={errors.subject}
          onChange={(value) => setValues((current) => ({ ...current, subject: value }))}
        />
        <Field
          id="message"
          label="Message"
          as="textarea"
          value={values.message}
          error={errors.message}
          onChange={(value) => setValues((current) => ({ ...current, message: value }))}
        />
      </div>
      {formError ? (
        <p className="mt-4 text-sm text-red-700" role="alert">
          {formError}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  as = "input",
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  as?: "input" | "textarea";
}) {
  const shared =
    "glass-field mt-2 w-full rounded-xl border px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand";
  const border = error ? "border-red-500" : "border-line";

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-brand-deep">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`${shared} ${border} min-h-32 resize-y`}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`${shared} ${border}`}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      )}
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

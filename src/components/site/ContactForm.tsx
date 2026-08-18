import { useState } from "react";
import { toast } from "sonner";

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-display text-xs tracking-widest text-muted-foreground">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
      />
    </label>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="space-y-4 rounded-sm border border-border bg-card p-8 shadow-sm"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        toast.success("Message received", {
          description: "Our team will get back to you shortly.",
        });
        (e.target as HTMLFormElement).reset();
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" />
        <Field label="Subject" name="subject" />
      </div>
      <label className="block">
        <span className="font-display text-xs tracking-widest text-muted-foreground">
          Your Message *
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-sm bg-primary py-3 font-display tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
      >
        Send Message
      </button>
      {sent && (
        <p className="text-sm text-primary">
          Thanks — your enquiry has been noted. We'll be in touch shortly.
        </p>
      )}
    </form>
  );
}

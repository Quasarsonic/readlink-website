"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: String(formData.get("name") || ""),
          email: String(formData.get("email") || ""),
          subject: String(formData.get("subject") || ""),
          message: String(formData.get("message") || ""),
          website: String(formData.get("website") || ""),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        setStatus("error");
        setMessage(data.error || "Unable to send message right now.");
        return;
      }

      form.reset();
      setStatus("success");
      setMessage("Message sent successfully. We usually reply within 1-2 business days.");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again in a minute.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 rounded-3xl border border-border bg-background p-6 sm:p-8">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          maxLength={120}
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-foreground/40"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={160}
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-foreground/40"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          required
          maxLength={180}
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-foreground/40"
          placeholder="How can we help?"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={5000}
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-foreground/40"
          placeholder="Write your message..."
        />
      </div>

      {/* Honeypot field for basic bot filtering. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-foreground/90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>

      {message ? (
        <p
          className={`text-sm ${
            status === "error" ? "text-red-600" : "text-green-700"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactBody = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  website?: string;
};

function sanitize(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !toEmail || !fromEmail) {
    return NextResponse.json(
      { error: "Contact form is not configured yet." },
      { status: 500 },
    );
  }

  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = sanitize(body.name || "");
  const email = sanitize((body.email || "").toLowerCase());
  const subject = sanitize(body.subject || "");
  const message = (body.message || "").trim();

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Please complete all fields." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  if (message.length > 5000 || subject.length > 180 || name.length > 120) {
    return NextResponse.json(
      { error: "Message exceeds allowed length." },
      { status: 400 },
    );
  }

  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `[Contact] ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to send your message right now." },
      { status: 500 },
    );
  }
}

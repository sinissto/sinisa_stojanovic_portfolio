"use server";

import { Resend } from "resend";

type SendResult = { ok: true } | { ok: false; error: string };

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Missing `RESEND_API_KEY` environment variable");
  }
  return new Resend(apiKey);
}

export const sendMessage = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}): Promise<SendResult> => {
  try {
    const resend = getResendClient();

    await resend.emails.send({
      from: "Portfolio contact <onboarding@resend.dev>",
      to: process.env.TO_EMAIL!,
      subject: `New contact form submission from ${data.firstName} ${data.lastName}`,
      text: `From: ${data.email}\n\n${data.message}`,
    });
    return { ok: true };
  } catch (error) {
    return { ok: false, error: `Failed to send email. ${error}` };
  }
};

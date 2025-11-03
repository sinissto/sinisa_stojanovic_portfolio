"use server";

export const sendMessage = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}) => {
  // Here you can implement the logic to send the message,
  // e.g., sending an email or storing it in a database.
  console.log("Message sent:", data);

  return { ok: true, data: data };
};

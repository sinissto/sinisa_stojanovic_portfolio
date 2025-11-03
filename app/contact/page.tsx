"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/schemas/contactFormSchema";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { sendMessage } from "@/actions/contact";

type FormData = z.infer<typeof contactFormSchema>;

const ContactPage = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await sendMessage(data);
      console.log(res);
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      reset();
    } catch (err) {
      console.log(err);
      setStatus("error");
    }
  };

  return (
    <div className={"w-[50vw] mx-auto py-12"}>
      <h1 className={"text-3xl font-semibold mb-6 text-accent"}>
        Let&apos;s work together!
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className={"space-y-4"}>
        <input
          {...register("firstName")}
          placeholder="First Name"
          className="w-full p-2 border border-gray-300 rounded outline-none focus:border-none focus:ring-2 focus:ring-accent"
        />
        {errors.firstName && (
          <p className={"text-red-500 text-sm"}>{errors.firstName.message}</p>
        )}

        <input
          {...register("lastName")}
          placeholder="Last Name"
          className="w-full p-2 border border-gray-300 rounded outline-none focus:border-none focus:ring-2 focus:ring-accent"
        />
        {errors.lastName && (
          <p className={"text-red-500 text-sm"}>{errors.lastName.message}</p>
        )}

        <label htmlFor={"email"}></label>
        <input
          {...register("email")}
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded outline-none focus:border-none focus:ring-2 focus:ring-accent"
          autoComplete={"off"}
          type={"email"}
          id={"email"}
        />
        {errors.email && (
          <p className={"text-red-500 text-sm"}>{errors.email.message}</p>
        )}

        <textarea
          {...register("message")}
          placeholder="Your message..."
          rows={5}
          className="w-full p-2 border border-gray-300 rounded outline-none focus:border-none focus:ring-2 focus:ring-accent"
        />
        {errors.message && (
          <p className={"text-red-500 text-sm"}>{errors.message.message}</p>
        )}

        <Button
          variant={"outline"}
          type={"submit"}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </Button>

        {status === "success" && (
          <p className={"text-accent text-center mt-2"}>
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className={"text-red-500 text-center mt-2"}>
            Failed to send message. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactPage;

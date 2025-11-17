"use client";

import { AnimatePresence, motion } from "framer-motion";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/schemas/contactFormSchema";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { sendMessage } from "@/actions/contact";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type FormData = z.infer<typeof contactFormSchema>;

const ContactPage = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const form = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await sendMessage(data);

      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      form.reset();
    } catch (err) {
      console.log(err);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.4, duration: 0.5 }}
      className={"sm:w-[90vw] lg:w-[50vw] mx-auto py-16 px-4"}
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={"text-4xl font-semibold mb-8 text-center text-accent"}
      >
        Let&apos;s work together!
      </motion.h1>

      <AnimatePresence mode={"wait"}>
        {status !== "success" ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={"space-y-6"}
              >
                <div className={"grid grid-cols-1 gap-6"}>
                  {/* FIRST NAME FORM FIELD*/}
                  <FormField
                    name={"firstName"}
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={"text-accent"}>
                          First name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={"First name"}
                            {...field}
                            className={
                              "w-full p-2 border border-gray-300 rounded outline-none focus:border-none focus:ring-2 focus:ring-accent"
                            }
                          />
                        </FormControl>
                        <FormMessage className={"text-red-500 font-semibold"} />
                      </FormItem>
                    )}
                  />

                  {/* LAST NAME FORM FIELD*/}
                  <FormField
                    control={form.control}
                    name={"lastName"}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={"text-accent"}>
                          Last name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={"Last name"}
                            {...field}
                            className={
                              "w-full p-2 border border-gray-300 rounded outline-none focus:border-none focus:ring-2 focus:ring-accent"
                            }
                          />
                        </FormControl>
                        <FormMessage className={"text-red-500 font-semibold"} />
                      </FormItem>
                    )}
                  />

                  {/* EMAIL FORM FIELD*/}
                  <FormField
                    control={form.control}
                    name={"email"}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={"text-accent"}>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={"you@example.com"}
                            {...field}
                            type={"email"}
                            className={
                              "w-full p-2 border border-gray-300 rounded outline-none focus:border-none focus:ring-2 focus:ring-accent"
                            }
                          />
                        </FormControl>
                        <FormMessage className={"text-red-500 font-semibold"} />
                      </FormItem>
                    )}
                  />

                  {/* MESSAGE FORM FIELD */}
                  <FormField
                    control={form.control}
                    name={"message"}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={"text-accent"}>Message</FormLabel>
                        <FormControl>
                          <FormControl>
                            <Textarea
                              placeholder={"Your message..."}
                              rows={5}
                              {...field}
                              className={
                                "w-full h-36 p-2 border border-gray-300 rounded outline-none focus:border-none focus:ring-2 focus:ring-accent"
                              }
                            />
                          </FormControl>
                        </FormControl>
                        <FormMessage className={"text-red-500 font-semibold"} />
                      </FormItem>
                    )}
                  />

                  <motion.div
                    // whileTap={{ scale: 0.95 }}
                    className={"text-center outline-none pointer-events-none"}
                  >
                    <Button
                      variant={"outline"}
                      type={"submit"}
                      disabled={status === "loading"}
                      className={"outline-none active:scale-95"}
                    >
                      {status === "loading" ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>

                  {/* Animated feedback messages */}
                  <AnimatePresence>
                    {/*{status === "success" && (*/}
                    {/*  <motion.div*/}
                    {/*    initial={{ opacity: 0, y: 20 }}*/}
                    {/*    animate={{ opacity: 1, y: 0 }}*/}
                    {/*    exit={{ opacity: 0, y: -20 }}*/}
                    {/*    transition={{ duration: 0.5 }}*/}
                    {/*    className={*/}
                    {/*      "text-accent text-center mt-2 flex items-center justify-center gap-3"*/}
                    {/*    }*/}
                    {/*  >*/}
                    {/*    <span className={"text-3xl"}>✓</span>*/}
                    {/*    <span>Message sent successfully!</span>*/}
                    {/*  </motion.div>*/}
                    {/*)}*/}
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className={
                          "text-red-500 text-center flex items-center justify-center gap-3"
                        }
                      >
                        <span className={"text-3xl"}>❌</span>
                        <span>Failed to send message. Please try again.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </Form>
          </motion.div> // Thank-you card
        ) : (
          <motion.div
            key="thankyou"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="text-center p-8 shadow-lg border border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-accent">
                  🎉 Thank You!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white mb-4">
                  <span>Your message has been sent successfully.</span>
                  <br />
                  <span>I&apos;ll get back to you as soon as possible!</span>
                </p>
                {/*<Button*/}
                {/*  onClick={() => setStatus("idle")}*/}
                {/*  variant="outline"*/}
                {/*  className="mt-2"*/}
                {/*>*/}
                {/*  Send Another Message*/}
                {/*</Button>*/}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ContactPage;

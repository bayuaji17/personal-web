"use client";

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../ui/textarea";
import { formSchema } from "@/lib/schema";
import { useState, useTransition } from "react";
import { sendEmail } from "@/lib/action";
import { useTranslations } from "next-intl";
export default function FormContact() {
  const t = useTranslations("contact");
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{
    status: string;
    message?: string;
  } | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setResult(null);
    startTransition(async () => {
      const res = await sendEmail(values);
      setResult(res);
      if (res.status === "success") {
        form.reset();
      }
    });
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder={t("rightSide.placeholder.name")}
                    className="placeholder:text-sm"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={t("rightSide.placeholder.email")}
                    className="placeholder:text-sm"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder={t("rightSide.placeholder.subject")}
                    className="placeholder:text-sm"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t("rightSide.placeholder.message")}
                    className="placeholder:text-sm bg-card"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isPending}
            className="w-full text-popover"
          >
            {isPending ? t("rightSide.buttonLoading") : t("rightSide.button")}
          </Button>
          {result && (
            <div
              className="bg-chart-2 p-2 rounded-md"
              aria-label={
                result.status === "success"
                  ? "Success message"
                  : "Error message"
              }
            >
              <p
                className={
                  result.status === "success"
                    ? "text-foreground text-center text-wrap"
                    : "text-red-500 text-center"
                }
              >
                {result.status === "success"
                  ? t("rightSide.success")
                  : t("rightSide.error")}
              </p>
            </div>
          )}
        </form>
      </Form>
    </>
  );
}

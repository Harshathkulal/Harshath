"use client";

import { FormValidator, FormValues } from "@/lib/validators/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/Input";
import SendButton from "@/components/ui/SendButton";
import { Textarea } from "@/components/ui/Textarea";
import AnimationContainer from "@/components/utils/AnimationContainer";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { SiWhatsapp } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

const ContactMe = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormValidator),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        form.reset();
        setIsSent(true);
        toast("Your message has been received!", {
          description: "I got your message, I will get back to you soon!",
        });
      } else {
        const errorData = await response.json();
        toast("Something went wrong!", {
          description:
            errorData.errors || "Unable to send message, please try again.",
        });
      }
    } catch (error) {
      toast("Something went wrong!", {
        description: "Unable to send message, please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimationContainer customClassName="w-full py-12 lg:py-16">
      <div className="flex-col items-center mb-8 lg:items-start">
        <h2 className="text-2xl font-bold tracking-tight text-center text-white lg:text-start">
          Get in Touch
        </h2>
        <p className="mt-2 font-normal text-center lg:text-start text-neutral-300">
          Something on your mind? Feel free to drop me a message.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex items-center justify-center w-full gap-2 mb-8">
          <Link href="mailto:harshathmkulal@gmail.com" className="flex w-full">
            <Button
              type="button"
              variant="outline"
              className="rounded-lg hover:scale-100"
            >
              <div className="text-base font-medium text-white">
                <BiLogoGmail />
              </div>
            </Button>
          </Link>
          <Link href="https://wa.me/qr/X3KZKVL6THKXA1" className="flex w-full ">
            <Button type="button" variant="outline" className="hover:scale-100">
              <div className="text-base font-medium text-white">
                <SiWhatsapp />
              </div>
            </Button>
          </Link>
          <Link href="https://x.com/Hxrshxth_K" className="flex w-full ">
            <Button type="button" variant="outline" className="hover:scale-100">
              <div className="text-base font-medium text-white">
                <FaXTwitter />
              </div>
            </Button>
          </Link>
          <Link
            href="https://www.instagram.com/harshath_kulal/"
            className="flex w-full "
          >
            <Button type="button" variant="outline" className="hover:scale-100">
              <div className="text-base font-medium text-white">
                <FaInstagram />
              </div>
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/harshath-kulal-ba078b209/"
            className="flex w-full "
          >
            <Button type="button" variant="outline" className="hover:scale-100">
              <div className="text-base font-medium text-white">
                <SiLinkedin />
              </div>
            </Button>
          </Link>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center w-full space-y-5 text-white"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isLoading}
                      type="text"
                      placeholder="Name"
                      autoComplete="off"
                      className="h-12 px-5 capitalize outline-none"
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.name &&
                      form.formState.errors.name.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <div className="flex flex-col items-center justify-center w-full gap-4 md:flex-row">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem
                    className={cn(
                      "w-full mb-0",
                      form.formState.errors.phone && "mb-5"
                    )}
                  >
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isLoading}
                        required
                        type="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="off"
                        className="h-12 px-5 outline-none"
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.email &&
                        form.formState.errors.email.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem
                    className={cn(
                      "w-full mb-0",
                      form.formState.errors.email && "mb-5"
                    )}
                  >
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isLoading}
                        required
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        autoComplete="off"
                        className="h-12 px-5 outline-none"
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.phone &&
                        form.formState.errors.phone.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Textarea
                      {...field}
                      disabled={isLoading}
                      required
                      rows={5}
                      name="message"
                      placeholder="Message..."
                      autoComplete="off"
                      className="w-full p-5 outline-none resize-none"
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.message &&
                      form.formState.errors.message.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <div className="flex items-center justify-center w-full mx-auto">
              <SendButton
                isSent={isSent}
                isLoading={isLoading}
                setIsSent={setIsSent}
                disabled={form.formState.disabled}
              />
            </div>
          </form>
        </Form>
      </div>
    </AnimationContainer>
  );
};

export default ContactMe;

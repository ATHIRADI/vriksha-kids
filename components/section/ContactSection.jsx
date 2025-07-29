"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import SectionTitle from "../SectionTitle";
import SocialIcons from "../SocialIcons";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection({ information }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Message sent!");
        reset();
      } else {
        toast.error("Failed to send message");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
          markers: false,
        },
      });

      tl.fromTo(
        ".top",
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.1,
        }
      );

      tl.fromTo(
        ".left",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.1,
        }
      );

      tl.fromTo(
        ".right",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.1,
        }
      );
      tl.fromTo(
        ".below",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="containerBody top flex justify-center items-center min-h-[50vh] py-16 xl:py-32 text-text-dark relative"
    >
      <div className="grid md:grid-cols-2 gap-12 relative z-10  w-full">
        <div className="space-y-8  flex flex-col justify-center items-start left">
          <SectionTitle
            title="come visit us"
            className="text-text-dark text-center md:text-start "
          />
          {information.map((item, index) => (
            <div key={index} className="flex flex-col below text-start">
              <h4 className="h5">{item.title}</h4>
              {item.info.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          ))}
          <SocialIcons />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="w-full flex flex-col justify-center space-y-6 bg-accent rounded-md text-text-dark px-6 md:px-12 py-8 shadow-xl right">
            <div className="w-full grid md:grid-cols-2 gap-6">
              <div>
                <p className="pb-2 text-text-dark">Full Name</p>
                <Input
                  {...register("name")}
                  placeholder="Your name"
                  className="bg-tertiary text-disabled py-3 h-12"
                />
                {errors.name && (
                  <p className="text-effect text-sm">{errors.name.message}</p>
                )}
              </div>
              <div>
                <p className="pb-2 text-text-dark">Email Address</p>
                <Input
                  {...register("email")}
                  placeholder="Your email address"
                  className="bg-tertiary text-disabled py-3 h-12"
                />
                {errors.email && (
                  <p className="text-effect text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="w-full">
              <p className="pb-2 text-text-dark">Subject</p>
              <Input
                {...register("subject")}
                placeholder="Subject"
                className="bg-tertiary text-disabled py-3 h-12"
              />
              {errors.subject && (
                <p className="text-effect text-sm">{errors.subject.message}</p>
              )}
            </div>

            <div className="w-full">
              <p className="pb-2 text-text-dark">Message</p>
              <Textarea
                {...register("message")}
                placeholder="Your message"
                className="bg-tertiary text-disabled min-h-[120px] py-3 resize-none"
              />
              {errors.message && (
                <p className="text-effect text-sm">{errors.message.message}</p>
              )}
            </div>

            <Button
              variant="default"
              type="submit"
              disabled={isSubmitting}
              className="mt-4"
            >
              {isSubmitting ? "Booking..." : "Book An Appointment"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}


"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "sobujmadbor660@gmail.com",
    href: "mailto:sobujmadbor660@gmail.com",
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+88 01826140440",
    href: "tel:+8801826140440",
    description: "Mon - Sat, 9:00 AM - 6:00 PM",
  },
  {
    icon: MapPin,
    title: "Our Location",
    value: "Madaripur, Bangladesh",
    href: "#",
    description: "Serving customers across Bangladesh",
  },
];

const ContactUsPage = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
        {/* Background decorations */}
        <div className="pointer-events-none absolute left-[-120px] top-[-100px] h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="pointer-events-none absolute bottom-[-150px] right-[-100px] h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0f4ea6]"
          >
            <Sparkles className="size-4" />
            We&apos;d Love to Hear From You
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-[#0f4ea6] via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Connect
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base"
          >
            Have a question about our tile collection, need help choosing the
            right design, or simply want to say hello? Our team is here to
            help.
          </motion.p>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-[#0f4ea6] transition-all duration-300 group-hover:bg-[#0f4ea6] group-hover:text-white">
                  <Icon className="size-5" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 break-all text-sm font-semibold text-[#0f4ea6]">
                  {item.value}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  {item.description}
                </p>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* ================= MAIN CONTACT SECTION ================= */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid container overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 lg:grid-cols-[0.85fr_1.15fr]">
          {/* LEFT SIDE */}
          <div className="relative overflow-hidden bg-[#0f4ea6] p-7 text-white sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute right-[-80px] top-[-80px] size-64 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="pointer-events-none absolute bottom-[-100px] left-[-80px] size-72 rounded-full bg-blue-300/20 blur-3xl" />

            <div className="relative z-10">
              <div className="flex size-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                <MessageCircle className="size-6" />
              </div>

              <h2 className="mt-7 text-3xl font-bold leading-tight sm:text-4xl">
                Have a question?
                <br />
                <span className="text-blue-200">
                  We&apos;re here to help.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-blue-100 sm:text-base">
                Whether you need help finding the perfect tile, have a
                question about our collection, or want to discuss a project,
                feel free to reach out.
              </p>

              {/* Benefits */}
              <div className="mt-8 space-y-4">
                {[
                  "Quick response to your questions",
                  "Helpful tile recommendations",
                  "Friendly customer support",
                ].map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 shrink-0 text-cyan-300" />
                    <span className="text-sm text-blue-50">{text}</span>
                  </div>
                ))}
              </div>

              {/* Working hours */}
              <div className="mt-10 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Clock3 className="size-5 text-cyan-300" />

                  <div>
                    <p className="text-sm font-semibold">
                      Customer Support
                    </p>

                    <p className="mt-1 text-xs text-blue-200">
                      Monday - Saturday · 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-9">
                <p className="text-sm font-semibold text-blue-100">
                  Follow us
                </p>

                <div className="mt-4 flex gap-3">
                  <a
                    href="https://www.facebook.com/sobuj.madbor.735717"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex size-10 items-center justify-center rounded-xl bg-white/10 transition hover:bg-white hover:text-[#0f4ea6]"
                  >
                    <FaFacebookF className="size-4" />
                  </a>

                  <a
                    href="https://github.com/MDSOBUJMADBOR"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex size-10 items-center justify-center rounded-xl bg-white/10 transition hover:bg-white hover:text-[#0f4ea6]"
                  >
                    <FaGithub className="size-4" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/md-sobuj-madbor"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex size-10 items-center justify-center rounded-xl bg-white/10 transition hover:bg-white hover:text-[#0f4ea6]"
                  >
                    <FaLinkedinIn className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="p-7 sm:p-10 lg:p-12">
            <div className="mb-8">
              <p className="text-sm font-semibold text-[#0f4ea6]">
                Send us a message
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                How can we help?
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>
            </div>

            <form className="space-y-5">
              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to talk about?"
                  required
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Write your message here..."
                  required
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0f4ea6] px-6 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0c3e85] hover:shadow-xl"
              >
                Send Message
                <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <p className="text-center text-xs text-slate-400">
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl rounded-3xl border border-blue-100 bg-blue-50/70 px-6 py-10 text-center sm:px-10"
        >
          <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-white text-[#0f4ea6] shadow-sm">
            <Sparkles className="size-5" />
          </div>

          <h2 className="mt-5 text-2xl font-bold text-slate-900 sm:text-3xl">
            Looking for the perfect tile?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">
            Explore our collection and discover beautiful designs for your
            next interior project.
          </p>

          <Link
            href="/all-tiles"
            className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0f4ea6] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0c3e85]"
          >
            Explore All Tiles
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default ContactUsPage;


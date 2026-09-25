
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button, Card, Input } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Mail, ArrowLeft, ShieldCheck, CheckCircle2 } from "lucide-react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const ForGotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      toast.error("Please enter your email address.");
      return;
    }

    const emailRegex =
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailRegex.test(trimmedEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);

      const { error } = await authClient.requestPasswordReset({
        email: trimmedEmail,
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        toast.error(
          error.message || "Something went wrong. Please try again."
        );
        return;
      }

      setSuccess(true);
      toast.success("Password reset link sent to your email.");
    } catch (error) {
      console.error("Forgot password error:", error);

      toast.error(
        error?.message ||
          "Unable to send password reset email. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-center justify-center">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl lg:grid-cols-2">
          
          {/* Left Side */}
          <div className="relative hidden overflow-hidden bg-[#1158ff] p-10 text-white lg:flex lg:flex-col lg:justify-between">
            
            {/* Decorative circles */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />
            <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-cyan-300/10" />
            <div className="absolute right-20 top-1/2 h-32 w-32 rounded-full bg-white/5" />

            <div className="relative z-10">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-2xl font-black tracking-tight"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                  ◈
                </span>

                <span>
                  Tile<span className="text-blue-200">Gallery</span>
                </span>
              </Link>
            </div>

            <div className="relative z-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm">
                <ShieldCheck className="h-8 w-8" />
              </div>

              <h1 className="max-w-md text-4xl font-black leading-tight xl:text-5xl">
                Securely recover your account.
              </h1>

              <p className="mt-5 max-w-md text-base leading-7 text-blue-100">
                Enter the email address associated with your TileGallery
                account and we&apos;ll send you a secure password reset link.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Secure password recovery",
                  "Reset link sent to your email",
                  "Simple and fast process",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-blue-50"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-200" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 text-sm text-blue-200">
              © {new Date().getFullYear()} TileGallery. All rights reserved.
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12">
            <Card className="w-full max-w-md border-none bg-transparent shadow-none">
              
              {/* Back Button */}
              <Link
                href="/login"
                className="mb-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-[#1158ff]"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Login
              </Link>

              {!success ? (
                <>
                  {/* Header */}
                  <div className="mb-8">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                      <Mail className="h-7 w-7 text-[#1158ff]" />
                    </div>

                    <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                      Forgot Password?
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
                      No worries. Enter your email address and we&apos;ll send
                      you a link to reset your password.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Email Address
                      </label>

                      <div className="relative w-full">
                        <div className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2">
                          <Icon
                            icon="lucide:mail"
                            className="text-lg text-slate-400"
                          />
                        </div>

                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          autoComplete="email"
                          className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm shadow-none outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#1158ff] focus:bg-white"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      isDisabled={loading}
                      className="h-12 w-full rounded-xl bg-[#1158ff] text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:bg-blue-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Sending Reset Link...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Mail className="h-4 w-4" />
                          Send Reset Link
                        </span>
                      )}
                    </Button>
                  </form>

                  {/* Bottom */}
                  <div className="mt-8 text-center text-sm text-slate-500">
                    Remember your password?{" "}
                    <Link
                      href="/login"
                      className="font-bold text-[#1158ff] transition-colors hover:text-blue-700"
                    >
                      Sign In
                    </Link>
                  </div>
                </>
              ) : (
                /* Success State */
                <div className="text-center">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
                    <CheckCircle2 className="h-10 w-10 text-green-500" />
                  </div>

                  <h2 className="text-3xl font-black tracking-tight text-slate-900">
                    Check Your Email
                  </h2>

                  <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
                    We&apos;ve sent a password reset link to{" "}
                    <span className="font-semibold text-slate-800">
                      {email}
                    </span>
                    .
                  </p>

                  <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-left">
                    <div className="flex gap-3">
                      <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#1158ff]" />

                      <div>
                        <p className="text-sm font-bold text-slate-800">
                          Didn&apos;t receive the email?
                        </p>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          Check your spam or junk folder. You can also try
                          sending the reset link again.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="button"
                    onPress={() => {
                      setSuccess(false);
                      setEmail("");
                    }}
                    className="mt-6 h-12 w-full rounded-xl border border-slate-200 bg-white text-sm font-bold text-slate-700 transition-all hover:border-[#1158ff] hover:text-[#1158ff]"
                  >
                    Send Again
                  </Button>

                  <Link
                    href="/login"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1158ff] hover:text-blue-700"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Login
                  </Link>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForGotPassword;


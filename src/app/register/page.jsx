
"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

import {
  Button,
  Description,
  FieldError,
  Input,
  Label,
  TextField,
  Card,
} from "@heroui/react";

import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import { BsPersonPlus } from "react-icons/bs";

const RegisterPage = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  // =========================
  // Register
  // =========================
  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Registration successful!");
    router.push("/");
  };

  // =========================
  // Google Register
  // =========================
  const handleGoogleRegister = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      toast.error("Google registration failed");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-violet-50 via-white to-purple-100 px-4 py-10">
      <Card className="w-full max-w-xl rounded-2xl border border-gray-200 bg-white/95 p-6 shadow-xl backdrop-blur-md sm:p-8">

        {/* =========================
            Header Icon
        ========================== */}
        <div className="mb-5 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-2 rounded-3xl bg-violet-500/20 blur-xl" />

            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/60 bg-[#1158ff] shadow-2xl">
              <BsPersonPlus className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>

        {/* =========================
            Header
        ========================== */}
        <div className="mb-7 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Create your account and get started today
          </p>
        </div>

        {/* =========================
            Register Form
        ========================== */}
        <form
          className="flex w-full flex-col gap-5"
          onSubmit={onSubmit}
        >
          {/* =========================
              Name
          ========================== */}
          <TextField isRequired name="name" type="text">
            <Label className="mb-2 text-sm font-medium text-gray-700">
              Full Name
            </Label>

            <div className="relative w-full">
              <div className="absolute left-3 top-1/2 z-10 -translate-y-1/2">
                <Icon
                  icon="lucide:user"
                  className="text-lg text-gray-400"
                />
              </div>

              <Input
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm shadow-none outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-[#1158ff] focus:bg-white"
              />
            </div>

            <FieldError />
          </TextField>

          {/* =========================
              Image URL
          ========================== */}
          <TextField isRequired name="image" type="url">
            <Label className="mb-2 text-sm font-medium text-gray-700">
              Profile Image URL
            </Label>

            <div className="relative w-full">
              <div className="absolute left-3 top-1/2 z-10 -translate-y-1/2">
                <Icon
                  icon="lucide:image"
                  className="text-lg text-gray-400"
                />
              </div>

              <Input
                name="image"
                type="url"
                placeholder="https://example.com/image.jpg"
                className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm shadow-none outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-[#1158ff] focus:bg-white"
              />
            </div>

            <Description className="mt-1 text-xs text-gray-400">
              Add a URL for your profile image
            </Description>

            <FieldError />
          </TextField>

          {/* =========================
              Email
          ========================== */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                  value
                )
              ) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label className="mb-2 text-sm font-medium text-gray-700">
              Email Address
            </Label>

            <div className="relative w-full">
              <div className="absolute left-3 top-1/2 z-10 -translate-y-1/2">
                <Icon
                  icon="lucide:mail"
                  className="text-lg text-gray-400"
                />
              </div>

              <Input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm shadow-none outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-[#1158ff] focus:bg-white"
              />
            </div>

            <FieldError />
          </TextField>

          {/* =========================
              Password
          ========================== */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type={showPassword ? "text" : "password"}
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }

              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }

              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label className="mb-2 text-sm font-medium text-gray-700">
              Password
            </Label>

            <div className="relative w-full">
              {/* Password Icon */}
              <div className="absolute left-3 top-1/2 z-10 -translate-y-1/2">
                <Icon
                  icon="lucide:lock"
                  className="text-lg text-gray-400"
                />
              </div>

              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pl-10 pr-12 text-sm shadow-none outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-[#1158ff] focus:bg-white"
              />

              {/* Show / Hide Password */}
              <button
                type="button"
                onClick={() =>
                  setShowPassword((prev) => !prev)
                }
                className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-md p-1 text-gray-400 transition-colors hover:text-gray-700 focus:outline-none"
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>

            <Description className="mt-1 text-xs text-gray-400">
              At least 8 characters with 1 uppercase letter and 1 number
            </Description>

            <FieldError />
          </TextField>

          {/* =========================
              Register Button
          ========================== */}
          <Button
            type="submit"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#2a67f5] text-sm font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:bg-[#0750fa] hover:shadow-xl"
          >
            <UserPlus className="h-5 w-5" />
            Create Account
          </Button>
        </form>

        {/* =========================
            Divider
        ========================== */}
        <div className="my-2 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200" />

          <span className="whitespace-nowrap text-xs font-medium text-gray-400">
            OR CONTINUE WITH
          </span>

          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* =========================
            Google Register
        ========================== */}
        <Button
          type="button"
          onClick={handleGoogleRegister}
          variant="tertiary"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-md"
        >
          <Icon
            icon="devicon:google"
            className="text-xl"
          />

          Continue with Google
        </Button>

        {/* =========================
            Login
        ========================== */}
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}

          <Link
            href="/login"
            className="font-semibold text-[#3c72f0] transition-colors hover:text-[#0b52f8] hover:underline"
          >
            Sign in
          </Link>
        </p>
      </Card>
    </main>
  );
};

export default RegisterPage;


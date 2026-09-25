"use client";


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
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { BsShieldLock } from "react-icons/bs";
import { authClient } from "@/lib/auth-client";


const LoginPage = () => {

const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Login successful!");
  };

  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      toast.error("Google login failed");
    }
  };

  return (
    <main className="  px-4 py-10 flex items-center justify-center">
      <Card className="w-full max-w-xl border border-gray-200 bg-white/95 shadow-xl backdrop-blur-md rounded-2xl p-6 sm:p-8">
        
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1158ff] shadow-lg shadow-violet-200">
            <BsShieldLock className="text-white w-8 h-8" />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Sign in to your account to continue
          </p>
        </div>

        {/* Login Form */}
        <form
          className="flex w-full flex-col gap-5"
          onSubmit={onSubmit}
        >
          {/* Email */}
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

            <Input
              placeholder="Your Email "
              
              classNames={{
                inputWrapper:
                  "h-12 rounded-xl border border-gray-200 bg-gray-50 shadow-none hover:border-violet-400 focus-within:border-violet-500",
                input:
                  "text-sm placeholder:text-gray-400",
              }}
              startContent={
                <Icon
                  icon="lucide:mail"
                  className="text-lg text-gray-400"
                />
              }
            />

            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
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
            <div className="flex items-center justify-between mb-2">
              <Label className="text-sm font-medium text-gray-700">
                Password
              </Label>

              <Link
                href="/forgot-password"
                className="text-xs font-medium text-[#3068eb] hover:text-[#1158ff]"
              >
                Forgot password?
              </Link>
            </div>

<div className="relative">
              <Input
              placeholder="Enter your password"
              className="w-full"
             type={showPassword ? "text" : "password"}
              classNames={{
                inputWrapper:
                  "h-12 rounded-xl border border-gray-200 bg-gray-50 shadow-none hover:border-violet-400 focus-within:border-violet-500",
                input:
                  "text-sm placeholder:text-gray-400",
              }}
              startContent={
                <Icon
                  icon="lucide:lock"
                  className="text-lg text-gray-400"
                />
              }
            />
 <button
                type="button"
                onClick={() =>
                  setShowPassword((prev) => !prev)
                }
                className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-md p-1 text-gray-400 transition-colors hover:text-[#1158ff] focus:outline-none"
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
              At least 8 characters, 1 uppercase letter and 1 number
            </Description>

            <FieldError />
          </TextField>

          {/* Login Button */}
          <Button
            type="submit"
            className="h-12 w-full rounded-xl bg-[#2e62db] text-sm font-semibold text-white shadow-lg shadow-violet-200 transition-all hover:bg-[#1158ff] hover:shadow-xl"
          >
           
            Sign In
          </Button>
        </form>

        {/* Divider */}
        <div className="my-2 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200" />

          <span className="text-xs font-medium text-gray-400">
            OR CONTINUE WITH
          </span>

          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Google Login */}
        <Button
          type="button"
          onClick={handleGoogleLogin}
          variant="tertiary"
          className="h-12 w-full rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-gray-300 hover:bg-gray-50"
        >
          <Icon icon="devicon:google" className="text-xl" />
          Continue with Google
        </Button>

        {/* Register */}
        <p className=" text-center text-sm text-gray-500">
          Do not  have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-[#4275eb] hover:text-[#1158ff] hover:underline"
          >
            Create an account
          </Link>
        </p>


      </Card>
    </main>
  );
};

export default LoginPage;
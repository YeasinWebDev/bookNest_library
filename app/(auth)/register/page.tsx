"use client";

import { registerUser } from "@/app/actions/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    terms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirm_password.trim()) {
      newErrors.confirm_password = "Please confirm your password";
    } else if (formData.password !== formData.confirm_password) {
      newErrors.confirm_password = "Passwords do not match";
    }

    if (!formData.terms) {
      newErrors.terms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      await registerUser(formData.name, formData.email, formData.password);

      toast.success("SignUp successful");
      router.push("/");

    } catch (error) {
      toast.error("SignUp failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <main className="w-full max-w-6xl mx-auto flex items-stretch justify-center min-h-screen gap-0 overflow-hidden">
      {/* Left Side Branding */}
      <section className="hidden lg:flex lg:flex-1 relative overflow-hidden bg-primary items-center justify-center p-12">
        <div className="absolute inset-0 opacity-40 h-full">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdLdW4yPRMoxsZ_vAHgGoq4MVUqtD8Mt7hqEJgmGzijEBu3q5nYyqwFRU0in8aIWhCRl-Yy2AdQkaZhs3nDpDMBgkDgz1aCNXHPSvYvD_Xz70rOWa9lNShWcsZE0DtMjF-vXr9yokJ_na0hBBFtuTEyKqyPlM5zKqmwjsSuiRhCIKxx1SFYDnfsBSk1UeBzX5NuOYDq4lIzXYvY3gQKSEXGXO7K2fVHcZCmkTpD9WQ-nYUNCQiJsU2dwWXM5ZyQJhWbZM948TWdkVx"
            alt="Library background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary/40"></div>
        </div>

        <div className="relative z-10 flex flex-col items-start gap-6 text-white">
          <div onClick={() => router.push("/")} className="flex items-center gap-2 cursor-pointer">
            <span className="material-symbols-outlined text-4xl">library_books</span>
            <span className="text-2xl font-bold tracking-tight">BookNest</span>
          </div>

          <h2 className="text-4xl font-bold max-w-md leading-tight">The sanctuary for every reader&apos;s journey.</h2>

          <p className="text-base text-white/70 max-w-sm">Join a community of curators and researchers in a world of literary discovery.</p>

          <div className="mt-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                <span className="material-symbols-outlined">auto_stories</span>
              </div>
              <span className="text-sm font-medium">Curated Collections</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                <span className="material-symbols-outlined">bookmarks</span>
              </div>
              <span className="text-sm font-medium">Smart Metadata</span>
            </div>
          </div>
        </div>
      </section>

      {/* Right Side Form */}
      <section className="lg:flex-1 p-8 md:p-12 bg-[#f5f5f5] flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          {/* Header */}
          <header className="mb-10">
            <div className="lg:hidden flex items-center gap-2 mb-4 text-primary">
              <span className="material-symbols-outlined">library_books</span>
              <span className="text-lg font-bold tracking-tight">BookNest</span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>

            <p className="text-sm text-gray-500">Start your digital library journey today.</p>
          </header>

          {/* Form */}
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* General Error */}
            {errors.general && <div className="text-red-600 text-sm text-center bg-red-50 border border-red-200 rounded-lg p-3">{errors.general}</div>}

            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs text-gray-500 uppercase tracking-wider">
                Full Name
              </label>

              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-4 text-gray-400">person</span>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full pl-12 pr-4 py-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-gray-300 ${
                    errors.name ? "border-red-500" : "border-gray-200"
                  }`}
                />
              </div>
              {errors.name && <span className="text-red-600 text-xs">{errors.name}</span>}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs text-gray-500 uppercase tracking-wider">
                Email Address
              </label>

              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-4 text-gray-400">mail</span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full pl-12 pr-4 py-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-gray-300 ${
                    errors.email ? "border-red-500" : "border-gray-200"
                  }`}
                />
              </div>
              {errors.email && <span className="text-red-600 text-xs">{errors.email}</span>}
            </div>

            {/* Passwords */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Password */}
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-xs text-gray-500 uppercase tracking-wider">
                  Password
                </label>

                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-4 text-gray-400">lock</span>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className={`w-full pl-12 pr-4 py-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-gray-300 ${
                      errors.password ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                </div>
                {errors.password && <span className="text-red-600 text-xs">{errors.password}</span>}
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col gap-2">
                <label htmlFor="confirm_password" className="text-xs text-gray-500 uppercase tracking-wider">
                  Confirm
                </label>

                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-4 text-gray-400">shield</span>
                  <input
                    id="confirm_password"
                    name="confirm_password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirm_password}
                    onChange={handleInputChange}
                    required
                    className={`w-full pl-12 pr-4 py-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-gray-300 ${
                      errors.confirm_password ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                </div>
                {errors.confirm_password && <span className="text-red-600 text-xs">{errors.confirm_password}</span>}
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center gap-3 justify-start">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                checked={formData.terms}
                onChange={handleInputChange}
                className="w-5 h-5 accent-primary rounded-md border-gray-300 mt-1"
              />

              <label htmlFor="terms" className="text-sm text-gray-500">
                I agree to the{" "}
                <Link href="#" className="text-primary font-semibold hover:underline">
                  Terms and Conditions
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-primary font-semibold hover:underline">
                  Privacy Policy
                </Link>
                .
              </label>
            </div>
            {errors.terms && <span className="text-red-600 text-xs ml-8">{errors.terms}</span>}

            {/* Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-3 bg-primary text-white font-semibold rounded-xl active:opacity-80 active:scale-[0.99] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-sm disabled:active:scale-100 flex items-center justify-center gap-2 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-sm">refresh</span>
                  Creating Account...
                </>
              ) : (
                <>
                  <span>Sign Up</span>
                </>
              )}
            </button>

            {/* Footer */}
            <footer className="mt-4 text-center">
              <p className="text-sm text-gray-500">
                Already have an account?
                <Link href="/login" className="text-primary font-bold hover:underline underline-offset-4 ml-1">
                  Log In
                </Link>
              </p>
            </footer>
          </form>
        </div>
      </section>
    </main>
  );
}

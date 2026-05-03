"use client";

import { loginUser } from "@/app/actions/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
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

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // const res = await fetch('/api/users/login', {
      //   method: 'POST',
      //   credentials: 'include',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // const data = await res.json();

      // if (!res.ok) {
      //   toast.error(data.message || 'Login failed');
      //   return;
      // }

      await loginUser(formData.email, formData.password);

      toast.success('Login successful');
      router.push('/');
      
    } catch (error) {
      toast.error('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuClxVYYilsN1FhTKc4Z0FpG5SI_oHQuCSLWeFSUNjcnYtqbUJKO4gC3XHKB8OmVla5M0HhlGyePUUkRsYE5DeReOMtdmaeU4aTIP0p_E0XU69oiLdZkUm-QWiY61yMDI_4lKhUzFnVlAyNHHI5xCMNq3rnA4Wqpx9zoI92sFfIzXhdJX9YVFYF_jQxZMcEmb1SaGWKpNk5i3FGJU-Sxl_L-t1GSfPiHa_onLgl_NJmSsCv83C-jFLZ6XlSar_xM4UXd3Whv0-2C3Hjr"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background/95"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-md px-6 flex flex-col items-center">
        {/* Brand */}
        <header onClick={() => router.push("/")} className="mb-10 text-center cursor-pointer">
          <h1 className="text-4xl font-bold text-primary tracking-tighter mb-2">BookNest</h1>

          <p className="text-sm text-gray-800">Your sanctuary for discovery and research.</p>
        </header>

        {/* Login Card */}
        <div className="w-full backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl shadow-primary/10">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-1">Welcome back</h2>
            <p className="text-sm text-muted-foreground">Enter your credentials to access your library.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* General Error */}
            {errors.general && <div className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-lg p-3">{errors.general}</div>}

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-muted-foreground px-1">
                Email Address
              </label>

              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">mail</span>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-4 py-3 bg-white/10 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all ${
                    errors.email ? "border-red-500/50" : "border-white/20"
                  }`}
                />
              </div>
              {errors.email && <span className="text-red-400 text-xs px-1">{errors.email}</span>}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center px-1">
                <label htmlFor="password" className="text-sm text-muted-foreground">
                  Password
                </label>

                <Link href="#" className="text-xs text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">lock</span>

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-12 py-3 bg-white/10 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all ${
                    errors.password ? "border-red-500/50" : "border-white/20"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">{showPassword ? "visibility_off" : "visibility"}</span>
                </button>
              </div>
              {errors.password && <span className="text-red-400 text-xs px-1">{errors.password}</span>}
            </div>

            {/* Remember */}
            <div className="flex items-center gap-3 px-1">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                checked={formData.remember}
                onChange={handleInputChange}
                className="w-5 h-5 rounded border-white/30 accent-primary cursor-pointer"
              />
              <label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer select-none">
                Remember this device
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-white py-4 rounded-xl font-semibold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-sm">refresh</span>
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>

            <div className="relative flex justify-center text-xs uppercase tracking-widest text-gray-600">
              <span className="px-4 bg-transparent">or continue with</span>
            </div>
          </div>

          <footer className="mt-10 text-center">
            <p className="text-sm text-muted-foreground">
              New to the Nest?
              <Link href="/register" className="text-primary font-semibold hover:underline ml-1">
                Create an account
              </Link>
            </p>
          </footer>
        </div>
      </main>

      {/* Floating Quote */}
      <div className="fixed bottom-12 right-5 hidden lg:flex flex-col items-end opacity-20 pointer-events-none select-none">
        <span className="text-primary text-[80px] leading-none mb-1">"</span>
        <p className="text-right max-w-xs italic text-black">A room without books is like a body without a soul.</p>
        <p className="text-xs mt-3 text-black">— Marcus Tullius Cicero</p>
      </div>
    </div>
  );
}

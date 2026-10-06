"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Invalid email or password.");
        setLoading(false);
        return;
      }

      // Login successful
      router.push("/admin/leads");
      router.refresh();
    } catch (error) {
      console.error("Login error:", error);

      setError("Unable to connect to the server. Please try again.");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f7f8fa] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-black text-white text-xl font-bold mb-5">
            TC
          </div>

          <h1 className="text-3xl font-semibold text-gray-900">
            Admin Login
          </h1>

          <p className="mt-2 text-gray-500">
            Sign in to manage your TechCore Studio leads
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7">
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Admin Email
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter admin email"
                autoComplete="email"
                required
                className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-white text-gray-900 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter admin password"
                autoComplete="current-password"
                required
                className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-white text-gray-900 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 rounded-xl bg-black text-white font-medium transition hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          TechCore Studio Admin
        </p>
      </div>
    </main>
  );
}
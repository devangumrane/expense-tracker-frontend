import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import ContinueWithButton from "../components/common/ContinueWithButton";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        credentials: "include",
      });

      const data = await res.json();
      if (!res.ok || !data.accessToken)
        throw new Error(data.error || "Invalid email or password");

      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.user));

      window.location.href = "/dashboard";
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Welcome Back">
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
        />

        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={form.password}
          onChange={handleChange}
          autoComplete="current-password"
        />

        {error && (
          <p className="text-red-500 text-sm text-center mt-2 mb-4">{error}</p>
        )}

        <Button
          type="submit"
          label={loading ? "Logging in..." : "Log In"}
          className="w-full mt-4 bg-[#4A70A9] hover:bg-[#3b5c8b] text-white font-semibold rounded-xl transition-all duration-200"
        />

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-4">Or continue with</p>
          <div className="flex justify-center gap-4">
            <ContinueWithButton
              label="Google"
              icon={<FcGoogle />}
              variant="outline"
              className="hover:bg-[#8FABD4]/20 border border-[#8FABD4]/40 rounded-lg"
              onClick={() =>
                (window.location.href =
                  "http://localhost:8080/api/v1/auth/google")
              }
            />
            <ContinueWithButton
              label="GitHub"
              icon={<FaGithub className="text-gray-900" />}
              variant="outline"
              className="hover:bg-[#8FABD4]/20 border border-[#8FABD4]/40 rounded-lg"
              onClick={() =>
                (window.location.href =
                  "http://localhost:8080/api/v1/auth/github")
              }
            />
          </div>
        </div>

        <div className="text-center mt-8 space-y-2">
          <Link
            to="/forget-password"
            className="text-sm text-[#4A70A9] hover:underline"
          >
            Forgot password?
          </Link>

          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-[#4A70A9] hover:underline font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
}

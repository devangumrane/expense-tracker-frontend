import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import ContinueWithButton from "../components/common/ContinueWithButton";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:8080/api/v1/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Signup failed");

      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      window.__ACCESS_TOKEN__ = data.accessToken;

      setSuccess("Signup successful! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 1000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Create Account">
      <form onSubmit={handleSubmit}>
        <Input
          label="Full Name"
          name="name"
          type="text"
          placeholder="John Doe"
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
        />

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
          autoComplete="new-password"
        />

        {error && (
          <p className="text-red-500 text-sm text-center mt-2 mb-2">{error}</p>
        )}
        {success && (
          <p className="text-green-600 text-sm text-center mt-2 mb-2">
            {success}
          </p>
        )}

        <Button
          type="submit"
          label={loading ? "Creating account..." : "Sign Up"}
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

        <p className="text-sm text-center text-gray-600 mt-8">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#4A70A9] hover:underline font-medium"
          >
            Log in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}

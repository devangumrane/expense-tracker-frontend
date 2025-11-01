import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import ContinueWithButton from "../components/common/ContinueWithButton";
import Card from "../components/common/Card";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Invalid credentials");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md shadow-lg">
        <form onSubmit={handleSubmit} className="p-6">
          <h1 className="text-2xl font-semibold text-center mb-6">Log In</h1>

          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
          />

          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            autoComplete="current-password"
          />

          {error && (
            <p className="text-red-500 text-sm text-center mb-2">{error}</p>
          )}
          <Button type="submit" label="Log in" className="mt-3 w-full" />

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 mb-3">Or continue with</p>
            <div className="flex justify-center gap-3">
              <ContinueWithButton
                label="Google"
                icon={<FcGoogle />}
                variant="outline"
              />
              <ContinueWithButton
                label="GitHub"
                icon={<FaGithub className="text-gray-800" />}
                variant="outline"
              />
            </div>
          </div>

          <p className="text-sm text-center text-gray-500 mt-8">
            Forgot password?{" "}
            <Link
              to="/forget-password"
              className="text-blue-600 hover:underline"
            >
              Reset Password
            </Link>
          </p>

          <p className="text-sm text-center text-gray-500 mt-8">
            Don`t have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
}

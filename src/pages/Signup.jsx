import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/common/Card";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import ContinueWithButton from "../components/common/ContinueWithButton";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", form);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md shadow-lg">
        <form onSubmit={handleSubmit} className="p-6">
          <h1 className="text-2xl font-semibold text-center mb-6">Sign Up</h1>

          <Input
            label="Name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
          />

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
            autoComplete="new-password"
          />

          <Button type="submit" label="Sign up" className="mt-3 w-full" />

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
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
}

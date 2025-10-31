import React from "react";
import clsx from "clsx";

export default function Button({
  label,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const baseStyles =
    "w-full py-2 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {label}
    </button>
  );
}

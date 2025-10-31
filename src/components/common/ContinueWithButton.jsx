import React from "react";
import clsx from "clsx";

/**
 * 🧩 Reusable Button Component
 * - Supports primary, secondary, and social variants
 * - Can render icons (e.g. Google, GitHub)
 * - Fully Tailwind + clsx powered
 */
export default function Button({
  label,
  onClick,
  type = "button",
  variant = "primary",
  icon, // JSX icon (e.g. <FcGoogle />)
  className = "",
  ...props
}) {
  const baseStyles =
    "w-full py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 mb-6";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    outline:
      "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-gray-400",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {icon && <span className="text-xl">{icon}</span>}
      {label}
    </button>
  );
}

import React from "react";
import clsx from "clsx";

/**
 * - Clean container for forms, modals, panels, or dashboard sections
 * - Accepts optional props for max width, padding, and interactivity
 * - Can adapt to both centered layouts and embedded components
 */
export default function Card({
  children,
  className = "",
  maxWidth = "max-w-lg", // default constraint for forms
  hover = true, // optional hover effect for clickable cards
  minHeight = "min-h-[550px]", //  add this default for consistent card height
  onClick, // allows interactivity (dashboard tiles, etc.)
}) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "bg-white rounded-xl shadow-md transition-all duration-200",
        "p-6 sm:p-5", // responsive padding
        maxWidth,
        minHeight, //  include it in the class list
        hover && "hover:shadow-xl hover:scale-[1.01] cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}

import React from "react";

export default function Input({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  autoComplete,
  className = "",
}) {
  return (
    <div className={`flex flex-col items-start w-full mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

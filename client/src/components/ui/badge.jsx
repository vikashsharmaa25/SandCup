import React from "react";
import clsx from "clsx";

export const Badge = ({
  children,
  variant = "default",
  className = "",
  ...props
}) => {
  const variantClasses = {
    default: "bg-gray-200 text-gray-800",
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-400 text-black",
    danger: "bg-red-500 text-white",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

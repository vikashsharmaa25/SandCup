import React from "react";
import clsx from "clsx";

export const Button = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}) => {
  const variantClasses = {
    default: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-secondary text-white hover:bg-secondary/90",
    outline:
      "border border-current bg-transparent text-current hover:bg-current hover:text-white",
    ghost: "bg-transparent hover:bg-primary/10 text-current",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

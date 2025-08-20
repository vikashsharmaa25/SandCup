import React from "react";
import clsx from "clsx";

// Main Card wrapper
export const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={clsx(
        "rounded-lg border bg-white dark:bg-gray-800 shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// CardHeader
export const CardHeader = ({ children, className = "", ...props }) => {
  return (
    <div className={clsx("p-4 border-b", className)} {...props}>
      {children}
    </div>
  );
};

// CardTitle
export const CardTitle = ({ children, className = "", ...props }) => {
  return (
    <h3
      className={clsx(
        "text-lg font-semibold text-gray-900 dark:text-gray-100",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

// CardDescription
export const CardDescription = ({ children, className = "", ...props }) => {
  return (
    <p
      className={clsx(
        "text-sm text-gray-500 dark:text-gray-400 mt-1",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

// CardContent
export const CardContent = ({ children, className = "", ...props }) => {
  return (
    <div className={clsx("p-4", className)} {...props}>
      {children}
    </div>
  );
};

// CardFooter
export const CardFooter = ({ children, className = "", ...props }) => {
  return (
    <div className={clsx("p-4 border-t", className)} {...props}>
      {children}
    </div>
  );
};

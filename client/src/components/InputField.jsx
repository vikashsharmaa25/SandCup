import React from "react";
import { AlertCircle } from "lucide-react";

const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  error,
  required = false,
  icon: Icon,
  placeholder,
  ...props
}) => {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`
            w-full ${
              Icon ? "pl-10" : "pl-3"
            } pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors
            ${error ? "border-red-500 bg-red-50" : "border-gray-300"}
          `}
          {...props}
        />
      </div>
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <AlertCircle className="h-4 w-4" />
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;

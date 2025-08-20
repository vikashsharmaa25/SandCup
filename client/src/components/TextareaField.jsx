import React from "react";
import { AlertCircle } from "lucide-react";

const TextareaField = ({
  label,
  value,
  onChange,
  error,
  required = false,
  icon: Icon,
  placeholder,
}) => {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute top-3 left-3 pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={4}
          className={`
            w-full ${
              Icon ? "pl-10" : "pl-3"
            } pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none
            ${error ? "border-red-500 bg-red-50" : "border-gray-300"}
          `}
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

export default TextareaField;

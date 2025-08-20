import React from "react";
import { CheckCircle, X } from "lucide-react";

const SuccessNotification = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-green-600" />
          <p className="text-green-800 font-medium">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="text-green-600 hover:text-green-800 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default SuccessNotification;

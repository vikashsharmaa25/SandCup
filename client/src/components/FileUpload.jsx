import React from "react";
import { Upload, X, AlertCircle } from "lucide-react";

const FileUpload = ({
  label,
  onChange,
  error,
  file,
  accept = "image/*",
  maxSize = "10MB",
}) => {
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    onChange(selectedFile);
  };

  const removeFile = () => {
    onChange(null);
  };

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div
        className={`
        border-2 border-dashed rounded-lg p-6 text-center transition-colors
        ${
          error
            ? "border-red-500 bg-red-50"
            : "border-gray-300 hover:border-gray-400"
        }
      `}
      >
        {file ? (
          <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Upload className="h-5 w-5 text-blue-500" />
              <span className="text-sm text-gray-700">{file.name}</span>
            </div>
            <button
              type="button"
              onClick={removeFile}
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div>
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <label className="cursor-pointer">
              <span className="text-blue-600 hover:text-blue-500 font-medium">
                Upload banner image
              </span>
              <input
                type="file"
                accept={accept}
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            <p className="text-gray-500 text-sm mt-1">
              PNG, JPG, GIF up to {maxSize}
            </p>
          </div>
        )}
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

export default FileUpload;

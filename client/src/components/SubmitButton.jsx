import React from "react";

const LoadingSpinner = () => (
  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
);

const SubmitButton = ({ isValid, isSubmitting, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!isValid || isSubmitting}
      className={`
        w-full py-3 px-4 rounded-lg font-medium transition-all duration-200
        ${
          isValid && !isSubmitting
            ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }
      `}
    >
      {isSubmitting ? (
        <div className="flex items-center justify-center gap-2">
          <LoadingSpinner />
          Submitting...
        </div>
      ) : (
        "Submit Event"
      )}
    </button>
  );
};

export default SubmitButton;

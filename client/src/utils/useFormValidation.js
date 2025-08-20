const useFormValidation = () => {
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const validateField = (field, value) => {
    switch (field) {
      case "organizerEmail":
        return value
          ? validateEmail(value)
            ? ""
            : "Please enter a valid email address"
          : "Email is required";

      case "organizerContact":
        return value
          ? validatePhone(value)
            ? ""
            : "Contact number must be 10 digits"
          : "Contact number is required";

      case "eventTitle":
      case "description":
      case "eventTime":
      case "location":
      case "eventType":
        return value ? "" : "This field is required";

      case "eventDate":
        if (!value) return "This field is required";

        const selectedDate = new Date(value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
          return "Please select a valid future date";
        }
        return "";

      case "banner":
        return "";

      default:
        return "";
    }
  };

  const validateForm = (formData) => {
    const errors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) errors[field] = error;
    });
    return errors;
  };

  const isFormValid = (formData, errors) => {
    const requiredFields = [
      "eventTitle",
      "description",
      "eventDate",
      "eventTime",
      "location",
      "organizerEmail",
      "organizerContact",
      "eventType",
    ];

    const allFilled = requiredFields.every(
      (field) => formData[field] !== "" && formData[field] !== null
    );

    const noErrors = Object.values(errors).every((err) => !err);

    return allFilled && noErrors;
  };

  return { validateForm, validateField, isFormValid };
};

export default useFormValidation;

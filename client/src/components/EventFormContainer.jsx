import React, { useState } from "react";
import SuccessNotification from "./SuccessNotification";
import SubmitButton from "./SubmitButton";
import {
  BasicInfoSection,
  DateTimeSection,
  LocationSection,
  ContactInfoSection,
  EventTypeSection,
  BannerUploadSection,
} from "./EventFormSections";
import useFormValidation from "../utils/useFormValidation";
import axiosInstance from "../apis/Axiosinstance";
import { toast } from "react-toastify";

const EventFormContainer = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    eventTitle: "",
    description: "",
    eventDate: "",
    eventTime: "",
    location: "",
    organizerEmail: "",
    organizerContact: "",
    eventType: "",
    banner: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const eventTypes = ["Conference", "Workshop", "Meetup", "Webinar"];
  const { validateForm, validateField, isFormValid } = useFormValidation();

  const handleInputChange = (field) => (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
    const error = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleFileChange = (file) => {
    setFormData((prev) => ({ ...prev, banner: file }));
    if (errors.banner) setErrors((prev) => ({ ...prev, banner: "" }));
  };

  const handleSubmit = async () => {
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const payload = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null) payload.append(key, formData[key]);
      });

      const response = await axiosInstance.post("/create-events", payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(response?.data?.message);
      setSuccessMessage("Event submitted successfully!");
      setFormData({
        eventTitle: "",
        description: "",
        eventDate: "",
        eventTime: "",
        location: "",
        organizerEmail: "",
        organizerContact: "",
        eventType: "",
        banner: null,
      });
      if (onSuccess) onSuccess();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 h-[600px] overflow-y-auto">
      <SuccessNotification
        message={successMessage}
        onClose={() => setSuccessMessage("")}
      />
      <div className="space-y-6">
        <BasicInfoSection
          formData={formData}
          errors={errors}
          onInputChange={handleInputChange}
        />
        <DateTimeSection
          formData={formData}
          errors={errors}
          onInputChange={handleInputChange}
        />
        <LocationSection
          formData={formData}
          errors={errors}
          onInputChange={handleInputChange}
        />
        <ContactInfoSection
          formData={formData}
          errors={errors}
          onInputChange={handleInputChange}
        />
        <EventTypeSection
          formData={formData}
          errors={errors}
          onInputChange={handleInputChange}
          eventTypes={eventTypes}
        />
        <BannerUploadSection
          formData={formData}
          errors={errors}
          onFileChange={handleFileChange}
        />
        <div className="pt-6">
          <SubmitButton
            isValid={isFormValid(formData, errors)}
            isSubmitting={isSubmitting}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default EventFormContainer;

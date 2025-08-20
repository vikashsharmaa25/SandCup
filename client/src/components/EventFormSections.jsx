import React from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Mail,
  Phone,
  User,
  FileText,
} from "lucide-react";
import InputField from "./InputField";
import TextareaField from "./TextareaField";
import SelectField from "./SelectField";
import FileUpload from "./FileUpload";

export const BasicInfoSection = ({ formData, errors, onInputChange }) => (
  <div className="space-y-6">
    <InputField
      label="Event Title"
      value={formData.eventTitle}
      onChange={onInputChange("eventTitle")}
      error={errors.eventTitle}
      required
      icon={FileText}
      placeholder="Enter event title"
    />

    <TextareaField
      label="Description"
      value={formData.description}
      onChange={onInputChange("description")}
      error={errors.description}
      required
      icon={FileText}
      placeholder="Describe your event..."
    />
  </div>
);

export const DateTimeSection = ({ formData, errors, onInputChange }) => {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InputField
        label="Event Date"
        type="date"
        value={formData.eventDate}
        onChange={onInputChange("eventDate")}
        error={errors.eventDate}
        required
        icon={Calendar}
        min={today}
      />

      <InputField
        label="Event Time"
        type="time"
        value={formData.eventTime}
        onChange={onInputChange("eventTime")}
        error={errors.eventTime}
        required
        icon={Clock}
      />
    </div>
  );
};

export const LocationSection = ({ formData, errors, onInputChange }) => (
  <InputField
    label="Location"
    value={formData.location}
    onChange={onInputChange("location")}
    error={errors.location}
    required
    icon={MapPin}
    placeholder="Enter event location"
  />
);

export const ContactInfoSection = ({ formData, errors, onInputChange }) => {
  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("Text");
    if (!/^\d+$/.test(pastedData)) {
      e.preventDefault();
      alert("Only numbers are allowed!");
    }
  };

  const handleInput = (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
    onInputChange("organizerContact")(e);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InputField
        label="Organizer Email"
        type="email"
        value={formData.organizerEmail}
        onChange={onInputChange("organizerEmail")}
        error={errors.organizerEmail}
        required
        icon={Mail}
        placeholder="organizer@example.com"
      />

      <InputField
        label="Contact Number"
        type="tel"
        value={formData.organizerContact}
        onChange={handleInput}
        onPaste={handlePaste}
        error={errors.organizerContact}
        required
        icon={Phone}
        placeholder="1234567890"
        maxLength={10}
      />
    </div>
  );
};

export const EventTypeSection = ({
  formData,
  errors,
  onInputChange,
  eventTypes,
}) => (
  <SelectField
    label="Event Type"
    value={formData.eventType}
    onChange={onInputChange("eventType")}
    options={eventTypes}
    error={errors.eventType}
    required
    icon={User}
  />
);

export const BannerUploadSection = ({ formData, errors, onFileChange }) => (
  <FileUpload
    label="Upload Banner (Optional)"
    onChange={onFileChange}
    error={errors.banner}
    file={formData.banner}
  />
);

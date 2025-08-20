import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    eventTitle: {
      type: String,
      required: [true, "Event title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    eventDate: {
      type: String,
      required: [true, "Event date is required"],
    },
    eventTime: {
      type: String,
      required: [true, "Event time is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    organizerEmail: {
      type: String,
      required: [true, "Organizer email is required"],
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    organizerContact: {
      type: String,
      required: [true, "Contact number is required"],
      match: [/^\d{10}$/, "Contact number must be 10 digits"],
    },
    eventType: {
      type: String,
      enum: ["Conference", "Workshop", "Meetup", "Webinar"],
      required: [true, "Event type is required"],
    },
    banner: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;

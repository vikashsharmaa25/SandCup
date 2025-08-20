import Event from "../model/Event.js";
import { json2csv } from "json-2-csv";

export const createEvent = async (req, res) => {
  try {
    const {
      eventTitle,
      description,
      eventDate,
      eventTime,
      location,
      organizerEmail,
      organizerContact,
      eventType,
    } = req.body;

    const banner = req.file ? req.file.path : null;

    const event = new Event({
      eventTitle,
      description,
      eventDate,
      eventTime,
      location,
      organizerEmail,
      organizerContact,
      eventType,
      banner,
    });

    await event.save();

    res.status(201).json({
      success: true,
      message: "Event created successfully",
      data: event,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: events.length,
      data: events,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const downloadEventsCSV = async (req, res) => {
  try {
    const events = await Event.find().lean();

    if (!events.length) {
      return res
        .status(404)
        .json({ success: false, message: "No events found" });
    }

    // Map only required fields
    const filteredEvents = events.map((event) => ({
      eventTitle: event.eventTitle,
      description: event.description,
      eventDate: event.eventDate,
      eventTime: event.eventTime,
      location: event.location,
      organizerEmail: event.organizerEmail,
      organizerContact: event.organizerContact,
      eventType: event.eventType,
    }));

    const csv = await json2csv(filteredEvents, {
      emptyFieldValue: "",
    });

    res.header("Content-Type", "text/csv");
    res.attachment("events.csv");
    res.send(csv);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

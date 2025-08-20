import { Parser } from "json2csv";
import Event from "../model/Event.js";

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

export const exportEventsCSV = async (req, res) => {
  try {
    const events = await Event.find();

    if (!events.length) {
      return res
        .status(404)
        .json({ success: false, message: "No events found" });
    }

    const fields = [
      "eventTitle",
      "description",
      "eventDate",
      "eventTime",
      "location",
      "organizerEmail",
      "organizerContact",
      "eventType",
      "banner",
      "createdAt",
    ];

    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(events);

    res.header("Content-Type", "text/csv");
    res.attachment("events.csv");
    return res.send(csv);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

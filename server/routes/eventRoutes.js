import express from "express";

import { upload } from "../config/cloudinary.js";
import { createEvent, getEvents } from "../controller/eventController.js";
const router = express.Router();

router.post("/create-events", upload.single("banner"), createEvent);
router.get("/all-events", getEvents);

export default router;

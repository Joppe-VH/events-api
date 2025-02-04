import express from "express";
import {
  addEvent,
  deleteEvent,
  getEvent,
  getEvents,
  updateEvent,
} from "../controllers/eventController";

const router = express.Router();

router
  .get("/", getEvents)
  .post("/", addEvent)
  .get("/:id", getEvent)
  .put("/:id", updateEvent)
  .delete("/:id", deleteEvent);

export default router;

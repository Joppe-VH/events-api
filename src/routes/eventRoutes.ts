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
  /**
   * GET /events
   * @tags Events - Everything about events
   * @summary get a list of all events
   * @return {array<Event>} 200 - success
   * @return {ServerError} 500 - server error
   */
  .get("/", getEvents)
  /**
   * POST /events
   * @tags Events
   * @summary create a new event
   * @param {EventBody} request.body.required - New Event
   * @return {Event} 201 - success, the newly created event
   * @return {ValidationError} 400 - validation failed
   * @return {ServerError} 500 - server error
   */
  .post("/", addEvent)
  /**
   * GET /events/{id}
   * @tags Events
   * @summary get an event by ID
   * @param {string} id.path.required - Event ID
   * @return {Event} 200 - success
   * @return {ServerError} 500 - server error
   */
  .get("/:id", getEvent)
  /**
   * PUT /events/{id}
   * @tags Events
   * @summary update an event
   * @param {string} id.path.required - Event ID
   * @param {EventBody} request.body.required - Updated event data
   * @return {Event} 200 - success, the updated event
   * @return {ValidationError} 400 - validation failed
   * @return {ServerError} 500 - server error
   */
  .put("/:id", updateEvent)
  /**
   * DELETE /events/{id}
   * @tags Events
   * @summary delete an event
   * @param {string} id.path.required - Event ID
   * @return {Event} 200 - success, the deleted event
   * @return {ServerError} 500 - server error
   */
  .delete("/:id", deleteEvent);

export default router;

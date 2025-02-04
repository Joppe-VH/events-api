import mongoose from "mongoose";

/**
 * A Event
 * @typedef {object} Event
 * @property {string} _id.required - Id of the event - json:{"example": "67a256fe2d0a108f87a907cd"}
 * @property {string} name.required - Name of the event - json:{"example": "My super cool Event"}
 * @property {string} date.required - Date of the event - json:{"example": "2024-06-05T16:20:00.000Z"}
 * @property {string} location.required - Where the event takes place - json:{"example": "At David's"}
 * @property {string} description - Extra info about the event - json:{"example": "Karaoke"}
 * @property {boolean} isFree - Wether the event is free or payed - json:{"example": "true"}
 * @property {string} createdAt.required - Created timestamp - json:{"example": "2025-02-04T18:05:50.387Z"}
 * @property {string} updatedAt.required - Updated timestamp - json:{"example": "2025-02-04T18:12:45.145Z"}
 * @property {number} __v.required - Unknown - json:{"example": "0"}
 */

/**
 * A Event request body
 * @typedef {object} EventBody
 * @property {string} name.required - Name of the event - json:{"example": "Jorne's super cool Event"}
 * @property {string} date.required - Date of the event - json:{"example": "2025/5/10"}
 * @property {string} location.required - Where the event takes place - json:{"example": "at Jorne's"}
 * @property {string} description - Extra info about the event - json:{"example": "Carting, we leave together after gathering at Jorne's"}
 * @property {boolean} isFree - Wether the event is free or payed - json:{"example": "false"}
 */
const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    isFree: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Event = mongoose.model("Event", eventSchema);

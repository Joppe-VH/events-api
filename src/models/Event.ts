import mongoose from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       required:
 *         - _id
 *         - name
 *         - date
 *         - location
 *         - createdAt
 *         - updatedAt
 *         - __v
 *       properties:
 *         _id:
 *           type: string
 *           example: "67a256fe2d0a108f87a907cd"
 *         name:
 *           type: string
 *           example: "My super cool Event"
 *         date:
 *           type: string
 *           format: date-time
 *           example: "2024-06-05T16:20:00.000Z"
 *         location:
 *           type: string
 *           example: "At David's"
 *         description:
 *           type: string
 *           example: "Karaoke"
 *         isFree:
 *           type: boolean
 *           example: true
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2025-02-04T18:05:50.387Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2025-02-04T18:12:45.145Z"
 *         __v:
 *           type: number
 *           example: 0
 *
 *     EventBody:
 *       type: object
 *       required:
 *         - name
 *         - date
 *         - location
 *       properties:
 *         name:
 *           type: string
 *           example: "Jorne's super cool Event"
 *         date:
 *           type: string
 *           format: date
 *           example: "2025/5/10"
 *         location:
 *           type: string
 *           example: "at Jorne's"
 *         description:
 *           type: string
 *           example: "Carting, we leave together after gathering at Jorne's"
 *         isFree:
 *           type: boolean
 *           example: false
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

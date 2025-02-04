import type { Options } from "swagger-jsdoc";

/**
 * @swagger
 * components:
 *   schemas:
 *     ServerError:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: "Something went wrong"
 *
 *     ValidationError:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: "Event validation failed: name: Path `name` is required."
 */

const options: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Events-API",
      description: "Simple event api, create edit and delete simple events.",
    },
    servers: [
      process.env.NODE_ENV !== "production"
        ? {
            url: "http://localhost:3000/api",
            description: "Development server",
          }
        : {
            url: "https://events-api-29qj.onrender.com/api",
            description: "Production server",
          },
    ],
  },
  apis: ["**/*.ts"],
};

export default options;

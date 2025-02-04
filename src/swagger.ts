import { Options } from "express-jsdoc-swagger";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("__filename:", __filename);
console.log("__dirname:", __dirname);

/**
 * A Server Error
 * @typedef {object} ServerError
 * @property {string} message - the error message - json: {"example": "Something went wrong"}
 */

/**
 * A Validation Error
 * @typedef {object} ValidationError
 * @property {string} message - the error message - json: {"example": "Event validation failed: name: Path `name` is required."}
 */

export const options: Options = {
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
  baseDir: __dirname,
  filesPattern: ["**/*.{ts,js}", "./swagger.ts"],
  swaggerUIPath: "/api-docs",
  exposeSwaggerUI: true,
};

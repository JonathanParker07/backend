import * as dotenv from "dotenv";


dotenv.config()


export const ENV = process.env.ENV || "local";
export const PORT = parseInt(process.env.PORT || "8010", 10);
export const CORS_ORIGIN = (process.env.CORS_ORIGIN || "").split(";");

export const BASE_URL =
  process.env.BASE_URL || `http://localhost:${PORT}`;
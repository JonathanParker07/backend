import express from "express";
import cors from "cors";

import { BASE_URL, PORT } from "./constants";
import Morgan from "./middleware/morgan";
import { routes } from "./routes";



export const app = express();
app.use(express.json());
app.use(cors());
app.use(Morgan);
routes(app);

export const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`⚡️[server]: Server is running at ${BASE_URL}`);
});
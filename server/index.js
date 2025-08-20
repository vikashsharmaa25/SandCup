import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connection } from "./config/database.js";
import router from "./routes/eventRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

app.use("/api/v1", router);

connection();

const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});

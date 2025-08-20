import express from "express";
dotenv.config();
import dotenv from "dotenv";
import { connection } from "./config/database.js";
import router from "./routes/eventRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/api/v1", router);

connection();

const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});

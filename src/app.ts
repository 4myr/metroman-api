import "reflect-metadata";
import express from "express";
import cors from "cors";
// import menuRoutes from "./routes/menu";
import dbConfig from "./config/database";

const app = express();
const PORT: string | number = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());

// app.use(menuRoutes);

dbConfig
  .connect()
  .then((_connection) => {
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  })
  .catch((err) => {
    console.log("Unable to connect to db", err);
    process.exit(1);
  });

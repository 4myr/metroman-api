import { DataSource } from "typeorm";
import {
  DepartureTime,
  Line,
  Station,
  StationLine,
} from "../models/index.model";

const dbConfig = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST || "localhost",
  port: Number(process.env.POSTGRES_PORT) || 5434,
  username: process.env.POSTGRES_USER || "amyr",
  password: process.env.POSTGRES_PASSWORD || "303",
  database: process.env.POSTGRES_DB || "metro-api",
  entities: [Station, Line, StationLine, DepartureTime],
  synchronize: true,
});

export default dbConfig;

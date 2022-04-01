import { Router } from "express";
import { getLines, retrieveLine } from "../controllers/lines/line.controller";
const lineRoutes: Router = Router();

lineRoutes.get("/line", getLines);
lineRoutes.get("/line/:id", retrieveLine);

export default lineRoutes;

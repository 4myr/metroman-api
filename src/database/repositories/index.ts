import dbConfig from "../../config/database.config";
import { Line, Station, StationLine } from "../../models/index.model";

export const LineRepository = dbConfig.getRepository(Line);
export const StationRepository = dbConfig.getRepository(Station);
export const StationLineRepository = dbConfig.getRepository(StationLine);

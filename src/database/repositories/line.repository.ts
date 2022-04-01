import dbConfig from "../../config/database.config";
import { Line, Station } from "../../models/index.model";

export const LineRepository = dbConfig.getRepository(Line);
export const StationRepository = dbConfig.getRepository(Station);

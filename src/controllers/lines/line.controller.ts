import { Request, Response } from "express";
import {
  LineRepository,
  StationLineRepository,
} from "../../database/repositories";
import { Line, StationLine } from "../../models/index.model";

const getLines = async (req: Request, res: Response): Promise<void> => {
  try {
    const lines: Line[] = await LineRepository.find({
      select: ["id", "name"],
      order: { name: "ASC" },
    });
    res.status(200).json({ lines });
  } catch (error) {
    throw error;
  }
};

const retrieveLine = async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
    } = req;
    const line: Line | null = await LineRepository.findOne({
      where: { id: id as unknown as number },
      relations: ["lineStations", "lineStations.station"],
      order: { lineStations: { order: "ASC" } },
    });
    res.status(line ? 200 : 404).json({ line });
  } catch (error) {
    throw error;
  }
};

export { getLines, retrieveLine };

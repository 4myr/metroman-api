import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Station } from "./index.model";
import { StationLine } from "./station-line.model";

export enum DepartureTypes {
  NORMAL_DAYS = "normal_days",
  THURSDAYS = "thursdays",
  FRIDAYS = "fridays",
  HOLIDAYS = "holidays",
}
@Entity()
export class DepartureTime {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => StationLine, (stationLine) => stationLine.departureTimes)
  stationLine: StationLine;

  @Column({ type: "enum", enum: DepartureTypes })
  type: DepartureTypes;
}

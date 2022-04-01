import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Station } from "./index.model";
import { StationLine } from "./station-line.model";

export enum DepartureTypes {
  NORMAL_DAYS = "NORMAL_DAYS",
  THURSDAYS = "THURSDAYS",
  FRIDAYS = "FRIDAYS",
  HOLIDAYS = "HOLIDAYS",
}

export enum DepartureWay {
  ONEWAY = "ONEWAY",
  RETURN = "RETURN",
}

@Entity()
export class DepartureTime {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => StationLine, (stationLine) => stationLine.departureTimes)
  stationLine: StationLine;

  @Column()
  time: string;

  @Column({ type: "enum", enum: DepartureWay })
  way: DepartureWay;

  @Column({ type: "enum", enum: DepartureTypes })
  type: DepartureTypes;

  @Column()
  order: number;
}

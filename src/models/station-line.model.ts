import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { DepartureTime } from "./departure-time.model";
import { Station } from "./index.model";
import { Line } from "./line.model";

@Entity()
export class StationLine {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Station, (station) => station.stationLines)
  @JoinColumn({ name: "stationId" })
  station: Station | number;

  @ManyToOne(() => Line, (line) => line.lineStations)
  @JoinColumn({ name: "lineId" })
  line: Line | number;

  @OneToMany(() => DepartureTime, (departureTime) => departureTime.stationLine)
  departureTimes: DepartureTime[];

  @Column()
  order: number;
}

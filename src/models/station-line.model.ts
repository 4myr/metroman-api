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
import { Station } from "./index.model";
import { Line } from "./line.model";

@Entity()
export class StationLine {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Station, (station) => station.stationLines)
  station: Station;

  @ManyToOne(() => Line, (line) => line.lineStations)
  line: Line;

  @Column()
  order: number;
}

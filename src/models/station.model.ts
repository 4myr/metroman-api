import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { DepartureTime } from "./departure-time.model";
import { StationLine } from "./station-line.model";

@Entity()
export class Station {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => StationLine, (lineStation) => lineStation.station)
  stationLines: StationLine[];

  // @Column({ unique: true })
  // number: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

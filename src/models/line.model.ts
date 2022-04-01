import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { DepartureTime } from "./departure-time.model";
import { StationLine } from "./station-line.model";
import { Station } from "./station.model";

@Entity()
export class Line {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Station, { nullable: true })
  @JoinColumn()
  start?: Station;

  @OneToOne(() => Station, { nullable: true })
  @JoinColumn()
  end?: Station;

  @OneToMany(() => StationLine, (lineStation) => lineStation.line)
  lineStations: StationLine[];

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Station } from "./station";

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

  @ManyToMany(() => Station, (station) => station.lines)
  stations: Station[];

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}

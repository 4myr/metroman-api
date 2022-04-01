import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Line } from "../../models/index.model";

export class CreateLines implements Seeder {
  private lines: Pick<Line, "name">[] = [
    {
      name: "خط 1",
    },
    {
      name: "خط 2",
    },
    {
      name: "خط 3",
    },
    {
      name: "خط 4",
    },
    {
      name: "خط 5",
    },
    {
      name: "خط 7",
    },
    {
      name: "نیمه شرقی خط 6",
    },
    {
      name: "نیمه غربی خط 6",
    },
    {
      name: "خط انشعابی فرودگاه امام خمینی (انشعاب خط 1)",
    },
    {
      name: "خط انشعابی فرودگاه مهرآباد (انشعاب خط 4)",
    },
    {
      name: "خط انشعابی هشتگرد (انشعاب خط 5)",
    },
  ];
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await Promise.all(
      this.lines.map((x) => connection.getRepository<Line>("line").insert(x))
    );
  }
}

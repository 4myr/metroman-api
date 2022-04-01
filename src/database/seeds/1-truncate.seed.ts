import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export class Truncate implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await this.truncate(connection);
  }

  private async truncate(connection: Connection) {
    await connection
      .createQueryRunner()
      .query("TRUNCATE TABLE station_line CASCADE");
    await connection.createQueryRunner().query("TRUNCATE TABLE line CASCADE");
    await connection
      .createQueryRunner()
      .query("TRUNCATE TABLE station CASCADE");
  }
}

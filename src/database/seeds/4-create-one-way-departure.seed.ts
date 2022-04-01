import fs from "fs";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import {
  DepartureTime,
  DepartureTypes,
  DepartureWay,
} from "../../models/departure-time.model";
import { Line } from "../../models/line.model";
import { StationLine } from "../../models/station-line.model";
import { Station } from "../../models/station.model";
export class CreateOneWayDepartureTimes implements Seeder {
  private departureWay = DepartureWay.ONEWAY;
  private linesPath = `${__dirname}/../../../tools/extract-times/parsed-times`;

  private LineSeedIDs: Record<string, string> = {
    line1: "خط 1",
    line2: "خط 2",
    line3: "خط 3",
    line4: "خط 4",
    line5: "خط 5",
    line6e: "نیمه شرقی خط 6",
    line6w: "نیمه غربی خط 6",
    line8g: "خط انشعابی هشتگرد (انشعاب خط 5)",
    lineik: "خط انشعابی فرودگاه امام خمینی (انشعاب خط 1)",
    linemha: "خط انشعابی فرودگاه مهرآباد (انشعاب خط 4)",
  };

  private getType(type: string) {
    switch (type) {
      case "normal-days":
        return DepartureTypes.NORMAL_DAYS;
      case "thursdays":
        return DepartureTypes.THURSDAYS;
      case "fridays":
        return DepartureTypes.FRIDAYS;
      case "holidays":
        return DepartureTypes.HOLIDAYS;
    }
  }

  private async getStationLineRow(
    stationName: string,
    lineName: string,
    connection: Connection
  ) {
    const station = await this.getStationByName(stationName, connection);
    const line = await this.getLineByName(lineName, connection);
    if (!station || !line)
      throw new Error(
        `Line (${line?.id}/${lineName}) or Station ${station?.id}/${stationName} not found!`
      );
    const stationLine = await connection
      .getRepository<StationLine>("station_line")
      .findOneBy({
        line: { name: lineName },
        station: { name: stationName },
      });
    if (!stationLine)
      console.log(
        `Station Line (${stationLine}) for Line (${line?.id}/${lineName}) and Station ${station?.id}/${stationName} not found!`
      );
    return stationLine;
  }

  private async getStationByName(name: string, connection: Connection) {
    const station = await connection
      .getRepository<Station>("station")
      .findOne({ where: { name } });
    return station;
  }

  private async getLineByName(name: string, connection: Connection) {
    const line = await connection
      .getRepository<Line>("line")
      .findOne({ where: { name } });
    if (!line) throw new Error(`Line ${name} not found.`);
    return line;
  }

  public async run(factory: Factory, connection: Connection): Promise<any> {
    await Promise.all(
      fs.readdirSync(this.linesPath).map(async (file) => {
        const fileParts = file.replace(".json", "").split("|");
        const type = this.getType(fileParts[1]);
        const lineName = this.LineSeedIDs[fileParts[0]];
        const linePath = `${this.linesPath}/${file}`;

        const content = fs.readFileSync(linePath, { encoding: "utf-8" });
        const json = JSON.parse(content);
        let order = 0;
        for (const data of json) {
          const stationName = data.station;
          const times = data.times;
          const stationLine = await this.getStationLineRow(
            stationName,
            lineName,
            connection
          );
          await Promise.all(
            times.map(async (time: string) => {
              await connection
                .getRepository<DepartureTime>("departure_time")
                .insert({
                  stationLine: stationLine as StationLine,
                  way: this.departureWay,
                  type,
                  time,
                  order: ++order,
                });
            })
          );
        }
      })
    );
  }
}

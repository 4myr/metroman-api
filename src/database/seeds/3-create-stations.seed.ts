import { stat } from "fs";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Line, Station } from "../../models";

type SomeStation = { name: string; lines: string[] };
export class CreateStations implements Seeder {
  private line1: SomeStation[] = [
    {
      name: "تجریش",
      lines: ["خط 1"],
    },
    {
      name: "قیطریه",
      lines: ["خط 1"],
    },
    {
      name: "شهید صدر",
      lines: ["خط 1"],
    },
    {
      name: "قلهک",
      lines: ["خط 1"],
    },
    {
      name: "دکتر شریعتی",
      lines: ["خط 1"],
    },
    {
      name: "میرداماد",
      lines: ["خط 1"],
    },
    {
      name: "شهید حقانی",
      lines: ["خط 1"],
    },
    {
      name: "شهید همت",
      lines: ["خط 1"],
    },
    {
      name: "مصلی امام خمینی(ره)",
      lines: ["خط 1"],
    },
    {
      name: "شهید بهشتی",
      lines: ["خط 1"],
    },
    {
      name: "شهید مفتح",
      lines: ["خط 1"],
    },
    {
      name: "شهدای هفتم تیر",
      lines: ["خط 1"],
    },
    {
      name: "طالقانی",
      lines: ["خط 1"],
    },
    {
      name: "دروازه دولت",
      lines: ["خط 1"],
    },
    {
      name: "سعدی",
      lines: ["خط 1"],
    },
    {
      name: "امام خمینی (ره)",
      lines: ["خط 1"],
    },
    {
      name: "پانزده خرداد",
      lines: ["خط 1"],
    },
    {
      name: "خیام",
      lines: ["خط 1"],
    },
    {
      name: "میدان محمدیه",
      lines: ["خط 1"],
    },
    {
      name: "شوش",
      lines: ["خط 1"],
    },
    {
      name: "پایانه جنوب",
      lines: ["خط 1"],
    },
    {
      name: "شهید بخارایی",
      lines: ["خط 1"],
    },
    {
      name: "علی آباد",
      lines: ["خط 1"],
    },
    {
      name: "جوانمرد قصاب",
      lines: ["خط 1"],
    },
    {
      name: "شهرری",
      lines: ["خط 1"],
    },
    {
      name: "پالایشگاه",
      lines: ["خط 1"],
    },
    {
      name: "شاهد - باقرشهر",
      lines: ["خط 1"],
    },
    {
      name: "حرم مطهر   امام خمینی (ره)",
      lines: ["خط 1"],
    },
    {
      name: "کهریزک",
      lines: ["خط 1"],
    },
  ];

  private line2: SomeStation[] = [
    {
      name: "تهران (صادقیه)",
      lines: ["خط 2"],
    },
    {
      name: "طرشت",
      lines: ["خط 2"],
    },
    {
      name: "دانشگاه شریف",
      lines: ["خط 2"],
    },
    {
      name: "شادمان",
      lines: ["خط 2"],
    },
    {
      name: "شهید نواب صفوی",
      lines: ["خط 2"],
    },
    {
      name: "میدان حر",
      lines: ["خط 2"],
    },
    {
      name: "دانشگاه امام علی ( ع)",
      lines: ["خط 2"],
    },
    {
      name: "حسن آباد",
      lines: ["خط 2"],
    },
    {
      name: "امام خمینی (ره)",
      lines: ["خط 2"],
    },
    {
      name: "ملت",
      lines: ["خط 2"],
    },
    {
      name: "بهارستان",
      lines: ["خط 2"],
    },
    {
      name: "دروازه شمیران",
      lines: ["خط 2"],
    },
    {
      name: "امام حسین (ع)",
      lines: ["خط 2"],
    },
    {
      name: "شهید مدنی",
      lines: ["خط 2"],
    },
    {
      name: "سبلان",
      lines: ["خط 2"],
    },
    {
      name: "فدک",
      lines: ["خط 2"],
    },
    {
      name: "جانبازان",
      lines: ["خط 2"],
    },
    {
      name: "سرسبز",
      lines: ["خط 2"],
    },
    {
      name: "دانشگاه علم و صنعت",
      lines: ["خط 2"],
    },
    {
      name: "شهید باقری",
      lines: ["خط 2"],
    },
    {
      name: "تهرانپارس",
      lines: ["خط 2"],
    },
    {
      name: "فرهنگسرا",
      lines: ["خط 2"],
    },
  ];
  private line3: SomeStation[] = [
    {
      name: "قائم",
      lines: ["خط 3"],
    },
    {
      name: "شهید محلاتی",
      lines: ["خط 3"],
    },
    {
      name: "اقدسیه",
      lines: ["خط 3"],
    },
    {
      name: "نوبنیاد",
      lines: ["خط 3"],
    },
    {
      name: "حسین آباد",
      lines: ["خط 3"],
    },
    {
      name: "میدان هروی",
      lines: ["خط 3"],
    },
    {
      name: "شهید زین الدین",
      lines: ["خط 3"],
    },
    {
      name: "خواجه عبدالله انصاری",
      lines: ["خط 3"],
    },
    {
      name: "شهید صیاد شیرازی",
      lines: ["خط 3"],
    },
    {
      name: "شهید قدوسی",
      lines: ["خط 3"],
    },
    {
      name: "سهروردی",
      lines: ["خط 3"],
    },
    {
      name: "شهید بهشتی",
      lines: ["خط 3"],
    },
    {
      name: "میرزای شیرازی",
      lines: ["خط 3"],
    },
    {
      name: "میدان جهاد",
      lines: ["خط 3"],
    },
    {
      name: "میدان حضرت ولیعصر (عج)",
      lines: ["خط 3"],
    },
    {
      name: "تئاتر شهر",
      lines: ["خط 3"],
    },
    {
      name: "منیریه",
      lines: ["خط 3"],
    },
    {
      name: "مهدیه",
      lines: ["خط 3"],
    },
    {
      name: "راه آهن",
      lines: ["خط 3"],
    },
    {
      name: "جوادیه",
      lines: ["خط 3"],
    },
    {
      name: "زمزم",
      lines: ["خط 3"],
    },
    {
      name: "شهرک شریعتی",
      lines: ["خط 3"],
    },
    {
      name: "عبدل آباد",
      lines: ["خط 3"],
    },
    {
      name: "نعمت آباد",
      lines: ["خط 3"],
    },
    {
      name: "آزادگان",
      lines: ["خط 3"],
    },
  ];
  private line4: SomeStation[] = [
    {
      name: "شهید کلاهدوز",
      lines: ["خط 4"],
    },
    {
      name: "نیرو هوایی",
      lines: ["خط 4"],
    },
    {
      name: "نبرد",
      lines: ["خط 4"],
    },
    {
      name: "پیروزی",
      lines: ["خط 4"],
    },
    {
      name: "ابن سینا",
      lines: ["خط 4"],
    },
    {
      name: "میدان شهداء",
      lines: ["خط 4"],
    },
    {
      name: "دروازه شمیران",
      lines: ["خط 4"],
    },
    {
      name: "دروازه دولت",
      lines: ["خط 4"],
    },
    {
      name: "فردوسی",
      lines: ["خط 4"],
    },
    {
      name: "تئاتر شهر",
      lines: ["خط 4"],
    },
    {
      name: "میدان انقلاب اسلامی",
      lines: ["خط 4"],
    },
    {
      name: "توحید",
      lines: ["خط 4"],
    },
    {
      name: "شادمان",
      lines: ["خط 4"],
    },
    {
      name: "دکتر حبیب اله",
      lines: ["خط 4"],
    },
    {
      name: "استاد معین",
      lines: ["خط 4"],
    },
    {
      name: "میدان آزادی",
      lines: ["خط 4"],
    },
    {
      name: "بیمه",
      lines: ["خط 4"],
    },
    {
      name: "شهرک اکباتان",
      lines: ["خط 4"],
    },
    {
      name: "ارم سبز",
      lines: ["خط 4"],
    },
  ];
  private line5: SomeStation[] = [
    {
      name: "گلشهر",
      lines: ["خط 5"],
    },
    {
      name: "محمد شهر",
      lines: ["خط 5"],
    },
    {
      name: "کرج",
      lines: ["خط 5"],
    },
    {
      name: "اتمسفر",
      lines: ["خط 5"],
    },
    {
      name: "گرم دره",
      lines: ["خط 5"],
    },
    {
      name: "وردآورد",
      lines: ["خط 5"],
    },
    {
      name: "ایران خودرو",
      lines: ["خط 5"],
    },
    {
      name: "چیتگر",
      lines: ["خط 5"],
    },
    {
      name: "ورزشگاه آزادی",
      lines: ["خط 5"],
    },
    {
      name: "ارم سبز",
      lines: ["خط 5"],
    },
    {
      name: "تهران (صادقیه)",
      lines: ["خط 5"],
    },
  ];
  private line7: SomeStation[] = [
    {
      name: "میدان صنعت",
      lines: ["خط 7"],
    },
    {
      name: "برج میلاد تهران",
      lines: ["خط 7"],
    },
    {
      name: "بوستان گفتگو",
      lines: ["خط 7"],
    },
    {
      name: "دانشگاه تربیت مدرس",
      lines: ["خط 7"],
    },
    {
      name: "مدافعان سلامت",
      lines: ["خط 7"],
    },
    {
      name: "توحید",
      lines: ["خط 7"],
    },
    {
      name: "شهید نواب صفوی",
      lines: ["خط 7"],
    },
    {
      name: "رودکی",
      lines: ["خط 7"],
    },
    {
      name: "کمیل",
      lines: ["خط 7"],
    },
    {
      name: "بریانک",
      lines: ["خط 7"],
    },
    {
      name: "هلال احمر",
      lines: ["خط 7"],
    },
    {
      name: "مهدیه",
      lines: ["خط 7"],
    },
    {
      name: "میدان محمدیه",
      lines: ["خط 7"],
    },
    {
      name: "مولوی",
      lines: ["خط 7"],
    },
    {
      name: "میدان قیام",
      lines: ["خط 7"],
    },
    {
      name: "چهل تن دولاب",
      lines: ["خط 7"],
    },
    {
      name: "آهنگ",
      lines: ["خط 7"],
    },
    {
      name: "بسیج",
      lines: ["خط 7"],
    },
  ];
  private line6e: SomeStation[] = [
    {
      name: "امام حسین (ع)",
      lines: ["نیمه شرقی خط 6"],
    },
    {
      name: "میدان شهداء",
      lines: ["نیمه شرقی خط 6"],
    },
    {
      name: "امیرکبیر",
      lines: ["نیمه شرقی خط 6"],
    },
    {
      name: "شهید رضایی",
      lines: ["نیمه شرقی خط 6"],
    },
    {
      name: "بعثت",
      lines: ["نیمه شرقی خط 6"],
    },
    {
      name: "کیان شهر",
      lines: ["نیمه شرقی خط 6"],
    },
    {
      name: "دولت آباد",
      lines: ["نیمه شرقی خط 6"],
    },
  ];
  private line6w: SomeStation[] = [
    {
      name: "دانشگاه تربیت مدرس",
      lines: ["نیمه غربی خط 6"],
    },
    {
      name: "شهرک آزمایش",
      lines: ["نیمه غربی خط 6"],
    },
    {
      name: "مرزداران",
      lines: ["نیمه غربی خط 6"],
    },
    {
      name: "یادگار امام (ره)",
      lines: ["نیمه غربی خط 6"],
    },
    {
      name: "شهید اشرفی اصفهانی",
      lines: ["نیمه غربی خط 6"],
    },
    {
      name: "شهید ستاری",
      lines: ["نیمه غربی خط 6"],
    },
  ];
  private lineik: SomeStation[] = [
    {
      name: "شاهد - باقرشهر",
      lines: ["خط انشعابی فرودگاه امام خمینی (ره) (انشعاب خط 1)"],
    },
    {
      name: "نمایشگاه شهر آفتاب",
      lines: ["خط انشعابی فرودگاه امام خمینی (ره) (انشعاب خط 1)"],
    },
    {
      name: "فرودگاه امام خمینی (ره)",
      lines: ["خط انشعابی فرودگاه امام خمینی (ره) (انشعاب خط 1)"],
    },
  ];
  private linemha: SomeStation[] = [
    {
      name: "بیمه",
      lines: ["خط انشعابی فرودگاه مهرآباد (انشعاب خط 4)"],
    },
    {
      name: "پایانه 1و2 فرودگاه مهرآباد",
      lines: ["خط انشعابی فرودگاه مهرآباد (انشعاب خط 4)"],
    },
    {
      name: "پایانه  4و6 فرودگاه مهرآباد",
      lines: ["خط انشعابی فرودگاه مهرآباد (انشعاب خط 4)"],
    },
  ];
  private line8g: SomeStation[] = [
    {
      name: "گلشهر",
      lines: ["خط انشعابی هشتگرد (انشعاب خط 5 )"],
    },
    {
      name: "شهید سپهبد قاسم سلیمانی",
      lines: ["خط انشعابی هشتگرد (انشعاب خط 5 )"],
    },
  ];

  private stations: SomeStation[] = [
    ...this.line1,
    ...this.line2,
    ...this.line3,
    ...this.line4,
    ...this.line5,
    ...this.line6e,
    ...this.line6w,
    ...this.lineik,
    ...this.linemha,
    ...this.line8g,
  ];

  private async getLineByName(name: string, connection: Connection) {
    const line = await connection
      .getRepository<Line>("line")
      .findOne({ where: { name } });
    return line;
  }

  private async createStationByName(
    station: SomeStation,
    connection: Connection
  ): Promise<number> {
    const inserted = await connection
      .getRepository<Station>("station")
      .insert({ name: station.name });
    const stationId = inserted.identifiers[0].id;
    return stationId;
  }

  private finalParseOnStations() {
    const finalStations: SomeStation[] = [];
    const stations = this.stations;

    stations.map((station) => {
      const previousStationIndex = finalStations.findIndex(
        (st) => st.name == station.name
      );
      if (previousStationIndex === -1) {
        // first time
        finalStations.push(station);
      } else {
        // add another line
        finalStations[previousStationIndex].lines = [
          ...finalStations[previousStationIndex].lines,
          ...station.lines,
        ];
      }
    });
    return finalStations;
  }

  public async run(factory: Factory, connection: Connection): Promise<any> {
    const stations = this.finalParseOnStations();
    console.log(stations);
    await Promise.all(
      stations.map(async (x) => {
        const stationId = await this.createStationByName(x, connection);
        console.log(stationId);
        await Promise.all(
          x.lines.map(async (lineName) => {
            const line = await this.getLineByName(lineName, connection);

            line &&
              (await connection
                .getRepository("station_line")
                .insert({ stationId: stationId, lineId: line.id }));
          })
        );
      })
    );
  }
}

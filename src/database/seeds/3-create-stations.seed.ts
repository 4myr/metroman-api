import { stat } from "fs";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Line, Station } from "../../models/index.model";

export class CreateStations implements Seeder {
  private line1: string[] = [
    "تجریش",
    "قیطریه",
    "شهید صدر",
    "قلهک",
    "دکتر شریعتی",
    "میرداماد",
    "شهید حقانی",
    "شهید همت",
    "مصلی امام خمینی(ره)",
    "شهید بهشتی",
    "شهید مفتح",
    "شهدای هفتم تیر",
    "طالقانی",
    "دروازه دولت",
    "سعدی",
    "امام خمینی (ره)",
    "پانزده خرداد",
    "خیام",
    "میدان محمدیه",
    "شوش",
    "پایانه جنوب",
    "شهید بخارایی",
    "علی آباد",
    "جوانمرد قصاب",
    "شهرری",
    "پالایشگاه",
    "شاهد - باقرشهر",
    "حرم مطهر امام خمینی (ره)",
    "کهریزک",
  ];

  private line2: string[] = [
    "تهران (صادقیه)",
    "طرشت",
    "دانشگاه شریف",
    "شادمان",
    "شهید نواب صفوی",
    "میدان حر",
    "دانشگاه امام علی ( ع)",
    "حسن آباد",
    "امام خمینی (ره)",
    "ملت",
    "بهارستان",
    "دروازه شمیران",
    "امام حسین (ع)",
    "شهید مدنی",
    "سبلان",
    "فدک",
    "جانبازان",
    "سرسبز",
    "دانشگاه علم و صنعت",
    "شهید باقری",
    "تهرانپارس",
    "فرهنگسرا",
  ];
  private line3: string[] = [
    "قائم",
    "شهید محلاتی",
    "اقدسیه",
    "نوبنیاد",
    "حسین آباد",
    "میدان هروی",
    "شهید زین الدین",
    "خواجه عبدالله انصاری",
    "شهید صیاد شیرازی",
    "شهید قدوسی",
    "سهروردی",
    "شهید بهشتی",
    "میرزای شیرازی",
    "میدان جهاد",
    "میدان حضرت ولیعصر (عج)",
    "تئاتر شهر",
    "منیریه",
    "مهدیه",
    "راه آهن",
    "جوادیه",
    "زمزم",
    "شهرک شریعتی",
    "عبدل آباد",
    "نعمت آباد",
    "آزادگان",
  ];
  private line4: string[] = [
    "شهید کلاهدوز",
    "نیرو هوایی",
    "نبرد",
    "پیروزی",
    "ابن سینا",
    "میدان شهداء",
    "دروازه شمیران",
    "دروازه دولت",
    "فردوسی",
    "تئاتر شهر",
    "میدان انقلاب اسلامی",
    "توحید",
    "شادمان",
    "دکتر حبیب اله",
    "استاد معین",
    "میدان آزادی",
    "بیمه",
    "شهرک اکباتان",
    "ارم سبز",
  ];
  private line5: string[] = [
    "گلشهر",
    "محمد شهر",
    "کرج",
    "اتمسفر",
    "گرم دره",
    "وردآورد",
    "ایران خودرو",
    "چیتگر",
    "ورزشگاه آزادی",
    "ارم سبز",
    "تهران (صادقیه)",
  ];
  private line7: string[] = [
    "میدان صنعت",
    "برج میلاد تهران",
    "بوستان گفتگو",
    "دانشگاه تربیت مدرس",
    "مدافعان سلامت",
    "توحید",
    "شهید نواب صفوی",
    "رودکی",
    "کمیل",
    "بریانک",
    "هلال احمر",
    "مهدیه",
    "میدان محمدیه",
    "مولوی",
    "میدان قیام",
    "چهل تن دولاب",
    "آهنگ",
    "بسیج",
  ];
  private line6e: string[] = [
    "امام حسین (ع)",
    "میدان شهداء",
    "امیرکبیر",
    "شهید رضایی",
    "بعثت",
    "کیان شهر",
    "دولت آباد",
  ];
  private line6w: string[] = [
    "دانشگاه تربیت مدرس",
    "شهرک آزمایش",
    "مرزداران",
    "یادگار امام (ره)",
    "شهید اشرفی اصفهانی",
    "شهید ستاری",
  ];
  private lineik: string[] = [
    "شاهد - باقرشهر",
    "نمایشگاه شهر آفتاب",
    "فرودگاه امام خمینی (ره)",
  ];
  private linemha: string[] = [
    "بیمه",
    "پایانه 1و2 فرودگاه مهرآباد",
    "پایانه 4و6 فرودگاه مهرآباد",
  ];
  private line8g: string[] = ["گلشهر", "شهید سپهبد قاسم سلیمانی"];

  private stations = [
    { line: "خط 1", stations: this.line1 },
    { line: "خط 2", stations: this.line2 },
    { line: "خط 3", stations: this.line3 },
    { line: "خط 4", stations: this.line4 },
    { line: "خط 5", stations: this.line5 },
    { line: "نیمه شرقی خط 6", stations: this.line6e },
    { line: "نیمه غربی خط 6", stations: this.line6w },
    {
      line: "خط انشعابی فرودگاه امام خمینی (انشعاب خط 1)",
      stations: this.lineik,
    },
    {
      line: "خط انشعابی فرودگاه مهرآباد (انشعاب خط 4)",
      stations: this.linemha,
    },
    { line: "خط انشعابی هشتگرد (انشعاب خط 5)", stations: this.line8g },
  ];

  private async getLineByName(name: string, connection: Connection) {
    const line = await connection
      .getRepository<Line>("line")
      .findOne({ where: { name } });
    return line;
  }

  private async getOrCreateStationByName(
    name: string,
    connection: Connection
  ): Promise<number> {
    const station = await connection
      .getRepository<Station>("station")
      .findOneBy({ name });
    if (station) return station.id;

    const inserted = await connection
      .getRepository<Station>("station")
      .insert({ name });
    const stationId = inserted.identifiers[0].id;
    return stationId;
  }
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await Promise.all(
      this.stations.map(async (row) => {
        const line = await this.getLineByName(row.line, connection);
        if (!line) throw new Error(`${row.line} not found`);
        let order = 0;
        for (const stationName of row.stations) {
          const stationId = await this.getOrCreateStationByName(
            stationName,
            connection
          );
          if (!stationId) throw new Error(`${stationName} not created`);
          const createdStationLine = await connection
            .getRepository("station_line")
            .insert({ station: stationId, line: line?.id, order: ++order });
          if (!createdStationLine)
            throw new Error(
              `station_line ${stationName} line ${line?.id} not created`
            );
        }
      })
    );
  }
}

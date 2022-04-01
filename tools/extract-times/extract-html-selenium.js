const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const firefox = require("selenium-webdriver/firefox");
const chromedriver = require("chromedriver");
const geckodriver = require("geckodriver");
const fs = require("fs");

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
// firefox.setDefaultService(new firefox.ServiceBuilder(geckodriver.path).build());

const LineSelectIDs = [
  {
    id: 1,
    name: "خط 1",
    nameForFileName: "line1",
  },
  {
    id: 4,
    name: "خط 2",
    nameForFileName: "line2",
  },
  {
    id: 5,
    name: "خط 3",
    nameForFileName: "line3",
  },
  {
    id: 6,
    name: "خط 4",
    nameForFileName: "line4",
  },
  {
    id: 7,
    name: "خط 5",
    nameForFileName: "line5",
  },
  {
    id: 9,
    name: "خط 7",
    nameForFileName: "line7",
  },
  {
    id: 8,
    name: "نیمه شرقی خط 6",
    nameForFileName: "line6e",
  },
  {
    id: 13,
    name: "نیمه غربی خط 6",
    nameForFileName: "line6w",
  },
  {
    id: 12,
    name: "خط انشعابی هشتگرد (انشعاب خط 5)",
    nameForFileName: "line8g",
  },
  {
    id: 10,
    name: "خط انشعابی فرودگاه امام خمینی (انشعاب خط 1)",
    nameForFileName: "lineik",
  },
  {
    id: 11,
    name: "خط انشعابی فرودگاه مهرآباد (انشعاب خط 4)",
    nameForFileName: "linemha",
  },
];

const LineDepartureTypes = [
  {
    id: 1,
    name: "روزهای شنبه تا چهارشنبه",
    transformTo: "NORMAL_DAYS",
  },
  {
    id: 2,
    name: "روزهای پنجشنبه",
    transformTo: "THURSDAYS",
  },
  {
    id: 3,
    name: "روزهای تعطیل",
    transformTo: "HOLIDAYS",
  },
  {
    id: 4,
    name: "روزهای جمعه",
    transformTo: "FRIDAYS",
  },
];

const getTypeForFileName = (type) => {
  switch (type) {
    case "NORMAL_DAYS":
      return "normal-days";
    case "THURSDAYS":
      return "thursdays";
    case "FRIDAYS":
      return "fridays";
    case "HOLIDAYS":
      return "holidays";
  }
};

const driver = new webdriver.Builder()
  .withCapabilities(webdriver.Capabilities.chrome())
  .build();

const process = async (Way) => {
  await driver.get(
    "https://metro.tehran.ir/%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-%D8%A8%D9%87%D8%B1%D9%87-%D8%A8%D8%B1%D8%AF%D8%A7%D8%B1%DB%8C/%D8%B2%D9%85%D8%A7%D9%86%D8%A8%D9%86%D8%AF%DB%8C-%D8%AD%D8%B1%DA%A9%D8%AA-%D9%88-%D9%86%D9%82%D8%B4%D9%87-%D9%87%D8%A7/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D8%AD%D8%B1%D9%83%D8%AA-%D9%82%D8%B7%D8%A7%D8%B1%D9%87%D8%A7"
  );
  const title = await driver.getTitle();

  for (const lineData of LineSelectIDs) {
    const lineSelectId = lineData.id;
    const lineNameForFileName = lineData.nameForFileName;

    for (const departureData of LineDepartureTypes) {
      const typeSelectId = departureData.id;
      const typeNameForFileName = getTypeForFileName(departureData.transformTo);

      // await driver.executeScript(
      //   `$('#dnn_ctr2850_Main_frmDdlLine > option[value=${lineSelectId}]').prop('selected', true);`
      // ); // select line

      // await driver.executeScript(
      //   `$('#dnn_ctr2850_Main_frmDdlDirection > option[value=${Way}]').prop('selected', true);`
      // ); // select way

      // await driver.executeScript(
      //   `$('#dnn_ctr2850_Main_frmDdlDaysTypeLU > option[value=${typeSelectId}]').prop('selected', true);`
      // ); // select days

      await driver.wait(
        webdriver.until.elementIsVisible(
          await driver.findElement(
            webdriver.By.css("#dnn_ctr2850_Main_frmBtnSearch")
          )
        ),
        10000
      );

      await driver.executeScript(
        `$('#dnn_ctr2850_Main_frmDdlLine').val(${lineSelectId});`
      ); // select line

      await driver.executeScript(
        `$('#dnn_ctr2850_Main_frmDdlDirection').val(${Way});`
      ); // select way

      await driver.executeScript(
        `$('#dnn_ctr2850_Main_frmDdlDaysTypeLU').val(${typeSelectId});`
      ); // select days

      try {
        await driver
          .findElement(webdriver.By.css("#dnn_ctr2850_Main_frmBtnSearch"))
          .click();
      } catch (ex) {}

      console.log(
        lineSelectId,
        lineNameForFileName,
        typeSelectId,
        typeNameForFileName
      );
      await driver.getTitle(); // wait until load
      const tbody = await driver
        .findElement(webdriver.By.css("table > tbody"))
        .getAttribute("outerHTML"); // get html departures to save
      const dir = `${__dirname}/times-to-read/${Way}/${lineNameForFileName}`;
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      fs.writeFileSync(`${dir}/${typeNameForFileName}.html`, tbody, {
        encoding: "utf-8",
      });
    }
  }
  // console.log(title);

  // driver.close();
};

const main = async () => {
  await process(1);
  await process(2);
};

main();

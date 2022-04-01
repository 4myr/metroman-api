const DomParser = require("dom-parser");
const fs = require("fs");

const main = (Way) => {
  const linesPath = `${__dirname}/times-to-read/${Way}`;
  fs.readdirSync(linesPath).map((line) => {
    const linePath = `${linesPath}/${line}`;
    fs.readdirSync(linePath).map((type) => {
      const result = [];
      const fullPath = `${linePath}/${type}`;
      const resultPath = `${__dirname}/parsed-times/${Way}/${line}|${type.replace(
        ".html",
        ".json"
      )}`;
      const tbody = fs.readFileSync(fullPath, {
        encoding: "utf-8",
      });

      const domParser = new DomParser(tbody);
      const dom = domParser.parseFromString(tbody);

      const allTrElements = dom.getElementsByTagName("tr");
      const stationsNameTrElement = allTrElements[0];
      const otherTrElements = allTrElements.splice(1);

      const stationsNameElements =
        stationsNameTrElement.getElementsByClassName("fa-IR");
      stationsNameElements.map((stationTrElement) => {
        result.push({ station: stationTrElement.textContent, times: [] });
      });

      otherTrElements.map((tr) => {
        const tdElements = tr.getElementsByTagName("td");
        tdElements.map((timeTdElement, stationIndex) => {
          const time = timeTdElement.textContent;
          if (time) {
            const rowInResult = result[stationIndex];
            const stationName = rowInResult.station;
            result[stationIndex].times.push(time);
          }
        });
      });

      console.log(result);
      fs.writeFileSync(resultPath, JSON.stringify(result));
    });
  });
};

main(1);
main(2);

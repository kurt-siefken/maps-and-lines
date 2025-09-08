const fs = require("fs");
const https = require("https");

const API_URL = "https://restcountries.com/v3.1/all?fields=name,cca3,borders,latlng";

const SURROUNDED = {
  "Lesotho": "South Africa",
  "San Marino": "Italy",
  "Vatican City": "Italy"
};

function getDirection(fromCoords, toCoords) {
  const [lat1, lon1] = fromCoords;
  const [lat2, lon2] = toCoords;
  const angle = (Math.atan2(lon2 - lon1, lat2 - lat1) * 180) / Math.PI;
  const bearing = (angle + 360) % 360;

  if (bearing >= 22.5 && bearing < 67.5) return "northeast";
  if (bearing >= 67.5 && bearing < 112.5) return "east";
  if (bearing >= 112.5 && bearing < 157.5) return "southeast";
  if (bearing >= 157.5 && bearing < 202.5) return "south";
  if (bearing >= 202.5 && bearing < 247.5) return "southwest";
  if (bearing >= 247.5 && bearing < 292.5) return "west";
  if (bearing >= 292.5 && bearing < 337.5) return "northwest";
  return "north";
}

function fetchData(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on("error", reject);
  });
}

(async () => {
  console.log("Fetching country data from REST Countries API...");
  let countries;
  try {
    countries = await fetchData(API_URL);
  } catch (e) {
    console.error("Failed to fetch data:", e);
    return;
  }

  if (!Array.isArray(countries)) {
    console.error("Unexpected API response. Expected an array but got:", countries);
    return;
  }

  const codeToName = {};
  const nameToCoords = {};
  const bordersMap = {};

  countries.forEach((country) => {
    if (typeof country !== "object" || country === null) return;

    const name = country.name && country.name.common;
    const cca3 = country.cca3;
    const borders = Array.isArray(country.borders) ? country.borders : [];
    const latlng = Array.isArray(country.latlng) && country.latlng.length === 2 ? country.latlng : null;

    if (!name || !cca3) return;

    codeToName[cca3] = name;
    if (borders.length > 0) bordersMap[name] = borders;
    if (latlng) nameToCoords[name] = latlng;
  });

  console.log("Generating countryBordersWithDirections array...");

  const output = ["const countryBordersWithDirections = ["];

  Object.entries(bordersMap).forEach(([name, borderCodes]) => {
    const entries = borderCodes.map((code) => {
      const neighbor = codeToName[code] || code;
      let direction = "?";

      if (SURROUNDED[name] === neighbor) {
        direction = "surrounded";
      } else {
        const from = nameToCoords[name];
        const to = nameToCoords[neighbor];
        if (from && to) direction = getDirection(from, to);
      }

      return `      { country: \"${neighbor}\", direction: \"${direction}\" }`;
    });

    output.push(`  {\n    country: \"${name}\",\n    borders: [\n${entries.join(",\n")}\n    ]\n  },`);
  });

  output.push("];\n");

  console.log("Writing to countryBordersWithDirections.js...");
  try {
    fs.writeFileSync("countryBordersWithDirections.js", output.join("\n"), "utf-8");
    console.log("Done! File created: countryBordersWithDirections.js");
  } catch (e) {
    console.error("Failed to write file:", e);
  }
})();

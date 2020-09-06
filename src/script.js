import fetchThis from "./utils/fetcher.js";

let allIndicators = [];

let valuableIndicators = [];

async function fetchAllIndicators() {
  for (let i = 1; i < 50; i++) {
    let data = await fetchThis(
      `http://api.worldbank.org/v2/indicator?format=json&page=+${i}`
    );

    data = data[1];

    // Only the second element of the array has indicators, i.e., what we want:
    const newIndicators = data.map((el) => {
      const newElement = {
        id: el.id,
        name: el.name
      };
      return newElement;
    });
    allIndicators = [...allIndicators, ...newIndicators];
  }
  allIndicators.forEach(indicator => {
    fetchIfData(indicator);
  })
  console.log(valuableIndicators);
  console.log("DONE");
}

async function fetchIfData(indicator) {
  let data = await fetchThis(
    `http://api.worldbank.org/v2/country/chn/indicator/${indicator.id}?format=json`
  );
  if(data[1] !== null) {
    valuableIndicators.push(indicator);
  }
}

fetchAllIndicators();

// chal 1

// let teas = ["tea1", "tea2", "tea3", "tea4"];
// let teas2 = [];

// for (let index = 0; index < teas.length && teas[index] !== "tea3"; index++) {
//   const element = teas[index];
//   teas2.push(element);
// }

// console.log(teas2);

// challenge 6 for for in

// let cities = {
//   berlin: 450000,
//   london: 440000,
//   newyork: 30000,
//   delhi: 40000,
// };

// let city2 = {};

// for (const city in cities) {
//   if (city === "newyork") {
//     // console.log(cities[city]);
//     break;
//   } else {
//     city2[city] = cities[city];
//   }
// }

// console.log(city2);

let citypop = {
  london: 25000,
  newyork: 30000,
  denver: 20000,
  lanc: 60000,
};

let citypoplesss30k = {};

for (const city in citypop) {
  if (citypop[city] < 30000) {
    continue;
  } else {
    citypoplesss30k[city] = citypop[city];
  }
}
console.log(citypoplesss30k);

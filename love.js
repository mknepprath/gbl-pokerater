export const fetchUrl =
  "https://raw.githubusercontent.com/pvpoke/pvpoke/9c844d889d2b592087825be2f222c600d2b6fdf2/src/data/rankings/love/overall/rankings-1500.json";

export const sets = [
  [
    // Pretend sets
    ["Lickitung (XL)", "Medicham", "Wormadam (Trash)"],
    ["Medicham (XL)", "Charizard", "Wigglytuff"],
    ["Wigglytuff", "Alomomola", "Vileplume (Shadow)"],
    ["Charizard", "Scrafty", "Wigglytuff"],
    ["Alomomola", "Wigglytuff", "Wormadam (Trash)"],
  ],
];

export default sets.flatMap((team) => team);

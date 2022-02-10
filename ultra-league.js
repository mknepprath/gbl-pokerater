export const fetchUrl =
  "https://raw.githubusercontent.com/pvpoke/pvpoke/master/src/data/rankings/all/overall/rankings-2500.json";

export const sets = [
  [
    // YouTube teams
    ["Talonflame", "Scrafty", "Greedent"], // Vergyverg
    ["Venusaur", "Umbreon"],
    ["Lapras", "Swampert", "Giratina (Altered)"],
    ["Umbreon", "Togekiss", "Clefable"],
    ["Obstagoon", "Cresselia", "Drifblim"],
    ["Clefable", "Gyarados", "Swampert"],
  ],
];

export default sets.flatMap((team) => team);

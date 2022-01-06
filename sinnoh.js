export const fetchUrl =
  "https://raw.githubusercontent.com/pvpoke/pvpoke/master/src/data/rankings/sinnoh/overall/rankings-1500.json";

export const sets = [
  [
    // YouTuber (https://www.youtube.com/watch?v=felOWwc3zu4)
    ["Gastrodon", "Lucario", "Toxicroak"],
    ["Bastiodon", "Cresselia", "Gastrodon"],
    ["Drapion", "Gallade", "Drifblim"],
  ],
];

export default sets.flatMap((team) => team);

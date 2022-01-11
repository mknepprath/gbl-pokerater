export const fetchUrl =
  "https://raw.githubusercontent.com/pvpoke/pvpoke/master/src/data/rankings/all/overall/rankings-1500.json";

export const sets = [
  // [
  //   // Past sets
  //   ["Marowak (Alolan)", "Tropius", "Vigoroth"],
  //   ["Altaria"],
  //   ["Altaria", "Stunfisk", "Abomasnow"],
  //   ["Altaria", "Swampert (Shadow)", "Serperior"],
  //   ["Azumarill", "Abomasnow", "Medicham"],
  //   ["Azumarill", "Mandibuzz", "Galvantula"],
  //   ["Beedrill", "Sableye"],
  //   ["Clefable", "Azumarill", "Altaria"],
  //   ["Cofagrigus", "Azumarill", "Bastiodon"],
  //   ["Cofagrigus", "Vigoroth", "Mandibuzz"],
  //   ["Deoxys (Defense)", "Victreebel (Shadow)", "Ninetales (Alolan)"],
  //   ["Deoxys (Defense)", "Azumarill", "Sableye"],
  //   ["Dewgong", "Azumarill", "Marowak (Alolan)"],
  //   ["Diggersby", "Vigoroth", "Stunfisk (Galarian)"],
  //   ["Drifblim", "Obstagoon", "Azumarill"],
  //   ["Empoleon", "Shiftry"],
  //   ["Stunfisk (Galarian)", "Azumarill", "Marowak (Alolan)"],
  //   ["Stunfisk (Galarian)", "Sirfetch'd", "Galvantula"],
  //   ["Stunfisk (Galarian)", "Galvantula", "Politoed"],
  //   ["Stunfisk (Galarian)", "Jellicent", "Umbreon"],
  //   ["Stunfisk (Galarian)", "Venusaur", "Medicham"],
  //   ["Galvantula", "Azumarill"],
  //   ["Galvantula", "Azumarill", "Marowak (Alolan)"],
  //   ["Galvantula", "Azumarill", "Stunfisk"],
  //   ["Hypno", "Machamp (Shadow)", "Azumarill"],
  //   ["Mandibuzz", "Stunfisk (Galarian)", "Cresselia"],
  //   ["Medicham", "Jellicent", "Bastiodon"],
  //   ["Medicham", "Swampert", "Bastiodon"],
  //   ["Medicham", "Ninetales (Alolan)", "Cofagrigus"],
  //   ["Medicham", "Muk", "Skarmory"],
  //   ["Medicham", "Zapdos (Shadow)", "Victreebel (Shadow)"],
  //   ["Medicham", "Zapdos (Shadow)", "Wigglytuff"],
  //   ["Registeel", "Azumarill", "Tropius"],
  //   ["Sableye", "Scrafty", "Azumarill"],
  //   ["Serperior", "Jellicent", "Bastiodon"],
  //   ["Shiftry", "Azumarill", "Marowak (Alolan)"],
  //   ["Shiftry", "Talonflame", "Azumarill"],
  //   ["Skarmory", "Azumarill", "Swampert"],
  //   ["Skarmory", "Obstagoon", "Whiscash"],
  //   ["Stunfisk (Galarian)", "Machamp (Shadow)", "Abomasnow"],
  //   ["Stunfisk (Galarian)", "Ferrothorn", "Obstagoon"],
  //   ["Swampert", "Skarmory", "Froslass"],
  //   ["Swampert", "Registeel", "Talonflame"],
  //   ["Swampert", "Azumarill", "Wigglytuff"],
  //   ["Talonflame", "Nidoqueen (Shadow)", "Bastiodon"],
  //   ["Talonflame", "Jellicent", "Scrafty"],
  //   ["Togekiss", "Lapras", "Vigoroth"],
  //   ["Toxicroak", "Umbreon", "Ninetales (Alolan)"],
  //   ["Umbreon", "Swampert", "Azumarill"],
  //   ["Umbreon", "Tropius", "Azumarill"],
  //   ["Umbreon", "Scrafty", "Nidoqueen"],
  //   ["Venusaur", "Azumarill", "Stunfisk (Galarian)"],
  //   ["Venusaur", "Azumarill", "Umbreon"],
  //   ["Venusaur", "Sableye", "Umbreon"],
  //   ["Vigoroth", "Azumarill", "Nidoqueen (Shadow)"],
  //   ["Whiscash", "Azumarill", "Chansey"],
  //   ["Whiscash", "Skarmory", "Medicham"],
  // ],

  // [
  //   // Jan 10th - Set 1
  //   ["Serperior", "Talonflame", "Milotic"],
  //   ["Zweilous", "Empoleon", "Cresselia"],
  //   ["Poliwrath", "Galvantula", "Serperior"],
  //   ["Togekiss", "Obstagoon", "Sylveon"],
  //   ["Abomasnow", "Jellicent", "Toxicroak"],
  // ],

  // [
  //   // Jan 10th - Set 2
  //   ["Swampert", "Registeel", "Pidgeot"],
  //   ["Trevenant", "Sableye", "Drapion (Shadow)"],
  //   ["Talonflame", "Azumarill", "Medicham"],
  //   ["Swampert", "Sableye", "Bastiodon"],
  //   ["Wigglytuff", "Whiscash", "Clefable"],
  // ],

  // [
  //   // Jan 10th - Set 3
  //   ["Jellicent", "Azumarill", "Stunfisk (Galarian)"],
  //   ["Cresselia", "Clefable", "Milotic"],
  //   ["Drapion (Shadow)", "Ninetales (Alolan)", "Marowak (Alolan)"],
  //   ["Sableye", "Azumarill"],
  //   ["Abomasnow", "Wigglytuff", "Azumarill"],
  // ],

  // [
  //   // Jan 10th - Set 4
  //   ["Altaria", "Politoed", "Bastiodon"],
  //   ["Gengar", "Azumarill", "Scrafty"],
  //   ["Skarmory", "Vigoroth", "Scrafty"],
  //   ["Ninetales (Alolan)", "Mandibuzz", "Empoleon"],
  //   ["Tropius", "Scrafty", "Sableye"],
  // ],

  // [
  //   // Jan 10th - Set 5
  //   ["Umbreon", "Stunfisk", "Nidoqueen"],
  //   ["Vigoroth", "Empoleon", "Altaria"],
  //   ["Deoxys (Defense)", "Cresselia", "Registeel"],
  //   ["Ninetales (Alolan)", "Greedent", "Jellicent"],
  //   ["Mandibuzz", "Trevenant", "Stunfisk (Galarian)"],
  // ],

  // [
  //   // Jan 10th - Set 6
  //   ["Altaria", "Talonflame", "Vigoroth"],
  //   ["Ariados", "Azumarill", "Umbreon"],
  //   ["Drifblim", "Primeape", "Bastiodon"],
  //   ["Mew", "Skarmory", "Whiscash"],
  //   ["Serperior", "Marowak (Alolan)", "Empoleon"],
  // ],

  [
    // Jan 11th - Set 1
    ["Trevenant", "Azumarill"],
    ["Scrafty", "Nidoqueen", "Whiscash"],
    ["Medicham", "Nidoqueen", "Stunfisk (Galarian)"],
    ["Altaria", "Wigglytuff", "Froslass"],
    ["Skarmory", "Azumarill", "Vigoroth"],
  ],

  [
    // Jan 11th - Set 2
    ["Obstagoon", "Azumarill", "Skarmory"],
    ["Wigglytuff", "Mandibuzz", "Politoed"],
    ["Nidoqueen (Shadow)", "Stunfisk", "Obstagoon"],
    ["Skarmory", "Cherrim (Sunshine)", "Talonflame"],
    ["Azumarill", "Venusaur", "Talonflame"],
  ],

  [
    // Jan 11th - Set 3
    ["Medicham", "Swampert", "Marowak (Alolan)"],
    ["Azumarill", "Venusaur", "Skarmory"],
    ["Galvantula", "Drifblim", "Umbreon"],
    ["Dewgong", "Azumarill", "Victreebel"],
    ["Scrafty", "Forretress", "Togekiss"],
  ],
];

export default sets.flatMap((team) => team);

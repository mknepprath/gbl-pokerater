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
  // [
  //   // Jan 11th - Set 1
  //   ["Trevenant", "Azumarill"],
  //   ["Scrafty", "Nidoqueen", "Whiscash"],
  //   ["Medicham", "Nidoqueen", "Stunfisk (Galarian)"],
  //   ["Altaria", "Wigglytuff", "Froslass"],
  //   ["Skarmory", "Azumarill", "Vigoroth"],
  // ],
  // [
  //   // Jan 11th - Set 2
  //   ["Obstagoon", "Azumarill", "Skarmory"],
  //   ["Wigglytuff", "Mandibuzz", "Politoed"],
  //   ["Nidoqueen (Shadow)", "Stunfisk", "Obstagoon"],
  //   ["Skarmory", "Cherrim (Sunshine)", "Talonflame"],
  //   ["Azumarill", "Venusaur", "Talonflame"],
  // ],
  // [
  //   // Jan 11th - Set 3
  //   ["Medicham", "Swampert", "Marowak (Alolan)"],
  //   ["Azumarill", "Venusaur", "Skarmory"],
  //   ["Galvantula", "Drifblim", "Umbreon"],
  //   ["Dewgong", "Azumarill", "Victreebel"],
  //   ["Scrafty", "Forretress", "Togekiss"],
  // ],
  // [
  //   // Jan 12th - Set 1
  //   ["Stunfisk", "Skarmory"],
  //   ["Greedent", "Azumarill", "Medicham"],
  //   ["Castform", "Scrafty", "Sandslash (Alolan)"],
  //   ["Deoxys (Defense)", "Venusaur", "Umbreon"],
  //   ["Altaria", "Umbreon", "Skarmory"],
  // ],
  // [
  //   // Jan 12th - Set 2
  //   ["Beedrill", "Trevenant", "Charizard (Shadow)"],
  //   ["Serperior", "Clefable", "Galvantula"],
  //   ["Swampert", "Skarmory", "Drapion"],
  //   ["Jellicent", "Gliscor", "Pidgeot"],
  //   ["Cofagrigus", "Azumarill"],
  // ],
  // [
  //   // Jan 12th - Set 3
  //   ["Galvantula", "Umbreon", "Jellicent"],
  //   ["Abomasnow", "Swampert", "Roserade"],
  //   ["Talonflame", "Scrafty", "Azumarill"],
  //   ["Jellicent", "Nidoqueen", "Galvantula"],
  //   ["Toxicroak", "Talonflame", "Serperior"],
  // ],
  // [
  //   // Jan 13th - Set 1
  //   ["Swampert", "Skuntank", "Ninetales (Alolan)"],
  //   ["Medicham", "Ferrothorn", "Talonflame"],
  //   ["Hitmonchan", "Skarmory", "Venusaur"],
  //   ["Stunfisk", "Skarmory", "Altaria"],
  //   ["Abomasnow", "Azumarill", "Cofagrigus"],
  // ],
  // [
  //   // Jan 13th - Set 2
  //   ["Abomasnow", "Drapion", "Golbat"],
  //   ["Empoleon", "Muk", "Scrafty"],
  //   ["Nidoqueen", "Umbreon", "Hypno"],
  //   ["Swampert", "Golbat", "Quagsire"],
  //   ["Politoed (Shadow)", "Altaria", "Scrafty"],
  // ],
  // [
  //   // Jan 13th - Set 3
  //   ["Jellicent", "Skarmory", "Talonflame"],
  //   ["Medicham", "Skarmory", "Diggersby"],
  //   ["Toxicroak", "Machamp", "Azumarill"],
  //   ["Azumarill", "Registeel", "Medicham"],
  //   ["Froslass", "Toxicroak", "Excadrill"],
  // ],
  // [
  //   // Jan 14th - Set 1
  //   ["Ninetales (Alolan)", "Altaria", "Drapion (Shadow)"],
  //   ["Stunfisk (Galarian)", "Azumarill"],
  //   ["Jellicent", "Nidoqueen", "Scrafty"],
  //   ["Stunfisk (Galarian)", "Drifblim", "Medicham"],
  //   ["Stunfisk", "Venusaur", "Azumarill"],
  // ],
  // [
  //   // Jan 14th - Set 2
  //   ["Swampert", "Skarmory", "Sableye"],
  //   ["Drapion", "Azumarill", "Lapras"],
  //   ["Hypno", "Froslass", "Toxicroak"],
  //   ["Umbreon", "Swampert", "Deoxys (Defense)"],
  //   ["Drapion (Shadow)", "Cresselia", "Skuntank"],
  // ],
  // [
  //   // Jan 14th - Set 3
  //   ["Trevenant", "Stunfisk (Galarian)", "Azumarill"],
  //   ["Nidoqueen", "Scrafty", "Umbreon"],
  //   ["Skarmory", "Obstagoon", "Stunfisk"],
  //   ["Froslass", "Registeel", "Politoed"],
  //   ["Drifblim", "Ninetales (Alolan)", "Nidoqueen"],
  // ],
  // [
  //   // Jan 15th - Set 1
  //   ["Stunfisk (Galarian)", "Azumarill", "Trevenant"],
  //   ["Skarmory", "Swampert", "Stunfisk (Galarian)"],
  //   ["Talonflame", "Registeel"],
  //   ["Venusaur", "Azumarill", "Stunfisk (Galarian)"],
  //   ["Umbreon", "Skarmory", "Venusaur"],
  // ],
  // [
  //   // Jan 15th - Set 2
  //   ["Granbull (Shadow)", "Victreebel (Shadow)", "Hypno (Shadow)"],
  //   ["Jellicent", "Stunfisk", "Altaria"],
  //   ["Skarmory", "Obstagoon", "Azumarill"],
  //   ["Ninetales (Alolan)", "Azumarill", "Skarmory"],
  //   ["Skarmory", "Azumarill", "Stunfisk (Galarian)"],
  // ],
  // [
  //   // Jan 15th - Set 3
  //   ["Deoxys (Defense)", "Victreebel", "Bastiodon"],
  //   ["Machamp", "Azumarill", "Skarmory"],
  //   ["Swampert (Shadow)", "Skarmory", "Drapion (Shadow)"],
  //   ["Venusaur"],
  //   ["Victreebel (Shadow)", "Registeel", "Bastiodon"],
  // ],
  // [
  //   // Jan 16th - Set 1
  //   ["Wigglytuff", "Bastiodon", "Scrafty"],
  //   ["Azumarill", "Talonflame", "Scrafty"],
  //   ["Deoxys (Defense)", "Azumarill", "Umbreon"],
  //   ["Nidoqueen", "Stunfisk", "Meganium"],
  //   ["Escavalier", "Vigoroth", "Stunfisk"],
  // ],
  // [
  //   // Jan 16th - Set 2
  //   ["Stunfisk (Galarian)", "Nidoqueen", "Abomasnow"],
  //   ["Vigoroth", "Galvantula", "Stunfisk (Galarian)"],
  //   ["Mandibuzz", "Walrein", "Wigglytuff"],
  //   ["Talonflame", "Wigglytuff", "Ninetales (Alolan)"],
  //   ["Serperior", "Talonflame", "Nidoqueen"],
  // ],
  // [
  //   // Jan 16th - Set 3
  //   ["Walrein", "Azumarill", "Umbreon"],
  //   ["Walrein", "Nidoqueen", "Bastiodon"],
  //   ["Azumarill", "Cresselia", "Altaria"],
  //   ["Fraxure", "Azumarill", "Ferrothorn"],
  //   ["Azumarill", "Bastiodon", "Cresselia"],
  // ],
  // [
  //   // Jan 17th - Set 1
  //   ["Talonflame", "Ferrothorn", "Politoed"],
  //   ["Galvantula", "Azumarill", "Walrein"],
  //   ["Ninetales (Shadow)", "Granbull (Shadow)", "Machamp (Shadow)"],
  //   ["Sableye", "Medicham", "Azumarill"],
  //   ["Skarmory", "Azumarill", "Bastiodon"],
  // ],
  // [
  //   // Jan 17th - Set 2
  //   ["Obstagoon", "Trevenant", "Dedenne"],
  //   ["Walrein", "Medicham", "Lanturn"],
  //   ["Wigglytuff", "Obstagoon"],
  //   ["Mandibuzz", "Medicham", "Dewgong"],
  //   ["Nidoqueen (Shadow)", "Azumarill", "Galvantula"],
  // ],
  // [
  //   // Jan 17th - Set 3
  //   ["Walrein (Shadow)", "Trevenant", "Medicham"],
  //   ["Mew", "Walrein", "Toxicroak"],
  //   ["Walrein", "Deoxys (Defense)", "Clefairy"],
  //   ["Dewgong", "Galvantula", "Medicham"],
  //   ["Ninetales (Alolan)", "Toxicroak", "Swampert"],
  // ],
  // [
  //   // Jan 18th - Set 1
  //   ["Umbreon", "Nidoqueen", "Ferrothorn"],
  //   ["Swampert", "Talonflame", "Walrein"],
  //   ["Whiscash", "Abomasnow (Shadow)", "Skarmory"],
  //   ["Swampert", "Deoxys (Defense)", "Tropius"],
  //   ["Scrafty", "Hypno", "Venusaur"],
  // ],
  // [
  //   // Jan 18th - Set 2
  //   ["Bastiodon", "Sableye", "Medicham"],
  //   ["Scrafty", "Nidoqueen", "Azumarill"],
  //   ["Raichu (Alolan)", "Skarmory", "Azumarill"],
  //   ["Mew", "Galvantula", "Swampert"],
  //   ["Drapion", "Medicham", "Empoleon"],
  // ],
  // [
  //   // Jan 18th - Set 3
  //   ["Machamp", "Umbreon", "Magneton"],
  //   ["Pidgeot", "Azumarill", "Swampert (Shadow)"],
  //   ["Obstagoon", "Deoxys (Defense)", "Toxicroak"],
  //   ["Swampert", "Wigglytuff", "Azumarill"],
  //   ["Umbreon", "Hypno", "Meganium"],
  // ],
  // [
  //   // Jan 19th - Set 1
  //   ["Machamp", "Ninetales (Alolan)", "Venusaur"],
  //   ["Victreebel (Shadow)", "Bastiodon", "Mandibuzz"],
  //   ["Poliwrath", "Marowak (Alolan)", "Abomasnow"],
  //   ["Deoxys (Defense)", "Serperior", "Stunfisk"],
  //   ["Galvantula", "Azumarill", "Medicham"],
  // ],
  // [
  //   // Jan 19th - Set 2
  //   ["Nidoqueen (Shadow)", "Magneton", "Jellicent"],
  //   ["Deoxys (Defense)", "Ninetales (Alolan)", "Walrein (Shadow)"],
  //   ["Bastiodon", "Azumarill", "Venusaur"],
  //   ["Deoxys (Defense)", "Drapion", "Walrein (Shadow)"],
  //   ["Azumarill", "Venusaur", "Talonflame"],
  // ],
  // [
  //   // Jan 19th - Set 3
  //   ["Skarmory", "Azumarill", "Swampert"],
  //   ["Skarmory", "Azumarill", "Swampert (Shadow)"],
  //   ["Wobbuffet", "Galvantula", "Vullaby"],
  //   ["Stunfisk (Galarian)", "Venusaur", "Pelipper"],
  //   ["Umbreon", "Nidoqueen", "Azumarill"],
  // ],
  [
    // Jan 20th - Set 1
    ["Swampert (Shadow)", "Skarmory", "Azumarill"],
    ["Stunfisk", "Skarmory", "Medicham"],
    ["Hypno (Shadow)", "Medicham"],
    ["Jellicent", "Scrafty", "Talonflame"],
    ["Altaria", "Azumarill", "Stunfisk (Galarian)"],
  ],
  [
    // Jan 20th - Set 2
    ["Azumarill", "Skarmory", "Obstagoon"],
    ["Jellicent", "Galvantula", "Scrafty"],
    ["Talonflame", "Trevenant", "Sableye"],
    ["Swampert", "Azumarill", "Hypno"],
    ["Altaria", "Venusaur", "Scrafty"],
  ],
  [
    // Jan 20th - Set 3
    ["Granbull (Shadow)", "Medicham", "Politoed"],
    ["Talonflame", "Politoed", "Wigglytuff"],
    ["Medicham", "Talonflame", "Bastiodon"],
    ["Obstagoon", "Nidoqueen (Shadow)", "Skarmory"],
    ["Bastiodon", "Toxicroak", "Mandibuzz"],
  ],
];

export default sets.flatMap((team) => team);

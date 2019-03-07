// Information on every Pokémon
var w = [];
w[1] = [{"introduced_in": 1, "name": "Bulbasaur", "weight": 69, "hp": 45, "catch_rate": 45, "speed": 45, "types": ["grass", "poison"]}];
w[2] = [{"introduced_in": 1, "name": "Ivysaur", "weight": 130, "hp": 60, "catch_rate": 45, "speed": 60, "types": ["grass", "poison"]}];
w[3] = [{"introduced_in": 1, "name": "Venusaur", "weight": 1000, "hp": 80, "catch_rate": 45, "speed": 80, "types": ["grass", "poison"]}, {"introduced_in": 15, "name": "Mega Venusaur", "weight": 1555, "hp": 80, "catch_rate": 45, "speed": 80, "types": ["grass", "poison"]}];
w[4] = [{"introduced_in": 1, "name": "Charmander", "weight": 85, "hp": 39, "catch_rate": 45, "speed": 65, "types": ["fire"]}];
w[5] = [{"introduced_in": 1, "name": "Charmeleon", "weight": 190, "hp": 58, "catch_rate": 45, "speed": 80, "types": ["fire"]}];
w[6] = [{"introduced_in": 1, "name": "Charizard", "weight": 905, "hp": 78, "catch_rate": 45, "speed": 100, "types": ["fire", "flying"]}, {"introduced_in": 15, "name": "Mega Charizard X", "weight": 1105, "hp": 78, "catch_rate": 45, "speed": 100, "types": ["fire", "dragon"]}, {"introduced_in": 15, "name": "Mega Charizard Y", "weight": 1005, "hp": 78, "catch_rate": 45, "speed": 100, "types": ["fire", "flying"]}];
w[7] = [{"introduced_in": 1, "name": "Squirtle", "weight": 90, "hp": 44, "catch_rate": 45, "speed": 43, "types": ["water"]}];
w[8] = [{"introduced_in": 1, "name": "Wartortle", "weight": 225, "hp": 59, "catch_rate": 45, "speed": 58, "types": ["water"]}];
w[9] = [{"introduced_in": 1, "name": "Blastoise", "weight": 855, "hp": 79, "catch_rate": 45, "speed": 78, "types": ["water"]}, {"introduced_in": 15, "name": "Mega Blastoise", "weight": 1011, "hp": 79, "catch_rate": 45, "speed": 78, "types": ["water"]}];
w[10] = [{"introduced_in": 1, "name": "Caterpie", "weight": 29, "hp": 45, "catch_rate": 255, "speed": 45, "types": ["bug"]}];
w[11] = [{"introduced_in": 1, "name": "Metapod", "weight": 99, "hp": 50, "catch_rate": 120, "speed": 30, "types": ["bug"]}];
w[12] = [{"introduced_in": 1, "name": "Butterfree", "weight": 320, "hp": 60, "catch_rate": 45, "speed": 70, "types": ["bug", "flying"]}];
w[13] = [{"introduced_in": 1, "name": "Weedle", "weight": 32, "hp": 40, "catch_rate": 255, "speed": 50, "types": ["bug", "poison"]}];
w[14] = [{"introduced_in": 1, "name": "Kakuna", "weight": 100, "hp": 45, "catch_rate": 120, "speed": 35, "types": ["bug", "poison"]}];
w[15] = [{"introduced_in": 1, "name": "Beedrill", "weight": 295, "hp": 65, "catch_rate": 45, "speed": 75, "types": ["bug", "poison"]}, {"introduced_in": 16, "name": "Mega Beedrill", "weight": 405, "hp": 65, "catch_rate": 45, "speed": 145, "types": ["bug", "poison"]}];
w[16] = [{"introduced_in": 1, "name": "Pidgey", "weight": 18, "hp": 40, "catch_rate": 255, "speed": 56, "types": ["normal", "flying"]}];
w[17] = [{"introduced_in": 1, "name": "Pidgeotto", "weight": 300, "hp": 63, "catch_rate": 120, "speed": 71, "types": ["normal", "flying"]}];
w[18] = [{"introduced_in": 1, "name": "Pidgeot", "weight": 395, "hp": 83, "catch_rate": 45, "speed": 101, "types": ["normal", "flying"]}, {"introduced_in": 16, "name": "Mega Pidgeot", "weight": 505, "hp": 83, "catch_rate": 45, "speed": 121, "types": ["normal", "flying"]}];
w[19] = [{"introduced_in": 1, "name": "Rattata", "weight": 35, "hp": 30, "catch_rate": 255, "speed": 72, "types": ["normal"]}, {"introduced_in": 17, "name": "Alolan Rattata", "weight": 38, "hp": 30, "catch_rate": 255, "speed": 72, "types": ["dark", "normal"]}];
w[20] = [{"introduced_in": 1, "name": "Raticate", "weight": 185, "hp": 55, "catch_rate": 127, "speed": 97, "types": ["normal"]}, {"introduced_in": 17, "name": "Alolan Raticate", "weight": 255, "hp": 75, "catch_rate": 127, "speed": 77, "types": ["dark", "normal"]}, {"introduced_in": 17, "name": "Totem Alolan Raticate", "weight": 1050, "hp": 75, "catch_rate": 127, "speed": 77, "types": ["dark", "normal"]}];
w[21] = [{"introduced_in": 1, "name": "Spearow", "weight": 20, "hp": 40, "catch_rate": 255, "speed": 70, "types": ["normal", "flying"]}];
w[22] = [{"introduced_in": 1, "name": "Fearow", "weight": 380, "hp": 65, "catch_rate": 90, "speed": 100, "types": ["normal", "flying"]}];
w[23] = [{"introduced_in": 1, "name": "Ekans", "weight": 69, "hp": 35, "catch_rate": 255, "speed": 55, "types": ["poison"]}];
w[24] = [{"introduced_in": 1, "name": "Arbok", "weight": 650, "hp": 60, "catch_rate": 90, "speed": 80, "types": ["poison"]}];
w[25] = [{"introduced_in": 1, "name": "Pikachu", "weight": 60, "hp": 35, "catch_rate": 190, "speed": 90, "types": ["electric"]}, {"introduced_in": 16, "name": "Cosplay Pikachu", "weight": 60, "hp": 35, "catch_rate": 190, "speed": 90, "types": ["electric"]}, {"introduced_in": 17, "name": "Original Cap Pikachu", "weight": 60, "hp": 35, "catch_rate": 190, "speed": 90, "types": ["electric"]}, {"introduced_in": 17, "name": "Hoenn Cap Pikachu", "weight": 60, "hp": 35, "catch_rate": 190, "speed": 90, "types": ["electric"]}, {"introduced_in": 16, "name": "Pikachu Rock Star", "weight": 60, "hp": 35, "catch_rate": 190, "speed": 90, "types": ["electric"]}, {"introduced_in": 16, "name": "Pikachu Belle", "weight": 60, "hp": 35, "catch_rate": 190, "speed": 90, "types": ["electric"]}, {"introduced_in": 17, "name": "Sinnoh Cap Pikachu", "weight": 60, "hp": 35, "catch_rate": 190, "speed": 90, "types": ["electric"]}, {"introduced_in": 16, "name": "Pikachu Pop Star", "weight": 60, "hp": 35, "catch_rate": 190, "speed": 90, "types": ["electric"]}, {"introduced_in": 17, "name": "Unova Cap Pikachu", "weight": 60, "hp": 35, "catch_rate": 190, "speed": 90, "types": ["electric"]}, {"introduced_in": 17, "name": "Kalos Cap Pikachu", "weight": 60, "hp": 35, "catch_rate": 190, "speed": 90, "types": ["electric"]}, {"introduced_in": 16, "name": "Pikachu Ph.D.", "weight": 60, "hp": 35, "catch_rate": 190, "speed": 90, "types": ["electric"]}, {"introduced_in": 17, "name": "Alola Cap Pikachu", "weight": 60, "hp": 35, "catch_rate": 190, "speed": 90, "types": ["electric"]}, {"introduced_in": 16, "name": "Pikachu Libre", "weight": 60, "hp": 35, "catch_rate": 190, "speed": 90, "types": ["electric"]}, {"introduced_in": 18, "name": "Pikachu", "weight": 60, "hp": 35, "catch_rate": 190, "speed": 90, "types": ["electric"]}];
w[26] = [{"introduced_in": 1, "name": "Raichu", "weight": 300, "hp": 60, "catch_rate": 75, "speed": 110, "types": ["electric"]}, {"introduced_in": 17, "name": "Alolan Raichu", "weight": 210, "hp": 60, "catch_rate": 75, "speed": 110, "types": ["electric", "psychic"]}];
w[27] = [{"introduced_in": 1, "name": "Sandshrew", "weight": 120, "hp": 50, "catch_rate": 255, "speed": 40, "types": ["ground"]}, {"introduced_in": 17, "name": "Alolan Sandshrew", "weight": 400, "hp": 50, "catch_rate": 255, "speed": 40, "types": ["ice", "steel"]}];
w[28] = [{"introduced_in": 1, "name": "Sandslash", "weight": 295, "hp": 75, "catch_rate": 90, "speed": 65, "types": ["ground"]}, {"introduced_in": 17, "name": "Alolan Sandslash", "weight": 550, "hp": 75, "catch_rate": 90, "speed": 65, "types": ["ice", "steel"]}];
w[29] = [{"introduced_in": 1, "name": "Nidoran\u2640", "weight": 70, "hp": 55, "catch_rate": 235, "speed": 41, "types": ["poison"]}];
w[30] = [{"introduced_in": 1, "name": "Nidorina", "weight": 200, "hp": 70, "catch_rate": 120, "speed": 56, "types": ["poison"]}];
w[31] = [{"introduced_in": 1, "name": "Nidoqueen", "weight": 600, "hp": 90, "catch_rate": 45, "speed": 76, "types": ["poison", "ground"]}];
w[32] = [{"introduced_in": 1, "name": "Nidoran\u2642", "weight": 90, "hp": 46, "catch_rate": 235, "speed": 50, "types": ["poison"]}];
w[33] = [{"introduced_in": 1, "name": "Nidorino", "weight": 195, "hp": 61, "catch_rate": 120, "speed": 65, "types": ["poison"]}];
w[34] = [{"introduced_in": 1, "name": "Nidoking", "weight": 620, "hp": 81, "catch_rate": 45, "speed": 85, "types": ["poison", "ground"]}];
w[35] = [{"introduced_in": 1, "name": "Clefairy", "weight": 75, "hp": 70, "catch_rate": 150, "speed": 35, "types": ["fairy"]}];
w[36] = [{"introduced_in": 1, "name": "Clefable", "weight": 400, "hp": 95, "catch_rate": 25, "speed": 60, "types": ["fairy"]}];
w[37] = [{"introduced_in": 1, "name": "Vulpix", "weight": 99, "hp": 38, "catch_rate": 190, "speed": 65, "types": ["fire"]}, {"introduced_in": 17, "name": "Alolan Vulpix", "weight": 99, "hp": 38, "catch_rate": 190, "speed": 65, "types": ["ice"]}];
w[38] = [{"introduced_in": 1, "name": "Ninetales", "weight": 199, "hp": 73, "catch_rate": 75, "speed": 100, "types": ["fire"]}, {"introduced_in": 17, "name": "Alolan Ninetales", "weight": 199, "hp": 73, "catch_rate": 75, "speed": 109, "types": ["ice", "fairy"]}];
w[39] = [{"introduced_in": 1, "name": "Jigglypuff", "weight": 55, "hp": 115, "catch_rate": 170, "speed": 20, "types": ["normal", "fairy"]}];
w[40] = [{"introduced_in": 1, "name": "Wigglytuff", "weight": 120, "hp": 140, "catch_rate": 50, "speed": 45, "types": ["normal", "fairy"]}];
w[41] = [{"introduced_in": 1, "name": "Zubat", "weight": 75, "hp": 40, "catch_rate": 255, "speed": 55, "types": ["poison", "flying"]}];
w[42] = [{"introduced_in": 1, "name": "Golbat", "weight": 550, "hp": 75, "catch_rate": 90, "speed": 90, "types": ["poison", "flying"]}];
w[43] = [{"introduced_in": 1, "name": "Oddish", "weight": 54, "hp": 45, "catch_rate": 255, "speed": 30, "types": ["grass", "poison"]}];
w[44] = [{"introduced_in": 1, "name": "Gloom", "weight": 86, "hp": 60, "catch_rate": 120, "speed": 40, "types": ["grass", "poison"]}];
w[45] = [{"introduced_in": 1, "name": "Vileplume", "weight": 186, "hp": 75, "catch_rate": 45, "speed": 50, "types": ["grass", "poison"]}];
w[46] = [{"introduced_in": 1, "name": "Paras", "weight": 54, "hp": 35, "catch_rate": 190, "speed": 25, "types": ["bug", "grass"]}];
w[47] = [{"introduced_in": 1, "name": "Parasect", "weight": 295, "hp": 60, "catch_rate": 75, "speed": 30, "types": ["bug", "grass"]}];
w[48] = [{"introduced_in": 1, "name": "Venonat", "weight": 300, "hp": 60, "catch_rate": 190, "speed": 45, "types": ["bug", "poison"]}];
w[49] = [{"introduced_in": 1, "name": "Venomoth", "weight": 125, "hp": 70, "catch_rate": 75, "speed": 90, "types": ["bug", "poison"]}];
w[50] = [{"introduced_in": 1, "name": "Diglett", "weight": 8, "hp": 10, "catch_rate": 255, "speed": 95, "types": ["ground"]}, {"introduced_in": 17, "name": "Alolan Diglett", "weight": 10, "hp": 10, "catch_rate": 255, "speed": 90, "types": ["ground", "steel"]}];
w[51] = [{"introduced_in": 1, "name": "Dugtrio", "weight": 333, "hp": 35, "catch_rate": 50, "speed": 120, "types": ["ground"]}, {"introduced_in": 17, "name": "Alolan Dugtrio", "weight": 666, "hp": 35, "catch_rate": 50, "speed": 110, "types": ["ground", "steel"]}];
w[52] = [{"introduced_in": 1, "name": "Meowth", "weight": 42, "hp": 40, "catch_rate": 255, "speed": 90, "types": ["normal"]}, {"introduced_in": 17, "name": "Alolan Meowth", "weight": 42, "hp": 40, "catch_rate": 255, "speed": 90, "types": ["dark"]}];
w[53] = [{"introduced_in": 1, "name": "Persian", "weight": 320, "hp": 65, "catch_rate": 90, "speed": 115, "types": ["normal"]}, {"introduced_in": 17, "name": "Alolan Persian", "weight": 330, "hp": 65, "catch_rate": 90, "speed": 115, "types": ["dark"]}];
w[54] = [{"introduced_in": 1, "name": "Psyduck", "weight": 196, "hp": 50, "catch_rate": 190, "speed": 55, "types": ["water"]}];
w[55] = [{"introduced_in": 1, "name": "Golduck", "weight": 766, "hp": 80, "catch_rate": 75, "speed": 85, "types": ["water"]}];
w[56] = [{"introduced_in": 1, "name": "Mankey", "weight": 280, "hp": 40, "catch_rate": 190, "speed": 70, "types": ["fighting"]}];
w[57] = [{"introduced_in": 1, "name": "Primeape", "weight": 320, "hp": 65, "catch_rate": 75, "speed": 95, "types": ["fighting"]}];
w[58] = [{"introduced_in": 1, "name": "Growlithe", "weight": 190, "hp": 55, "catch_rate": 190, "speed": 60, "types": ["fire"]}];
w[59] = [{"introduced_in": 1, "name": "Arcanine", "weight": 1550, "hp": 90, "catch_rate": 75, "speed": 95, "types": ["fire"]}];
w[60] = [{"introduced_in": 1, "name": "Poliwag", "weight": 124, "hp": 40, "catch_rate": 255, "speed": 90, "types": ["water"]}];
w[61] = [{"introduced_in": 1, "name": "Poliwhirl", "weight": 200, "hp": 65, "catch_rate": 120, "speed": 90, "types": ["water"]}];
w[62] = [{"introduced_in": 1, "name": "Poliwrath", "weight": 540, "hp": 90, "catch_rate": 45, "speed": 70, "types": ["water", "fighting"]}];
w[63] = [{"introduced_in": 1, "name": "Abra", "weight": 195, "hp": 25, "catch_rate": 200, "speed": 90, "types": ["psychic"]}];
w[64] = [{"introduced_in": 1, "name": "Kadabra", "weight": 565, "hp": 40, "catch_rate": 100, "speed": 105, "types": ["psychic"]}];
w[65] = [{"introduced_in": 1, "name": "Alakazam", "weight": 480, "hp": 55, "catch_rate": 50, "speed": 120, "types": ["psychic"]}, {"introduced_in": 15, "name": "Mega Alakazam", "weight": 480, "hp": 55, "catch_rate": 50, "speed": 150, "types": ["psychic"]}];
w[66] = [{"introduced_in": 1, "name": "Machop", "weight": 195, "hp": 70, "catch_rate": 180, "speed": 35, "types": ["fighting"]}];
w[67] = [{"introduced_in": 1, "name": "Machoke", "weight": 705, "hp": 80, "catch_rate": 90, "speed": 45, "types": ["fighting"]}];
w[68] = [{"introduced_in": 1, "name": "Machamp", "weight": 1300, "hp": 90, "catch_rate": 45, "speed": 55, "types": ["fighting"]}];
w[69] = [{"introduced_in": 1, "name": "Bellsprout", "weight": 40, "hp": 50, "catch_rate": 255, "speed": 40, "types": ["grass", "poison"]}];
w[70] = [{"introduced_in": 1, "name": "Weepinbell", "weight": 64, "hp": 65, "catch_rate": 120, "speed": 55, "types": ["grass", "poison"]}];
w[71] = [{"introduced_in": 1, "name": "Victreebel", "weight": 155, "hp": 80, "catch_rate": 45, "speed": 70, "types": ["grass", "poison"]}];
w[72] = [{"introduced_in": 1, "name": "Tentacool", "weight": 455, "hp": 40, "catch_rate": 190, "speed": 70, "types": ["water", "poison"]}];
w[73] = [{"introduced_in": 1, "name": "Tentacruel", "weight": 550, "hp": 80, "catch_rate": 60, "speed": 100, "types": ["water", "poison"]}];
w[74] = [{"introduced_in": 1, "name": "Geodude", "weight": 200, "hp": 40, "catch_rate": 255, "speed": 20, "types": ["rock", "ground"]}, {"introduced_in": 17, "name": "Alolan Geodude", "weight": 203, "hp": 40, "catch_rate": 255, "speed": 20, "types": ["rock", "electric"]}];
w[75] = [{"introduced_in": 1, "name": "Graveler", "weight": 1050, "hp": 55, "catch_rate": 120, "speed": 35, "types": ["rock", "ground"]}, {"introduced_in": 17, "name": "Alolan Graveler", "weight": 1100, "hp": 55, "catch_rate": 120, "speed": 35, "types": ["rock", "electric"]}];
w[76] = [{"introduced_in": 1, "name": "Golem", "weight": 3000, "hp": 80, "catch_rate": 45, "speed": 45, "types": ["rock", "ground"]}, {"introduced_in": 17, "name": "Alolan Golem", "weight": 3160, "hp": 80, "catch_rate": 45, "speed": 45, "types": ["rock", "electric"]}];
w[77] = [{"introduced_in": 1, "name": "Ponyta", "weight": 300, "hp": 50, "catch_rate": 190, "speed": 90, "types": ["fire"]}];
w[78] = [{"introduced_in": 1, "name": "Rapidash", "weight": 950, "hp": 65, "catch_rate": 60, "speed": 105, "types": ["fire"]}];
w[79] = [{"introduced_in": 1, "name": "Slowpoke", "weight": 360, "hp": 90, "catch_rate": 190, "speed": 15, "types": ["water", "psychic"]}];
w[80] = [{"introduced_in": 1, "name": "Slowbro", "weight": 785, "hp": 95, "catch_rate": 75, "speed": 30, "types": ["water", "psychic"]}, {"introduced_in": 16, "name": "Mega Slowbro", "weight": 1200, "hp": 95, "catch_rate": 75, "speed": 30, "types": ["water", "psychic"]}];
w[81] = [{"introduced_in": 1, "name": "Magnemite", "weight": 60, "hp": 25, "catch_rate": 190, "speed": 45, "types": ["electric", "steel"]}];
w[82] = [{"introduced_in": 1, "name": "Magneton", "weight": 600, "hp": 50, "catch_rate": 60, "speed": 70, "types": ["electric", "steel"]}];
w[83] = [{"introduced_in": 1, "name": "Farfetch\u2019d", "weight": 150, "hp": 52, "catch_rate": 45, "speed": 60, "types": ["normal", "flying"]}];
w[84] = [{"introduced_in": 1, "name": "Doduo", "weight": 392, "hp": 35, "catch_rate": 190, "speed": 75, "types": ["normal", "flying"]}];
w[85] = [{"introduced_in": 1, "name": "Dodrio", "weight": 852, "hp": 60, "catch_rate": 45, "speed": 110, "types": ["normal", "flying"]}];
w[86] = [{"introduced_in": 1, "name": "Seel", "weight": 900, "hp": 65, "catch_rate": 190, "speed": 45, "types": ["water"]}];
w[87] = [{"introduced_in": 1, "name": "Dewgong", "weight": 1200, "hp": 90, "catch_rate": 75, "speed": 70, "types": ["water", "ice"]}];
w[88] = [{"introduced_in": 1, "name": "Grimer", "weight": 300, "hp": 80, "catch_rate": 190, "speed": 25, "types": ["poison"]}, {"introduced_in": 17, "name": "Alolan Grimer", "weight": 420, "hp": 80, "catch_rate": 190, "speed": 25, "types": ["poison", "dark"]}];
w[89] = [{"introduced_in": 1, "name": "Muk", "weight": 300, "hp": 105, "catch_rate": 75, "speed": 50, "types": ["poison"]}, {"introduced_in": 17, "name": "Alolan Muk", "weight": 520, "hp": 105, "catch_rate": 75, "speed": 50, "types": ["poison", "dark"]}];
w[90] = [{"introduced_in": 1, "name": "Shellder", "weight": 40, "hp": 30, "catch_rate": 190, "speed": 40, "types": ["water"]}];
w[91] = [{"introduced_in": 1, "name": "Cloyster", "weight": 1325, "hp": 50, "catch_rate": 60, "speed": 70, "types": ["water", "ice"]}];
w[92] = [{"introduced_in": 1, "name": "Gastly", "weight": 1, "hp": 30, "catch_rate": 190, "speed": 80, "types": ["ghost", "poison"]}];
w[93] = [{"introduced_in": 1, "name": "Haunter", "weight": 1, "hp": 45, "catch_rate": 90, "speed": 95, "types": ["ghost", "poison"]}];
w[94] = [{"introduced_in": 1, "name": "Gengar", "weight": 405, "hp": 60, "catch_rate": 45, "speed": 110, "types": ["ghost", "poison"]}, {"introduced_in": 15, "name": "Mega Gengar", "weight": 405, "hp": 60, "catch_rate": 45, "speed": 130, "types": ["ghost", "poison"]}];
w[95] = [{"introduced_in": 1, "name": "Onix", "weight": 2100, "hp": 35, "catch_rate": 45, "speed": 70, "types": ["rock", "ground"]}];
w[96] = [{"introduced_in": 1, "name": "Drowzee", "weight": 324, "hp": 60, "catch_rate": 190, "speed": 42, "types": ["psychic"]}];
w[97] = [{"introduced_in": 1, "name": "Hypno", "weight": 756, "hp": 85, "catch_rate": 75, "speed": 67, "types": ["psychic"]}];
w[98] = [{"introduced_in": 1, "name": "Krabby", "weight": 65, "hp": 30, "catch_rate": 225, "speed": 50, "types": ["water"]}];
w[99] = [{"introduced_in": 1, "name": "Kingler", "weight": 600, "hp": 55, "catch_rate": 60, "speed": 75, "types": ["water"]}];
w[100] = [{"introduced_in": 1, "name": "Voltorb", "weight": 104, "hp": 40, "catch_rate": 190, "speed": 100, "types": ["electric"]}];
w[101] = [{"introduced_in": 1, "name": "Electrode", "weight": 666, "hp": 60, "catch_rate": 60, "speed": 150, "types": ["electric"]}];
w[102] = [{"introduced_in": 1, "name": "Exeggcute", "weight": 25, "hp": 60, "catch_rate": 90, "speed": 40, "types": ["grass", "psychic"]}];
w[103] = [{"introduced_in": 1, "name": "Exeggutor", "weight": 1200, "hp": 95, "catch_rate": 45, "speed": 55, "types": ["grass", "psychic"]}, {"introduced_in": 17, "name": "Alolan Exeggutor", "weight": 4156, "hp": 95, "catch_rate": 45, "speed": 45, "types": ["grass", "dragon"]}];
w[104] = [{"introduced_in": 1, "name": "Cubone", "weight": 65, "hp": 50, "catch_rate": 190, "speed": 35, "types": ["ground"]}];
w[105] = [{"introduced_in": 1, "name": "Marowak", "weight": 450, "hp": 60, "catch_rate": 75, "speed": 45, "types": ["ground"]}, {"introduced_in": 17, "name": "Alolan Marowak", "weight": 340, "hp": 60, "catch_rate": 75, "speed": 45, "types": ["fire", "ghost"]}, {"introduced_in": 18, "name": "Marowak", "weight": 980, "hp": 60, "catch_rate": 75, "speed": 45, "types": ["fire", "ghost"]}];
w[106] = [{"introduced_in": 1, "name": "Hitmonlee", "weight": 498, "hp": 50, "catch_rate": 45, "speed": 87, "types": ["fighting"]}];
w[107] = [{"introduced_in": 1, "name": "Hitmonchan", "weight": 502, "hp": 50, "catch_rate": 45, "speed": 76, "types": ["fighting"]}];
w[108] = [{"introduced_in": 1, "name": "Lickitung", "weight": 655, "hp": 90, "catch_rate": 45, "speed": 30, "types": ["normal"]}];
w[109] = [{"introduced_in": 1, "name": "Koffing", "weight": 10, "hp": 40, "catch_rate": 190, "speed": 35, "types": ["poison"]}];
w[110] = [{"introduced_in": 1, "name": "Weezing", "weight": 95, "hp": 65, "catch_rate": 60, "speed": 60, "types": ["poison"]}];
w[111] = [{"introduced_in": 1, "name": "Rhyhorn", "weight": 1150, "hp": 80, "catch_rate": 120, "speed": 25, "types": ["ground", "rock"]}];
w[112] = [{"introduced_in": 1, "name": "Rhydon", "weight": 1200, "hp": 105, "catch_rate": 60, "speed": 40, "types": ["ground", "rock"]}];
w[113] = [{"introduced_in": 1, "name": "Chansey", "weight": 346, "hp": 250, "catch_rate": 30, "speed": 50, "types": ["normal"]}];
w[114] = [{"introduced_in": 1, "name": "Tangela", "weight": 350, "hp": 65, "catch_rate": 45, "speed": 60, "types": ["grass"]}];
w[115] = [{"introduced_in": 1, "name": "Kangaskhan", "weight": 800, "hp": 105, "catch_rate": 45, "speed": 90, "types": ["normal"]}, {"introduced_in": 15, "name": "Mega Kangaskhan", "weight": 1000, "hp": 105, "catch_rate": 45, "speed": 100, "types": ["normal"]}];
w[116] = [{"introduced_in": 1, "name": "Horsea", "weight": 80, "hp": 30, "catch_rate": 225, "speed": 60, "types": ["water"]}];
w[117] = [{"introduced_in": 1, "name": "Seadra", "weight": 250, "hp": 55, "catch_rate": 75, "speed": 85, "types": ["water"]}];
w[118] = [{"introduced_in": 1, "name": "Goldeen", "weight": 150, "hp": 45, "catch_rate": 225, "speed": 63, "types": ["water"]}];
w[119] = [{"introduced_in": 1, "name": "Seaking", "weight": 390, "hp": 80, "catch_rate": 60, "speed": 68, "types": ["water"]}];
w[120] = [{"introduced_in": 1, "name": "Staryu", "weight": 345, "hp": 30, "catch_rate": 225, "speed": 85, "types": ["water"]}];
w[121] = [{"introduced_in": 1, "name": "Starmie", "weight": 800, "hp": 60, "catch_rate": 60, "speed": 115, "types": ["water", "psychic"]}];
w[122] = [{"introduced_in": 1, "name": "Mr. Mime", "weight": 545, "hp": 40, "catch_rate": 45, "speed": 90, "types": ["psychic", "fairy"]}];
w[123] = [{"introduced_in": 1, "name": "Scyther", "weight": 560, "hp": 70, "catch_rate": 45, "speed": 105, "types": ["bug", "flying"]}];
w[124] = [{"introduced_in": 1, "name": "Jynx", "weight": 406, "hp": 65, "catch_rate": 45, "speed": 95, "types": ["ice", "psychic"]}];
w[125] = [{"introduced_in": 1, "name": "Electabuzz", "weight": 300, "hp": 65, "catch_rate": 45, "speed": 105, "types": ["electric"]}];
w[126] = [{"introduced_in": 1, "name": "Magmar", "weight": 445, "hp": 65, "catch_rate": 45, "speed": 93, "types": ["fire"]}];
w[127] = [{"introduced_in": 1, "name": "Pinsir", "weight": 550, "hp": 65, "catch_rate": 45, "speed": 85, "types": ["bug"]}, {"introduced_in": 15, "name": "Mega Pinsir", "weight": 590, "hp": 65, "catch_rate": 45, "speed": 105, "types": ["bug", "flying"]}];
w[128] = [{"introduced_in": 1, "name": "Tauros", "weight": 884, "hp": 75, "catch_rate": 45, "speed": 110, "types": ["normal"]}];
w[129] = [{"introduced_in": 1, "name": "Magikarp", "weight": 100, "hp": 20, "catch_rate": 255, "speed": 80, "types": ["water"]}];
w[130] = [{"introduced_in": 1, "name": "Gyarados", "weight": 2350, "hp": 95, "catch_rate": 45, "speed": 81, "types": ["water", "flying"]}, {"introduced_in": 15, "name": "Mega Gyarados", "weight": 3050, "hp": 95, "catch_rate": 45, "speed": 81, "types": ["water", "dark"]}];
w[131] = [{"introduced_in": 1, "name": "Lapras", "weight": 2200, "hp": 130, "catch_rate": 45, "speed": 60, "types": ["water", "ice"]}];
w[132] = [{"introduced_in": 1, "name": "Ditto", "weight": 40, "hp": 48, "catch_rate": 35, "speed": 48, "types": ["normal"]}];
w[133] = [{"introduced_in": 1, "name": "Eevee", "weight": 65, "hp": 55, "catch_rate": 45, "speed": 55, "types": ["normal"]}];
w[134] = [{"introduced_in": 1, "name": "Vaporeon", "weight": 290, "hp": 130, "catch_rate": 45, "speed": 65, "types": ["water"]}];
w[135] = [{"introduced_in": 1, "name": "Jolteon", "weight": 245, "hp": 65, "catch_rate": 45, "speed": 130, "types": ["electric"]}];
w[136] = [{"introduced_in": 1, "name": "Flareon", "weight": 250, "hp": 65, "catch_rate": 45, "speed": 65, "types": ["fire"]}];
w[137] = [{"introduced_in": 1, "name": "Porygon", "weight": 365, "hp": 65, "catch_rate": 45, "speed": 40, "types": ["normal"]}];
w[138] = [{"introduced_in": 1, "name": "Omanyte", "weight": 75, "hp": 35, "catch_rate": 45, "speed": 35, "types": ["rock", "water"]}];
w[139] = [{"introduced_in": 1, "name": "Omastar", "weight": 350, "hp": 70, "catch_rate": 45, "speed": 55, "types": ["rock", "water"]}];
w[140] = [{"introduced_in": 1, "name": "Kabuto", "weight": 115, "hp": 30, "catch_rate": 45, "speed": 55, "types": ["rock", "water"]}];
w[141] = [{"introduced_in": 1, "name": "Kabutops", "weight": 405, "hp": 60, "catch_rate": 45, "speed": 80, "types": ["rock", "water"]}];
w[142] = [{"introduced_in": 1, "name": "Aerodactyl", "weight": 590, "hp": 80, "catch_rate": 45, "speed": 130, "types": ["rock", "flying"]}, {"introduced_in": 15, "name": "Mega Aerodactyl", "weight": 790, "hp": 80, "catch_rate": 45, "speed": 150, "types": ["rock", "flying"]}];
w[143] = [{"introduced_in": 1, "name": "Snorlax", "weight": 4600, "hp": 160, "catch_rate": 25, "speed": 30, "types": ["normal"]}];
w[144] = [{"introduced_in": 1, "name": "Articuno", "weight": 554, "hp": 90, "catch_rate": 3, "speed": 85, "types": ["ice", "flying"]}];
w[145] = [{"introduced_in": 1, "name": "Zapdos", "weight": 526, "hp": 90, "catch_rate": 3, "speed": 100, "types": ["electric", "flying"]}];
w[146] = [{"introduced_in": 1, "name": "Moltres", "weight": 600, "hp": 90, "catch_rate": 3, "speed": 90, "types": ["fire", "flying"]}];
w[147] = [{"introduced_in": 1, "name": "Dratini", "weight": 33, "hp": 41, "catch_rate": 45, "speed": 50, "types": ["dragon"]}];
w[148] = [{"introduced_in": 1, "name": "Dragonair", "weight": 165, "hp": 61, "catch_rate": 45, "speed": 70, "types": ["dragon"]}];
w[149] = [{"introduced_in": 1, "name": "Dragonite", "weight": 2100, "hp": 91, "catch_rate": 45, "speed": 80, "types": ["dragon", "flying"]}];
w[150] = [{"introduced_in": 1, "name": "Mewtwo", "weight": 1220, "hp": 106, "catch_rate": 3, "speed": 130, "types": ["psychic"]}, {"introduced_in": 15, "name": "Mega Mewtwo X", "weight": 1270, "hp": 106, "catch_rate": 3, "speed": 130, "types": ["psychic", "fighting"]}, {"introduced_in": 15, "name": "Mega Mewtwo Y", "weight": 330, "hp": 106, "catch_rate": 3, "speed": 140, "types": ["psychic"]}];
w[151] = [{"introduced_in": 1, "name": "Mew", "weight": 40, "hp": 100, "catch_rate": 45, "speed": 100, "types": ["psychic"]}];
w[152] = [{"introduced_in": 3, "name": "Chikorita", "weight": 64, "hp": 45, "catch_rate": 45, "speed": 45, "types": ["grass"]}];
w[153] = [{"introduced_in": 3, "name": "Bayleef", "weight": 158, "hp": 60, "catch_rate": 45, "speed": 60, "types": ["grass"]}];
w[154] = [{"introduced_in": 3, "name": "Meganium", "weight": 1005, "hp": 80, "catch_rate": 45, "speed": 80, "types": ["grass"]}];
w[155] = [{"introduced_in": 3, "name": "Cyndaquil", "weight": 79, "hp": 39, "catch_rate": 45, "speed": 65, "types": ["fire"]}];
w[156] = [{"introduced_in": 3, "name": "Quilava", "weight": 190, "hp": 58, "catch_rate": 45, "speed": 80, "types": ["fire"]}];
w[157] = [{"introduced_in": 3, "name": "Typhlosion", "weight": 795, "hp": 78, "catch_rate": 45, "speed": 100, "types": ["fire"]}];
w[158] = [{"introduced_in": 3, "name": "Totodile", "weight": 95, "hp": 50, "catch_rate": 45, "speed": 43, "types": ["water"]}];
w[159] = [{"introduced_in": 3, "name": "Croconaw", "weight": 250, "hp": 65, "catch_rate": 45, "speed": 58, "types": ["water"]}];
w[160] = [{"introduced_in": 3, "name": "Feraligatr", "weight": 888, "hp": 85, "catch_rate": 45, "speed": 78, "types": ["water"]}];
w[161] = [{"introduced_in": 3, "name": "Sentret", "weight": 60, "hp": 35, "catch_rate": 255, "speed": 20, "types": ["normal"]}];
w[162] = [{"introduced_in": 3, "name": "Furret", "weight": 325, "hp": 85, "catch_rate": 90, "speed": 90, "types": ["normal"]}];
w[163] = [{"introduced_in": 3, "name": "Hoothoot", "weight": 212, "hp": 60, "catch_rate": 255, "speed": 50, "types": ["normal", "flying"]}];
w[164] = [{"introduced_in": 3, "name": "Noctowl", "weight": 408, "hp": 100, "catch_rate": 90, "speed": 70, "types": ["normal", "flying"]}];
w[165] = [{"introduced_in": 3, "name": "Ledyba", "weight": 108, "hp": 40, "catch_rate": 255, "speed": 55, "types": ["bug", "flying"]}];
w[166] = [{"introduced_in": 3, "name": "Ledian", "weight": 356, "hp": 55, "catch_rate": 90, "speed": 85, "types": ["bug", "flying"]}];
w[167] = [{"introduced_in": 3, "name": "Spinarak", "weight": 85, "hp": 40, "catch_rate": 255, "speed": 30, "types": ["bug", "poison"]}];
w[168] = [{"introduced_in": 3, "name": "Ariados", "weight": 335, "hp": 70, "catch_rate": 90, "speed": 40, "types": ["bug", "poison"]}];
w[169] = [{"introduced_in": 3, "name": "Crobat", "weight": 750, "hp": 85, "catch_rate": 90, "speed": 130, "types": ["poison", "flying"]}];
w[170] = [{"introduced_in": 3, "name": "Chinchou", "weight": 120, "hp": 75, "catch_rate": 190, "speed": 67, "types": ["water", "electric"]}];
w[171] = [{"introduced_in": 3, "name": "Lanturn", "weight": 225, "hp": 125, "catch_rate": 75, "speed": 67, "types": ["water", "electric"]}];
w[172] = [{"introduced_in": 3, "name": "Pichu", "weight": 20, "hp": 20, "catch_rate": 190, "speed": 60, "types": ["electric"]}];
w[173] = [{"introduced_in": 3, "name": "Cleffa", "weight": 30, "hp": 50, "catch_rate": 150, "speed": 15, "types": ["fairy"]}];
w[174] = [{"introduced_in": 3, "name": "Igglybuff", "weight": 10, "hp": 90, "catch_rate": 170, "speed": 15, "types": ["normal", "fairy"]}];
w[175] = [{"introduced_in": 3, "name": "Togepi", "weight": 15, "hp": 35, "catch_rate": 190, "speed": 20, "types": ["fairy"]}];
w[176] = [{"introduced_in": 3, "name": "Togetic", "weight": 32, "hp": 55, "catch_rate": 75, "speed": 40, "types": ["fairy", "flying"]}];
w[177] = [{"introduced_in": 3, "name": "Natu", "weight": 20, "hp": 40, "catch_rate": 190, "speed": 70, "types": ["psychic", "flying"]}];
w[178] = [{"introduced_in": 3, "name": "Xatu", "weight": 150, "hp": 65, "catch_rate": 75, "speed": 95, "types": ["psychic", "flying"]}];
w[179] = [{"introduced_in": 3, "name": "Mareep", "weight": 78, "hp": 55, "catch_rate": 235, "speed": 35, "types": ["electric"]}];
w[180] = [{"introduced_in": 3, "name": "Flaaffy", "weight": 133, "hp": 70, "catch_rate": 120, "speed": 45, "types": ["electric"]}];
w[181] = [{"introduced_in": 3, "name": "Ampharos", "weight": 615, "hp": 90, "catch_rate": 45, "speed": 55, "types": ["electric"]}, {"introduced_in": 15, "name": "Mega Ampharos", "weight": 615, "hp": 90, "catch_rate": 45, "speed": 45, "types": ["electric", "dragon"]}];
w[182] = [{"introduced_in": 3, "name": "Bellossom", "weight": 58, "hp": 75, "catch_rate": 45, "speed": 50, "types": ["grass"]}];
w[183] = [{"introduced_in": 3, "name": "Marill", "weight": 85, "hp": 70, "catch_rate": 190, "speed": 40, "types": ["water", "fairy"]}];
w[184] = [{"introduced_in": 3, "name": "Azumarill", "weight": 285, "hp": 100, "catch_rate": 75, "speed": 50, "types": ["water", "fairy"]}];
w[185] = [{"introduced_in": 3, "name": "Sudowoodo", "weight": 380, "hp": 70, "catch_rate": 65, "speed": 30, "types": ["rock"]}];
w[186] = [{"introduced_in": 3, "name": "Politoed", "weight": 339, "hp": 90, "catch_rate": 45, "speed": 70, "types": ["water"]}];
w[187] = [{"introduced_in": 3, "name": "Hoppip", "weight": 5, "hp": 35, "catch_rate": 255, "speed": 50, "types": ["grass", "flying"]}];
w[188] = [{"introduced_in": 3, "name": "Skiploom", "weight": 10, "hp": 55, "catch_rate": 120, "speed": 80, "types": ["grass", "flying"]}];
w[189] = [{"introduced_in": 3, "name": "Jumpluff", "weight": 30, "hp": 75, "catch_rate": 45, "speed": 110, "types": ["grass", "flying"]}];
w[190] = [{"introduced_in": 3, "name": "Aipom", "weight": 115, "hp": 55, "catch_rate": 45, "speed": 85, "types": ["normal"]}];
w[191] = [{"introduced_in": 3, "name": "Sunkern", "weight": 18, "hp": 30, "catch_rate": 235, "speed": 30, "types": ["grass"]}];
w[192] = [{"introduced_in": 3, "name": "Sunflora", "weight": 85, "hp": 75, "catch_rate": 120, "speed": 30, "types": ["grass"]}];
w[193] = [{"introduced_in": 3, "name": "Yanma", "weight": 380, "hp": 65, "catch_rate": 75, "speed": 95, "types": ["bug", "flying"]}];
w[194] = [{"introduced_in": 3, "name": "Wooper", "weight": 85, "hp": 55, "catch_rate": 255, "speed": 15, "types": ["water", "ground"]}];
w[195] = [{"introduced_in": 3, "name": "Quagsire", "weight": 750, "hp": 95, "catch_rate": 90, "speed": 35, "types": ["water", "ground"]}];
w[196] = [{"introduced_in": 3, "name": "Espeon", "weight": 265, "hp": 65, "catch_rate": 45, "speed": 110, "types": ["psychic"]}];
w[197] = [{"introduced_in": 3, "name": "Umbreon", "weight": 270, "hp": 95, "catch_rate": 45, "speed": 65, "types": ["dark"]}];
w[198] = [{"introduced_in": 3, "name": "Murkrow", "weight": 21, "hp": 60, "catch_rate": 30, "speed": 91, "types": ["dark", "flying"]}];
w[199] = [{"introduced_in": 3, "name": "Slowking", "weight": 795, "hp": 95, "catch_rate": 70, "speed": 30, "types": ["water", "psychic"]}];
w[200] = [{"introduced_in": 3, "name": "Misdreavus", "weight": 10, "hp": 60, "catch_rate": 45, "speed": 85, "types": ["ghost"]}];
w[201] = [{"introduced_in": 3, "name": "Unown", "weight": 50, "hp": 48, "catch_rate": 225, "speed": 48, "types": ["psychic"]}];
w[202] = [{"introduced_in": 3, "name": "Wobbuffet", "weight": 285, "hp": 190, "catch_rate": 45, "speed": 33, "types": ["psychic"]}];
w[203] = [{"introduced_in": 3, "name": "Girafarig", "weight": 415, "hp": 70, "catch_rate": 60, "speed": 85, "types": ["normal", "psychic"]}];
w[204] = [{"introduced_in": 3, "name": "Pineco", "weight": 72, "hp": 50, "catch_rate": 190, "speed": 15, "types": ["bug"]}];
w[205] = [{"introduced_in": 3, "name": "Forretress", "weight": 1258, "hp": 75, "catch_rate": 75, "speed": 40, "types": ["bug", "steel"]}];
w[206] = [{"introduced_in": 3, "name": "Dunsparce", "weight": 140, "hp": 100, "catch_rate": 190, "speed": 45, "types": ["normal"]}];
w[207] = [{"introduced_in": 3, "name": "Gligar", "weight": 648, "hp": 65, "catch_rate": 60, "speed": 85, "types": ["ground", "flying"]}];
w[208] = [{"introduced_in": 3, "name": "Steelix", "weight": 4000, "hp": 75, "catch_rate": 25, "speed": 30, "types": ["steel", "ground"]}, {"introduced_in": 16, "name": "Mega Steelix", "weight": 7400, "hp": 75, "catch_rate": 25, "speed": 30, "types": ["steel", "ground"]}];
w[209] = [{"introduced_in": 3, "name": "Snubbull", "weight": 78, "hp": 60, "catch_rate": 190, "speed": 30, "types": ["fairy"]}];
w[210] = [{"introduced_in": 3, "name": "Granbull", "weight": 487, "hp": 90, "catch_rate": 75, "speed": 45, "types": ["fairy"]}];
w[211] = [{"introduced_in": 3, "name": "Qwilfish", "weight": 39, "hp": 65, "catch_rate": 45, "speed": 85, "types": ["water", "poison"]}];
w[212] = [{"introduced_in": 3, "name": "Scizor", "weight": 1180, "hp": 70, "catch_rate": 25, "speed": 65, "types": ["bug", "steel"]}, {"introduced_in": 15, "name": "Mega Scizor", "weight": 1250, "hp": 70, "catch_rate": 25, "speed": 75, "types": ["bug", "steel"]}];
w[213] = [{"introduced_in": 3, "name": "Shuckle", "weight": 205, "hp": 20, "catch_rate": 190, "speed": 5, "types": ["bug", "rock"]}];
w[214] = [{"introduced_in": 3, "name": "Heracross", "weight": 540, "hp": 80, "catch_rate": 45, "speed": 85, "types": ["bug", "fighting"]}, {"introduced_in": 15, "name": "Mega Heracross", "weight": 625, "hp": 80, "catch_rate": 45, "speed": 75, "types": ["bug", "fighting"]}];
w[215] = [{"introduced_in": 3, "name": "Sneasel", "weight": 280, "hp": 55, "catch_rate": 60, "speed": 115, "types": ["dark", "ice"]}];
w[216] = [{"introduced_in": 3, "name": "Teddiursa", "weight": 88, "hp": 60, "catch_rate": 120, "speed": 40, "types": ["normal"]}];
w[217] = [{"introduced_in": 3, "name": "Ursaring", "weight": 1258, "hp": 90, "catch_rate": 60, "speed": 55, "types": ["normal"]}];
w[218] = [{"introduced_in": 3, "name": "Slugma", "weight": 350, "hp": 40, "catch_rate": 190, "speed": 20, "types": ["fire"]}];
w[219] = [{"introduced_in": 3, "name": "Magcargo", "weight": 550, "hp": 60, "catch_rate": 75, "speed": 30, "types": ["fire", "rock"]}];
w[220] = [{"introduced_in": 3, "name": "Swinub", "weight": 65, "hp": 50, "catch_rate": 225, "speed": 50, "types": ["ice", "ground"]}];
w[221] = [{"introduced_in": 3, "name": "Piloswine", "weight": 558, "hp": 100, "catch_rate": 75, "speed": 50, "types": ["ice", "ground"]}];
w[222] = [{"introduced_in": 3, "name": "Corsola", "weight": 50, "hp": 65, "catch_rate": 60, "speed": 35, "types": ["water", "rock"]}];
w[223] = [{"introduced_in": 3, "name": "Remoraid", "weight": 120, "hp": 35, "catch_rate": 190, "speed": 65, "types": ["water"]}];
w[224] = [{"introduced_in": 3, "name": "Octillery", "weight": 285, "hp": 75, "catch_rate": 75, "speed": 45, "types": ["water"]}];
w[225] = [{"introduced_in": 3, "name": "Delibird", "weight": 160, "hp": 45, "catch_rate": 45, "speed": 75, "types": ["ice", "flying"]}];
w[226] = [{"introduced_in": 3, "name": "Mantine", "weight": 2200, "hp": 85, "catch_rate": 25, "speed": 70, "types": ["water", "flying"]}];
w[227] = [{"introduced_in": 3, "name": "Skarmory", "weight": 505, "hp": 65, "catch_rate": 25, "speed": 70, "types": ["steel", "flying"]}];
w[228] = [{"introduced_in": 3, "name": "Houndour", "weight": 108, "hp": 45, "catch_rate": 120, "speed": 65, "types": ["dark", "fire"]}];
w[229] = [{"introduced_in": 3, "name": "Houndoom", "weight": 350, "hp": 75, "catch_rate": 45, "speed": 95, "types": ["dark", "fire"]}, {"introduced_in": 15, "name": "Mega Houndoom", "weight": 495, "hp": 75, "catch_rate": 45, "speed": 115, "types": ["dark", "fire"]}];
w[230] = [{"introduced_in": 3, "name": "Kingdra", "weight": 1520, "hp": 75, "catch_rate": 45, "speed": 85, "types": ["water", "dragon"]}];
w[231] = [{"introduced_in": 3, "name": "Phanpy", "weight": 335, "hp": 90, "catch_rate": 120, "speed": 40, "types": ["ground"]}];
w[232] = [{"introduced_in": 3, "name": "Donphan", "weight": 1200, "hp": 90, "catch_rate": 60, "speed": 50, "types": ["ground"]}];
w[233] = [{"introduced_in": 3, "name": "Porygon2", "weight": 325, "hp": 85, "catch_rate": 45, "speed": 60, "types": ["normal"]}];
w[234] = [{"introduced_in": 3, "name": "Stantler", "weight": 712, "hp": 73, "catch_rate": 45, "speed": 85, "types": ["normal"]}];
w[235] = [{"introduced_in": 3, "name": "Smeargle", "weight": 580, "hp": 55, "catch_rate": 45, "speed": 75, "types": ["normal"]}];
w[236] = [{"introduced_in": 3, "name": "Tyrogue", "weight": 210, "hp": 35, "catch_rate": 75, "speed": 35, "types": ["fighting"]}];
w[237] = [{"introduced_in": 3, "name": "Hitmontop", "weight": 480, "hp": 50, "catch_rate": 45, "speed": 70, "types": ["fighting"]}];
w[238] = [{"introduced_in": 3, "name": "Smoochum", "weight": 60, "hp": 45, "catch_rate": 45, "speed": 65, "types": ["ice", "psychic"]}];
w[239] = [{"introduced_in": 3, "name": "Elekid", "weight": 235, "hp": 45, "catch_rate": 45, "speed": 95, "types": ["electric"]}];
w[240] = [{"introduced_in": 3, "name": "Magby", "weight": 214, "hp": 45, "catch_rate": 45, "speed": 83, "types": ["fire"]}];
w[241] = [{"introduced_in": 3, "name": "Miltank", "weight": 755, "hp": 95, "catch_rate": 45, "speed": 100, "types": ["normal"]}];
w[242] = [{"introduced_in": 3, "name": "Blissey", "weight": 468, "hp": 255, "catch_rate": 30, "speed": 55, "types": ["normal"]}];
w[243] = [{"introduced_in": 3, "name": "Raikou", "weight": 1780, "hp": 90, "catch_rate": 3, "speed": 115, "types": ["electric"]}];
w[244] = [{"introduced_in": 3, "name": "Entei", "weight": 1980, "hp": 115, "catch_rate": 3, "speed": 100, "types": ["fire"]}];
w[245] = [{"introduced_in": 3, "name": "Suicune", "weight": 1870, "hp": 100, "catch_rate": 3, "speed": 85, "types": ["water"]}];
w[246] = [{"introduced_in": 3, "name": "Larvitar", "weight": 720, "hp": 50, "catch_rate": 45, "speed": 41, "types": ["rock", "ground"]}];
w[247] = [{"introduced_in": 3, "name": "Pupitar", "weight": 1520, "hp": 70, "catch_rate": 45, "speed": 51, "types": ["rock", "ground"]}];
w[248] = [{"introduced_in": 3, "name": "Tyranitar", "weight": 2020, "hp": 100, "catch_rate": 45, "speed": 61, "types": ["rock", "dark"]}, {"introduced_in": 15, "name": "Mega Tyranitar", "weight": 2550, "hp": 100, "catch_rate": 45, "speed": 71, "types": ["rock", "dark"]}];
w[249] = [{"introduced_in": 3, "name": "Lugia", "weight": 2160, "hp": 106, "catch_rate": 3, "speed": 110, "types": ["psychic", "flying"]}];
w[250] = [{"introduced_in": 3, "name": "Ho-Oh", "weight": 1990, "hp": 106, "catch_rate": 3, "speed": 90, "types": ["fire", "flying"]}];
w[251] = [{"introduced_in": 3, "name": "Celebi", "weight": 50, "hp": 100, "catch_rate": 45, "speed": 100, "types": ["psychic", "grass"]}];
w[252] = [{"introduced_in": 5, "name": "Treecko", "weight": 50, "hp": 40, "catch_rate": 45, "speed": 70, "types": ["grass"]}];
w[253] = [{"introduced_in": 5, "name": "Grovyle", "weight": 216, "hp": 50, "catch_rate": 45, "speed": 95, "types": ["grass"]}];
w[254] = [{"introduced_in": 5, "name": "Sceptile", "weight": 522, "hp": 70, "catch_rate": 45, "speed": 120, "types": ["grass"]}, {"introduced_in": 16, "name": "Mega Sceptile", "weight": 552, "hp": 70, "catch_rate": 45, "speed": 145, "types": ["grass", "dragon"]}];
w[255] = [{"introduced_in": 5, "name": "Torchic", "weight": 25, "hp": 45, "catch_rate": 45, "speed": 45, "types": ["fire"]}];
w[256] = [{"introduced_in": 5, "name": "Combusken", "weight": 195, "hp": 60, "catch_rate": 45, "speed": 55, "types": ["fire", "fighting"]}];
w[257] = [{"introduced_in": 5, "name": "Blaziken", "weight": 520, "hp": 80, "catch_rate": 45, "speed": 80, "types": ["fire", "fighting"]}, {"introduced_in": 15, "name": "Mega Blaziken", "weight": 520, "hp": 80, "catch_rate": 45, "speed": 100, "types": ["fire", "fighting"]}];
w[258] = [{"introduced_in": 5, "name": "Mudkip", "weight": 76, "hp": 50, "catch_rate": 45, "speed": 40, "types": ["water"]}];
w[259] = [{"introduced_in": 5, "name": "Marshtomp", "weight": 280, "hp": 70, "catch_rate": 45, "speed": 50, "types": ["water", "ground"]}];
w[260] = [{"introduced_in": 5, "name": "Swampert", "weight": 819, "hp": 100, "catch_rate": 45, "speed": 60, "types": ["water", "ground"]}, {"introduced_in": 16, "name": "Mega Swampert", "weight": 1020, "hp": 100, "catch_rate": 45, "speed": 70, "types": ["water", "ground"]}];
w[261] = [{"introduced_in": 5, "name": "Poochyena", "weight": 136, "hp": 35, "catch_rate": 255, "speed": 35, "types": ["dark"]}];
w[262] = [{"introduced_in": 5, "name": "Mightyena", "weight": 370, "hp": 70, "catch_rate": 127, "speed": 70, "types": ["dark"]}];
w[263] = [{"introduced_in": 5, "name": "Zigzagoon", "weight": 175, "hp": 38, "catch_rate": 255, "speed": 60, "types": ["normal"]}];
w[264] = [{"introduced_in": 5, "name": "Linoone", "weight": 325, "hp": 78, "catch_rate": 90, "speed": 100, "types": ["normal"]}];
w[265] = [{"introduced_in": 5, "name": "Wurmple", "weight": 36, "hp": 45, "catch_rate": 255, "speed": 20, "types": ["bug"]}];
w[266] = [{"introduced_in": 5, "name": "Silcoon", "weight": 100, "hp": 50, "catch_rate": 120, "speed": 15, "types": ["bug"]}];
w[267] = [{"introduced_in": 5, "name": "Beautifly", "weight": 284, "hp": 60, "catch_rate": 45, "speed": 65, "types": ["bug", "flying"]}];
w[268] = [{"introduced_in": 5, "name": "Cascoon", "weight": 115, "hp": 50, "catch_rate": 120, "speed": 15, "types": ["bug"]}];
w[269] = [{"introduced_in": 5, "name": "Dustox", "weight": 316, "hp": 60, "catch_rate": 45, "speed": 65, "types": ["bug", "poison"]}];
w[270] = [{"introduced_in": 5, "name": "Lotad", "weight": 26, "hp": 40, "catch_rate": 255, "speed": 30, "types": ["water", "grass"]}];
w[271] = [{"introduced_in": 5, "name": "Lombre", "weight": 325, "hp": 60, "catch_rate": 120, "speed": 50, "types": ["water", "grass"]}];
w[272] = [{"introduced_in": 5, "name": "Ludicolo", "weight": 550, "hp": 80, "catch_rate": 45, "speed": 70, "types": ["water", "grass"]}];
w[273] = [{"introduced_in": 5, "name": "Seedot", "weight": 40, "hp": 40, "catch_rate": 255, "speed": 30, "types": ["grass"]}];
w[274] = [{"introduced_in": 5, "name": "Nuzleaf", "weight": 280, "hp": 70, "catch_rate": 120, "speed": 60, "types": ["grass", "dark"]}];
w[275] = [{"introduced_in": 5, "name": "Shiftry", "weight": 596, "hp": 90, "catch_rate": 45, "speed": 80, "types": ["grass", "dark"]}];
w[276] = [{"introduced_in": 5, "name": "Taillow", "weight": 23, "hp": 40, "catch_rate": 200, "speed": 85, "types": ["normal", "flying"]}];
w[277] = [{"introduced_in": 5, "name": "Swellow", "weight": 198, "hp": 60, "catch_rate": 45, "speed": 125, "types": ["normal", "flying"]}];
w[278] = [{"introduced_in": 5, "name": "Wingull", "weight": 95, "hp": 40, "catch_rate": 190, "speed": 85, "types": ["water", "flying"]}];
w[279] = [{"introduced_in": 5, "name": "Pelipper", "weight": 280, "hp": 60, "catch_rate": 45, "speed": 65, "types": ["water", "flying"]}];
w[280] = [{"introduced_in": 5, "name": "Ralts", "weight": 66, "hp": 28, "catch_rate": 235, "speed": 40, "types": ["psychic", "fairy"]}];
w[281] = [{"introduced_in": 5, "name": "Kirlia", "weight": 202, "hp": 38, "catch_rate": 120, "speed": 50, "types": ["psychic", "fairy"]}];
w[282] = [{"introduced_in": 5, "name": "Gardevoir", "weight": 484, "hp": 68, "catch_rate": 45, "speed": 80, "types": ["psychic", "fairy"]}, {"introduced_in": 15, "name": "Mega Gardevoir", "weight": 484, "hp": 68, "catch_rate": 45, "speed": 100, "types": ["psychic", "fairy"]}];
w[283] = [{"introduced_in": 5, "name": "Surskit", "weight": 17, "hp": 40, "catch_rate": 200, "speed": 65, "types": ["bug", "water"]}];
w[284] = [{"introduced_in": 5, "name": "Masquerain", "weight": 36, "hp": 70, "catch_rate": 75, "speed": 80, "types": ["bug", "flying"]}];
w[285] = [{"introduced_in": 5, "name": "Shroomish", "weight": 45, "hp": 60, "catch_rate": 255, "speed": 35, "types": ["grass"]}];
w[286] = [{"introduced_in": 5, "name": "Breloom", "weight": 392, "hp": 60, "catch_rate": 90, "speed": 70, "types": ["grass", "fighting"]}];
w[287] = [{"introduced_in": 5, "name": "Slakoth", "weight": 240, "hp": 60, "catch_rate": 255, "speed": 30, "types": ["normal"]}];
w[288] = [{"introduced_in": 5, "name": "Vigoroth", "weight": 465, "hp": 80, "catch_rate": 120, "speed": 90, "types": ["normal"]}];
w[289] = [{"introduced_in": 5, "name": "Slaking", "weight": 1305, "hp": 150, "catch_rate": 45, "speed": 100, "types": ["normal"]}];
w[290] = [{"introduced_in": 5, "name": "Nincada", "weight": 55, "hp": 31, "catch_rate": 255, "speed": 40, "types": ["bug", "ground"]}];
w[291] = [{"introduced_in": 5, "name": "Ninjask", "weight": 120, "hp": 61, "catch_rate": 120, "speed": 160, "types": ["bug", "flying"]}];
w[292] = [{"introduced_in": 5, "name": "Shedinja", "weight": 12, "hp": 1, "catch_rate": 45, "speed": 40, "types": ["bug", "ghost"]}];
w[293] = [{"introduced_in": 5, "name": "Whismur", "weight": 163, "hp": 64, "catch_rate": 190, "speed": 28, "types": ["normal"]}];
w[294] = [{"introduced_in": 5, "name": "Loudred", "weight": 405, "hp": 84, "catch_rate": 120, "speed": 48, "types": ["normal"]}];
w[295] = [{"introduced_in": 5, "name": "Exploud", "weight": 840, "hp": 104, "catch_rate": 45, "speed": 68, "types": ["normal"]}];
w[296] = [{"introduced_in": 5, "name": "Makuhita", "weight": 864, "hp": 72, "catch_rate": 180, "speed": 25, "types": ["fighting"]}];
w[297] = [{"introduced_in": 5, "name": "Hariyama", "weight": 2538, "hp": 144, "catch_rate": 200, "speed": 50, "types": ["fighting"]}];
w[298] = [{"introduced_in": 5, "name": "Azurill", "weight": 20, "hp": 50, "catch_rate": 150, "speed": 20, "types": ["normal", "fairy"]}];
w[299] = [{"introduced_in": 5, "name": "Nosepass", "weight": 970, "hp": 30, "catch_rate": 255, "speed": 30, "types": ["rock"]}];
w[300] = [{"introduced_in": 5, "name": "Skitty", "weight": 110, "hp": 50, "catch_rate": 255, "speed": 50, "types": ["normal"]}];
w[301] = [{"introduced_in": 5, "name": "Delcatty", "weight": 326, "hp": 70, "catch_rate": 60, "speed": 90, "types": ["normal"]}];
w[302] = [{"introduced_in": 5, "name": "Sableye", "weight": 110, "hp": 50, "catch_rate": 45, "speed": 50, "types": ["dark", "ghost"]}, {"introduced_in": 16, "name": "Mega Sableye", "weight": 1610, "hp": 50, "catch_rate": 45, "speed": 20, "types": ["dark", "ghost"]}];
w[303] = [{"introduced_in": 5, "name": "Mawile", "weight": 115, "hp": 50, "catch_rate": 45, "speed": 50, "types": ["steel", "fairy"]}, {"introduced_in": 15, "name": "Mega Mawile", "weight": 235, "hp": 50, "catch_rate": 45, "speed": 50, "types": ["steel", "fairy"]}];
w[304] = [{"introduced_in": 5, "name": "Aron", "weight": 600, "hp": 50, "catch_rate": 180, "speed": 30, "types": ["steel", "rock"]}];
w[305] = [{"introduced_in": 5, "name": "Lairon", "weight": 1200, "hp": 60, "catch_rate": 90, "speed": 40, "types": ["steel", "rock"]}];
w[306] = [{"introduced_in": 5, "name": "Aggron", "weight": 3600, "hp": 70, "catch_rate": 45, "speed": 50, "types": ["steel", "rock"]}, {"introduced_in": 15, "name": "Mega Aggron", "weight": 3950, "hp": 70, "catch_rate": 45, "speed": 50, "types": ["steel"]}];
w[307] = [{"introduced_in": 5, "name": "Meditite", "weight": 112, "hp": 30, "catch_rate": 180, "speed": 60, "types": ["fighting", "psychic"]}];
w[308] = [{"introduced_in": 5, "name": "Medicham", "weight": 315, "hp": 60, "catch_rate": 90, "speed": 80, "types": ["fighting", "psychic"]}, {"introduced_in": 15, "name": "Mega Medicham", "weight": 315, "hp": 60, "catch_rate": 90, "speed": 100, "types": ["fighting", "psychic"]}];
w[309] = [{"introduced_in": 5, "name": "Electrike", "weight": 152, "hp": 40, "catch_rate": 120, "speed": 65, "types": ["electric"]}];
w[310] = [{"introduced_in": 5, "name": "Manectric", "weight": 402, "hp": 70, "catch_rate": 45, "speed": 105, "types": ["electric"]}, {"introduced_in": 15, "name": "Mega Manectric", "weight": 440, "hp": 70, "catch_rate": 45, "speed": 135, "types": ["electric"]}];
w[311] = [{"introduced_in": 5, "name": "Plusle", "weight": 42, "hp": 60, "catch_rate": 200, "speed": 95, "types": ["electric"]}];
w[312] = [{"introduced_in": 5, "name": "Minun", "weight": 42, "hp": 60, "catch_rate": 200, "speed": 95, "types": ["electric"]}];
w[313] = [{"introduced_in": 5, "name": "Volbeat", "weight": 177, "hp": 65, "catch_rate": 150, "speed": 85, "types": ["bug"]}];
w[314] = [{"introduced_in": 5, "name": "Illumise", "weight": 177, "hp": 65, "catch_rate": 150, "speed": 85, "types": ["bug"]}];
w[315] = [{"introduced_in": 5, "name": "Roselia", "weight": 20, "hp": 50, "catch_rate": 150, "speed": 65, "types": ["grass", "poison"]}];
w[316] = [{"introduced_in": 5, "name": "Gulpin", "weight": 103, "hp": 70, "catch_rate": 225, "speed": 40, "types": ["poison"]}];
w[317] = [{"introduced_in": 5, "name": "Swalot", "weight": 800, "hp": 100, "catch_rate": 75, "speed": 55, "types": ["poison"]}];
w[318] = [{"introduced_in": 5, "name": "Carvanha", "weight": 208, "hp": 45, "catch_rate": 225, "speed": 65, "types": ["water", "dark"]}];
w[319] = [{"introduced_in": 5, "name": "Sharpedo", "weight": 888, "hp": 70, "catch_rate": 60, "speed": 95, "types": ["water", "dark"]}, {"introduced_in": 16, "name": "Mega Sharpedo", "weight": 1303, "hp": 70, "catch_rate": 60, "speed": 105, "types": ["water", "dark"]}];
w[320] = [{"introduced_in": 5, "name": "Wailmer", "weight": 1300, "hp": 130, "catch_rate": 125, "speed": 60, "types": ["water"]}];
w[321] = [{"introduced_in": 5, "name": "Wailord", "weight": 3980, "hp": 170, "catch_rate": 60, "speed": 60, "types": ["water"]}];
w[322] = [{"introduced_in": 5, "name": "Numel", "weight": 240, "hp": 60, "catch_rate": 255, "speed": 35, "types": ["fire", "ground"]}];
w[323] = [{"introduced_in": 5, "name": "Camerupt", "weight": 2200, "hp": 70, "catch_rate": 150, "speed": 40, "types": ["fire", "ground"]}, {"introduced_in": 16, "name": "Mega Camerupt", "weight": 3205, "hp": 70, "catch_rate": 150, "speed": 20, "types": ["fire", "ground"]}];
w[324] = [{"introduced_in": 5, "name": "Torkoal", "weight": 804, "hp": 70, "catch_rate": 90, "speed": 20, "types": ["fire"]}];
w[325] = [{"introduced_in": 5, "name": "Spoink", "weight": 306, "hp": 60, "catch_rate": 255, "speed": 60, "types": ["psychic"]}];
w[326] = [{"introduced_in": 5, "name": "Grumpig", "weight": 715, "hp": 80, "catch_rate": 60, "speed": 80, "types": ["psychic"]}];
w[327] = [{"introduced_in": 5, "name": "Spinda", "weight": 50, "hp": 60, "catch_rate": 255, "speed": 60, "types": ["normal"]}];
w[328] = [{"introduced_in": 5, "name": "Trapinch", "weight": 150, "hp": 45, "catch_rate": 255, "speed": 10, "types": ["ground"]}];
w[329] = [{"introduced_in": 5, "name": "Vibrava", "weight": 153, "hp": 50, "catch_rate": 120, "speed": 70, "types": ["ground", "dragon"]}];
w[330] = [{"introduced_in": 5, "name": "Flygon", "weight": 820, "hp": 80, "catch_rate": 45, "speed": 100, "types": ["ground", "dragon"]}];
w[331] = [{"introduced_in": 5, "name": "Cacnea", "weight": 513, "hp": 50, "catch_rate": 190, "speed": 35, "types": ["grass"]}];
w[332] = [{"introduced_in": 5, "name": "Cacturne", "weight": 774, "hp": 70, "catch_rate": 60, "speed": 55, "types": ["grass", "dark"]}];
w[333] = [{"introduced_in": 5, "name": "Swablu", "weight": 12, "hp": 45, "catch_rate": 255, "speed": 50, "types": ["normal", "flying"]}];
w[334] = [{"introduced_in": 5, "name": "Altaria", "weight": 206, "hp": 75, "catch_rate": 45, "speed": 80, "types": ["dragon", "flying"]}, {"introduced_in": 16, "name": "Mega Altaria", "weight": 206, "hp": 75, "catch_rate": 45, "speed": 80, "types": ["dragon", "fairy"]}];
w[335] = [{"introduced_in": 5, "name": "Zangoose", "weight": 403, "hp": 73, "catch_rate": 90, "speed": 90, "types": ["normal"]}];
w[336] = [{"introduced_in": 5, "name": "Seviper", "weight": 525, "hp": 73, "catch_rate": 90, "speed": 65, "types": ["poison"]}];
w[337] = [{"introduced_in": 5, "name": "Lunatone", "weight": 1680, "hp": 90, "catch_rate": 45, "speed": 70, "types": ["rock", "psychic"]}];
w[338] = [{"introduced_in": 5, "name": "Solrock", "weight": 1540, "hp": 90, "catch_rate": 45, "speed": 70, "types": ["rock", "psychic"]}];
w[339] = [{"introduced_in": 5, "name": "Barboach", "weight": 19, "hp": 50, "catch_rate": 190, "speed": 60, "types": ["water", "ground"]}];
w[340] = [{"introduced_in": 5, "name": "Whiscash", "weight": 236, "hp": 110, "catch_rate": 75, "speed": 60, "types": ["water", "ground"]}];
w[341] = [{"introduced_in": 5, "name": "Corphish", "weight": 115, "hp": 43, "catch_rate": 205, "speed": 35, "types": ["water"]}];
w[342] = [{"introduced_in": 5, "name": "Crawdaunt", "weight": 328, "hp": 63, "catch_rate": 155, "speed": 55, "types": ["water", "dark"]}];
w[343] = [{"introduced_in": 5, "name": "Baltoy", "weight": 215, "hp": 40, "catch_rate": 255, "speed": 55, "types": ["ground", "psychic"]}];
w[344] = [{"introduced_in": 5, "name": "Claydol", "weight": 1080, "hp": 60, "catch_rate": 90, "speed": 75, "types": ["ground", "psychic"]}];
w[345] = [{"introduced_in": 5, "name": "Lileep", "weight": 238, "hp": 66, "catch_rate": 45, "speed": 23, "types": ["rock", "grass"]}];
w[346] = [{"introduced_in": 5, "name": "Cradily", "weight": 604, "hp": 86, "catch_rate": 45, "speed": 43, "types": ["rock", "grass"]}];
w[347] = [{"introduced_in": 5, "name": "Anorith", "weight": 125, "hp": 45, "catch_rate": 45, "speed": 75, "types": ["rock", "bug"]}];
w[348] = [{"introduced_in": 5, "name": "Armaldo", "weight": 682, "hp": 75, "catch_rate": 45, "speed": 45, "types": ["rock", "bug"]}];
w[349] = [{"introduced_in": 5, "name": "Feebas", "weight": 74, "hp": 20, "catch_rate": 255, "speed": 80, "types": ["water"]}];
w[350] = [{"introduced_in": 5, "name": "Milotic", "weight": 1620, "hp": 95, "catch_rate": 60, "speed": 81, "types": ["water"]}];
w[351] = [{"introduced_in": 5, "name": "Castform", "weight": 8, "hp": 70, "catch_rate": 45, "speed": 70, "types": ["normal"]}, {"introduced_in": 5, "name": "Sunny Castform", "weight": 8, "hp": 70, "catch_rate": 45, "speed": 70, "types": ["fire"]}, {"introduced_in": 5, "name": "Rainy Castform", "weight": 8, "hp": 70, "catch_rate": 45, "speed": 70, "types": ["water"]}, {"introduced_in": 5, "name": "Snowy Castform", "weight": 8, "hp": 70, "catch_rate": 45, "speed": 70, "types": ["ice"]}];
w[352] = [{"introduced_in": 5, "name": "Kecleon", "weight": 220, "hp": 60, "catch_rate": 200, "speed": 40, "types": ["normal"]}];
w[353] = [{"introduced_in": 5, "name": "Shuppet", "weight": 23, "hp": 44, "catch_rate": 225, "speed": 45, "types": ["ghost"]}];
w[354] = [{"introduced_in": 5, "name": "Banette", "weight": 125, "hp": 64, "catch_rate": 45, "speed": 65, "types": ["ghost"]}, {"introduced_in": 15, "name": "Mega Banette", "weight": 130, "hp": 64, "catch_rate": 45, "speed": 75, "types": ["ghost"]}];
w[355] = [{"introduced_in": 5, "name": "Duskull", "weight": 150, "hp": 20, "catch_rate": 190, "speed": 25, "types": ["ghost"]}];
w[356] = [{"introduced_in": 5, "name": "Dusclops", "weight": 306, "hp": 40, "catch_rate": 90, "speed": 25, "types": ["ghost"]}];
w[357] = [{"introduced_in": 5, "name": "Tropius", "weight": 1000, "hp": 99, "catch_rate": 200, "speed": 51, "types": ["grass", "flying"]}];
w[358] = [{"introduced_in": 5, "name": "Chimecho", "weight": 10, "hp": 75, "catch_rate": 45, "speed": 65, "types": ["psychic"]}];
w[359] = [{"introduced_in": 5, "name": "Absol", "weight": 470, "hp": 65, "catch_rate": 30, "speed": 75, "types": ["dark"]}, {"introduced_in": 15, "name": "Mega Absol", "weight": 490, "hp": 65, "catch_rate": 30, "speed": 115, "types": ["dark"]}];
w[360] = [{"introduced_in": 5, "name": "Wynaut", "weight": 140, "hp": 95, "catch_rate": 125, "speed": 23, "types": ["psychic"]}];
w[361] = [{"introduced_in": 5, "name": "Snorunt", "weight": 168, "hp": 50, "catch_rate": 190, "speed": 50, "types": ["ice"]}];
w[362] = [{"introduced_in": 5, "name": "Glalie", "weight": 2565, "hp": 80, "catch_rate": 75, "speed": 80, "types": ["ice"]}, {"introduced_in": 16, "name": "Mega Glalie", "weight": 3502, "hp": 80, "catch_rate": 75, "speed": 100, "types": ["ice"]}];
w[363] = [{"introduced_in": 5, "name": "Spheal", "weight": 395, "hp": 70, "catch_rate": 255, "speed": 25, "types": ["ice", "water"]}];
w[364] = [{"introduced_in": 5, "name": "Sealeo", "weight": 876, "hp": 90, "catch_rate": 120, "speed": 45, "types": ["ice", "water"]}];
w[365] = [{"introduced_in": 5, "name": "Walrein", "weight": 1506, "hp": 110, "catch_rate": 45, "speed": 65, "types": ["ice", "water"]}];
w[366] = [{"introduced_in": 5, "name": "Clamperl", "weight": 525, "hp": 35, "catch_rate": 255, "speed": 32, "types": ["water"]}];
w[367] = [{"introduced_in": 5, "name": "Huntail", "weight": 270, "hp": 55, "catch_rate": 60, "speed": 52, "types": ["water"]}];
w[368] = [{"introduced_in": 5, "name": "Gorebyss", "weight": 226, "hp": 55, "catch_rate": 60, "speed": 52, "types": ["water"]}];
w[369] = [{"introduced_in": 5, "name": "Relicanth", "weight": 234, "hp": 100, "catch_rate": 25, "speed": 55, "types": ["water", "rock"]}];
w[370] = [{"introduced_in": 5, "name": "Luvdisc", "weight": 87, "hp": 43, "catch_rate": 225, "speed": 97, "types": ["water"]}];
w[371] = [{"introduced_in": 5, "name": "Bagon", "weight": 421, "hp": 45, "catch_rate": 45, "speed": 50, "types": ["dragon"]}];
w[372] = [{"introduced_in": 5, "name": "Shelgon", "weight": 1105, "hp": 65, "catch_rate": 45, "speed": 50, "types": ["dragon"]}];
w[373] = [{"introduced_in": 5, "name": "Salamence", "weight": 1026, "hp": 95, "catch_rate": 45, "speed": 100, "types": ["dragon", "flying"]}, {"introduced_in": 16, "name": "Mega Salamence", "weight": 1126, "hp": 95, "catch_rate": 45, "speed": 120, "types": ["dragon", "flying"]}];
w[374] = [{"introduced_in": 5, "name": "Beldum", "weight": 952, "hp": 40, "catch_rate": 3, "speed": 30, "types": ["steel", "psychic"]}];
w[375] = [{"introduced_in": 5, "name": "Metang", "weight": 2025, "hp": 60, "catch_rate": 3, "speed": 50, "types": ["steel", "psychic"]}];
w[376] = [{"introduced_in": 5, "name": "Metagross", "weight": 5500, "hp": 80, "catch_rate": 3, "speed": 70, "types": ["steel", "psychic"]}, {"introduced_in": 16, "name": "Mega Metagross", "weight": 9429, "hp": 80, "catch_rate": 3, "speed": 110, "types": ["steel", "psychic"]}];
w[377] = [{"introduced_in": 5, "name": "Regirock", "weight": 2300, "hp": 80, "catch_rate": 3, "speed": 50, "types": ["rock"]}];
w[378] = [{"introduced_in": 5, "name": "Regice", "weight": 1750, "hp": 80, "catch_rate": 3, "speed": 50, "types": ["ice"]}];
w[379] = [{"introduced_in": 5, "name": "Registeel", "weight": 2050, "hp": 80, "catch_rate": 3, "speed": 50, "types": ["steel"]}];
w[380] = [{"introduced_in": 5, "name": "Latias", "weight": 400, "hp": 80, "catch_rate": 3, "speed": 110, "types": ["dragon", "psychic"]}, {"introduced_in": 15, "name": "Mega Latias", "weight": 520, "hp": 80, "catch_rate": 3, "speed": 110, "types": ["dragon", "psychic"]}];
w[381] = [{"introduced_in": 5, "name": "Latios", "weight": 600, "hp": 80, "catch_rate": 3, "speed": 110, "types": ["dragon", "psychic"]}, {"introduced_in": 15, "name": "Mega Latios", "weight": 700, "hp": 80, "catch_rate": 3, "speed": 110, "types": ["dragon", "psychic"]}];
w[382] = [{"introduced_in": 5, "name": "Kyogre", "weight": 3520, "hp": 100, "catch_rate": 3, "speed": 90, "types": ["water"]}, {"introduced_in": 16, "name": "Primal Kyogre", "weight": 4300, "hp": 100, "catch_rate": 3, "speed": 90, "types": ["water"]}];
w[383] = [{"introduced_in": 5, "name": "Groudon", "weight": 9500, "hp": 100, "catch_rate": 3, "speed": 90, "types": ["ground"]}, {"introduced_in": 16, "name": "Primal Groudon", "weight": 9997, "hp": 100, "catch_rate": 3, "speed": 90, "types": ["ground", "fire"]}];
w[384] = [{"introduced_in": 5, "name": "Rayquaza", "weight": 2065, "hp": 105, "catch_rate": 45, "speed": 95, "types": ["dragon", "flying"]}, {"introduced_in": 16, "name": "Mega Rayquaza", "weight": 3920, "hp": 105, "catch_rate": 45, "speed": 115, "types": ["dragon", "flying"]}];
w[385] = [{"introduced_in": 5, "name": "Jirachi", "weight": 11, "hp": 100, "catch_rate": 3, "speed": 100, "types": ["steel", "psychic"]}];
w[386] = [{"introduced_in": 5, "name": "Normal Deoxys", "weight": 608, "hp": 50, "catch_rate": 3, "speed": 150, "types": ["psychic"]}, {"introduced_in": 7, "name": "Attack Deoxys", "weight": 608, "hp": 50, "catch_rate": 3, "speed": 150, "types": ["psychic"]}, {"introduced_in": 7, "name": "Defense Deoxys", "weight": 608, "hp": 50, "catch_rate": 3, "speed": 90, "types": ["psychic"]}, {"introduced_in": 6, "name": "Speed Deoxys", "weight": 608, "hp": 50, "catch_rate": 3, "speed": 180, "types": ["psychic"]}];
w[387] = [{"introduced_in": 8, "name": "Turtwig", "weight": 102, "hp": 55, "catch_rate": 45, "speed": 31, "types": ["grass"]}];
w[388] = [{"introduced_in": 8, "name": "Grotle", "weight": 970, "hp": 75, "catch_rate": 45, "speed": 36, "types": ["grass"]}];
w[389] = [{"introduced_in": 8, "name": "Torterra", "weight": 3100, "hp": 95, "catch_rate": 45, "speed": 56, "types": ["grass", "ground"]}];
w[390] = [{"introduced_in": 8, "name": "Chimchar", "weight": 62, "hp": 44, "catch_rate": 45, "speed": 61, "types": ["fire"]}];
w[391] = [{"introduced_in": 8, "name": "Monferno", "weight": 220, "hp": 64, "catch_rate": 45, "speed": 81, "types": ["fire", "fighting"]}];
w[392] = [{"introduced_in": 8, "name": "Infernape", "weight": 550, "hp": 76, "catch_rate": 45, "speed": 108, "types": ["fire", "fighting"]}];
w[393] = [{"introduced_in": 8, "name": "Piplup", "weight": 52, "hp": 53, "catch_rate": 45, "speed": 40, "types": ["water"]}];
w[394] = [{"introduced_in": 8, "name": "Prinplup", "weight": 230, "hp": 64, "catch_rate": 45, "speed": 50, "types": ["water"]}];
w[395] = [{"introduced_in": 8, "name": "Empoleon", "weight": 845, "hp": 84, "catch_rate": 45, "speed": 60, "types": ["water", "steel"]}];
w[396] = [{"introduced_in": 8, "name": "Starly", "weight": 20, "hp": 40, "catch_rate": 255, "speed": 60, "types": ["normal", "flying"]}];
w[397] = [{"introduced_in": 8, "name": "Staravia", "weight": 155, "hp": 55, "catch_rate": 120, "speed": 80, "types": ["normal", "flying"]}];
w[398] = [{"introduced_in": 8, "name": "Staraptor", "weight": 249, "hp": 85, "catch_rate": 45, "speed": 100, "types": ["normal", "flying"]}];
w[399] = [{"introduced_in": 8, "name": "Bidoof", "weight": 200, "hp": 59, "catch_rate": 255, "speed": 31, "types": ["normal"]}];
w[400] = [{"introduced_in": 8, "name": "Bibarel", "weight": 315, "hp": 79, "catch_rate": 127, "speed": 71, "types": ["normal", "water"]}];
w[401] = [{"introduced_in": 8, "name": "Kricketot", "weight": 22, "hp": 37, "catch_rate": 255, "speed": 25, "types": ["bug"]}];
w[402] = [{"introduced_in": 8, "name": "Kricketune", "weight": 255, "hp": 77, "catch_rate": 45, "speed": 65, "types": ["bug"]}];
w[403] = [{"introduced_in": 8, "name": "Shinx", "weight": 95, "hp": 45, "catch_rate": 235, "speed": 45, "types": ["electric"]}];
w[404] = [{"introduced_in": 8, "name": "Luxio", "weight": 305, "hp": 60, "catch_rate": 120, "speed": 60, "types": ["electric"]}];
w[405] = [{"introduced_in": 8, "name": "Luxray", "weight": 420, "hp": 80, "catch_rate": 45, "speed": 70, "types": ["electric"]}];
w[406] = [{"introduced_in": 8, "name": "Budew", "weight": 12, "hp": 40, "catch_rate": 255, "speed": 55, "types": ["grass", "poison"]}];
w[407] = [{"introduced_in": 8, "name": "Roserade", "weight": 145, "hp": 60, "catch_rate": 75, "speed": 90, "types": ["grass", "poison"]}];
w[408] = [{"introduced_in": 8, "name": "Cranidos", "weight": 315, "hp": 67, "catch_rate": 45, "speed": 58, "types": ["rock"]}];
w[409] = [{"introduced_in": 8, "name": "Rampardos", "weight": 1025, "hp": 97, "catch_rate": 45, "speed": 58, "types": ["rock"]}];
w[410] = [{"introduced_in": 8, "name": "Shieldon", "weight": 570, "hp": 30, "catch_rate": 45, "speed": 30, "types": ["rock", "steel"]}];
w[411] = [{"introduced_in": 8, "name": "Bastiodon", "weight": 1495, "hp": 60, "catch_rate": 45, "speed": 30, "types": ["rock", "steel"]}];
w[412] = [{"introduced_in": 8, "name": "Burmy", "weight": 34, "hp": 40, "catch_rate": 120, "speed": 36, "types": ["bug"]}];
w[413] = [{"introduced_in": 8, "name": "Plant Wormadam", "weight": 65, "hp": 60, "catch_rate": 45, "speed": 36, "types": ["bug", "grass"]}, {"introduced_in": 8, "name": "Sandy Wormadam", "weight": 65, "hp": 60, "catch_rate": 45, "speed": 36, "types": ["bug", "ground"]}, {"introduced_in": 8, "name": "Trash Wormadam", "weight": 65, "hp": 60, "catch_rate": 45, "speed": 36, "types": ["bug", "steel"]}];
w[414] = [{"introduced_in": 8, "name": "Mothim", "weight": 233, "hp": 70, "catch_rate": 45, "speed": 66, "types": ["bug", "flying"]}];
w[415] = [{"introduced_in": 8, "name": "Combee", "weight": 55, "hp": 30, "catch_rate": 120, "speed": 70, "types": ["bug", "flying"]}];
w[416] = [{"introduced_in": 8, "name": "Vespiquen", "weight": 385, "hp": 70, "catch_rate": 45, "speed": 40, "types": ["bug", "flying"]}];
w[417] = [{"introduced_in": 8, "name": "Pachirisu", "weight": 39, "hp": 60, "catch_rate": 200, "speed": 95, "types": ["electric"]}];
w[418] = [{"introduced_in": 8, "name": "Buizel", "weight": 295, "hp": 55, "catch_rate": 190, "speed": 85, "types": ["water"]}];
w[419] = [{"introduced_in": 8, "name": "Floatzel", "weight": 335, "hp": 85, "catch_rate": 75, "speed": 115, "types": ["water"]}];
w[420] = [{"introduced_in": 8, "name": "Cherubi", "weight": 33, "hp": 45, "catch_rate": 190, "speed": 35, "types": ["grass"]}];
w[421] = [{"introduced_in": 8, "name": "Cherrim", "weight": 93, "hp": 70, "catch_rate": 75, "speed": 85, "types": ["grass"]}];
w[422] = [{"introduced_in": 8, "name": "Shellos", "weight": 63, "hp": 76, "catch_rate": 190, "speed": 34, "types": ["water"]}];
w[423] = [{"introduced_in": 8, "name": "Gastrodon", "weight": 299, "hp": 111, "catch_rate": 75, "speed": 39, "types": ["water", "ground"]}];
w[424] = [{"introduced_in": 8, "name": "Ambipom", "weight": 203, "hp": 75, "catch_rate": 45, "speed": 115, "types": ["normal"]}];
w[425] = [{"introduced_in": 8, "name": "Drifloon", "weight": 12, "hp": 90, "catch_rate": 125, "speed": 70, "types": ["ghost", "flying"]}];
w[426] = [{"introduced_in": 8, "name": "Drifblim", "weight": 150, "hp": 150, "catch_rate": 60, "speed": 80, "types": ["ghost", "flying"]}];
w[427] = [{"introduced_in": 8, "name": "Buneary", "weight": 55, "hp": 55, "catch_rate": 190, "speed": 85, "types": ["normal"]}];
w[428] = [{"introduced_in": 8, "name": "Lopunny", "weight": 333, "hp": 65, "catch_rate": 60, "speed": 105, "types": ["normal"]}, {"introduced_in": 16, "name": "Mega Lopunny", "weight": 283, "hp": 65, "catch_rate": 60, "speed": 135, "types": ["normal", "fighting"]}];
w[429] = [{"introduced_in": 8, "name": "Mismagius", "weight": 44, "hp": 60, "catch_rate": 45, "speed": 105, "types": ["ghost"]}];
w[430] = [{"introduced_in": 8, "name": "Honchkrow", "weight": 273, "hp": 100, "catch_rate": 30, "speed": 71, "types": ["dark", "flying"]}];
w[431] = [{"introduced_in": 8, "name": "Glameow", "weight": 39, "hp": 49, "catch_rate": 190, "speed": 85, "types": ["normal"]}];
w[432] = [{"introduced_in": 8, "name": "Purugly", "weight": 438, "hp": 71, "catch_rate": 75, "speed": 112, "types": ["normal"]}];
w[433] = [{"introduced_in": 8, "name": "Chingling", "weight": 6, "hp": 45, "catch_rate": 120, "speed": 45, "types": ["psychic"]}];
w[434] = [{"introduced_in": 8, "name": "Stunky", "weight": 192, "hp": 63, "catch_rate": 225, "speed": 74, "types": ["poison", "dark"]}];
w[435] = [{"introduced_in": 8, "name": "Skuntank", "weight": 380, "hp": 103, "catch_rate": 60, "speed": 84, "types": ["poison", "dark"]}];
w[436] = [{"introduced_in": 8, "name": "Bronzor", "weight": 605, "hp": 57, "catch_rate": 255, "speed": 23, "types": ["steel", "psychic"]}];
w[437] = [{"introduced_in": 8, "name": "Bronzong", "weight": 1870, "hp": 67, "catch_rate": 90, "speed": 33, "types": ["steel", "psychic"]}];
w[438] = [{"introduced_in": 8, "name": "Bonsly", "weight": 150, "hp": 50, "catch_rate": 255, "speed": 10, "types": ["rock"]}];
w[439] = [{"introduced_in": 8, "name": "Mime Jr.", "weight": 130, "hp": 20, "catch_rate": 145, "speed": 60, "types": ["psychic", "fairy"]}];
w[440] = [{"introduced_in": 8, "name": "Happiny", "weight": 244, "hp": 100, "catch_rate": 130, "speed": 30, "types": ["normal"]}];
w[441] = [{"introduced_in": 8, "name": "Chatot", "weight": 19, "hp": 76, "catch_rate": 30, "speed": 91, "types": ["normal", "flying"]}];
w[442] = [{"introduced_in": 8, "name": "Spiritomb", "weight": 1080, "hp": 50, "catch_rate": 100, "speed": 35, "types": ["ghost", "dark"]}];
w[443] = [{"introduced_in": 8, "name": "Gible", "weight": 205, "hp": 58, "catch_rate": 45, "speed": 42, "types": ["dragon", "ground"]}];
w[444] = [{"introduced_in": 8, "name": "Gabite", "weight": 560, "hp": 68, "catch_rate": 45, "speed": 82, "types": ["dragon", "ground"]}];
w[445] = [{"introduced_in": 8, "name": "Garchomp", "weight": 950, "hp": 108, "catch_rate": 45, "speed": 102, "types": ["dragon", "ground"]}, {"introduced_in": 15, "name": "Mega Garchomp", "weight": 950, "hp": 108, "catch_rate": 45, "speed": 92, "types": ["dragon", "ground"]}];
w[446] = [{"introduced_in": 8, "name": "Munchlax", "weight": 1050, "hp": 135, "catch_rate": 50, "speed": 5, "types": ["normal"]}];
w[447] = [{"introduced_in": 8, "name": "Riolu", "weight": 202, "hp": 40, "catch_rate": 75, "speed": 60, "types": ["fighting"]}];
w[448] = [{"introduced_in": 8, "name": "Lucario", "weight": 540, "hp": 70, "catch_rate": 45, "speed": 90, "types": ["fighting", "steel"]}, {"introduced_in": 15, "name": "Mega Lucario", "weight": 575, "hp": 70, "catch_rate": 45, "speed": 112, "types": ["fighting", "steel"]}];
w[449] = [{"introduced_in": 8, "name": "Hippopotas", "weight": 495, "hp": 68, "catch_rate": 140, "speed": 32, "types": ["ground"]}];
w[450] = [{"introduced_in": 8, "name": "Hippowdon", "weight": 3000, "hp": 108, "catch_rate": 60, "speed": 47, "types": ["ground"]}];
w[451] = [{"introduced_in": 8, "name": "Skorupi", "weight": 120, "hp": 40, "catch_rate": 120, "speed": 65, "types": ["poison", "bug"]}];
w[452] = [{"introduced_in": 8, "name": "Drapion", "weight": 615, "hp": 70, "catch_rate": 45, "speed": 95, "types": ["poison", "dark"]}];
w[453] = [{"introduced_in": 8, "name": "Croagunk", "weight": 230, "hp": 48, "catch_rate": 140, "speed": 50, "types": ["poison", "fighting"]}];
w[454] = [{"introduced_in": 8, "name": "Toxicroak", "weight": 444, "hp": 83, "catch_rate": 75, "speed": 85, "types": ["poison", "fighting"]}];
w[455] = [{"introduced_in": 8, "name": "Carnivine", "weight": 270, "hp": 74, "catch_rate": 200, "speed": 46, "types": ["grass"]}];
w[456] = [{"introduced_in": 8, "name": "Finneon", "weight": 70, "hp": 49, "catch_rate": 190, "speed": 66, "types": ["water"]}];
w[457] = [{"introduced_in": 8, "name": "Lumineon", "weight": 240, "hp": 69, "catch_rate": 75, "speed": 91, "types": ["water"]}];
w[458] = [{"introduced_in": 8, "name": "Mantyke", "weight": 650, "hp": 45, "catch_rate": 25, "speed": 50, "types": ["water", "flying"]}];
w[459] = [{"introduced_in": 8, "name": "Snover", "weight": 505, "hp": 60, "catch_rate": 120, "speed": 40, "types": ["grass", "ice"]}];
w[460] = [{"introduced_in": 8, "name": "Abomasnow", "weight": 1355, "hp": 90, "catch_rate": 60, "speed": 60, "types": ["grass", "ice"]}, {"introduced_in": 15, "name": "Mega Abomasnow", "weight": 1850, "hp": 90, "catch_rate": 60, "speed": 30, "types": ["grass", "ice"]}];
w[461] = [{"introduced_in": 8, "name": "Weavile", "weight": 340, "hp": 70, "catch_rate": 45, "speed": 125, "types": ["dark", "ice"]}];
w[462] = [{"introduced_in": 8, "name": "Magnezone", "weight": 1800, "hp": 70, "catch_rate": 30, "speed": 60, "types": ["electric", "steel"]}];
w[463] = [{"introduced_in": 8, "name": "Lickilicky", "weight": 1400, "hp": 110, "catch_rate": 30, "speed": 50, "types": ["normal"]}];
w[464] = [{"introduced_in": 8, "name": "Rhyperior", "weight": 2828, "hp": 115, "catch_rate": 30, "speed": 40, "types": ["ground", "rock"]}];
w[465] = [{"introduced_in": 8, "name": "Tangrowth", "weight": 1286, "hp": 100, "catch_rate": 30, "speed": 50, "types": ["grass"]}];
w[466] = [{"introduced_in": 8, "name": "Electivire", "weight": 1386, "hp": 75, "catch_rate": 30, "speed": 95, "types": ["electric"]}];
w[467] = [{"introduced_in": 8, "name": "Magmortar", "weight": 680, "hp": 75, "catch_rate": 30, "speed": 83, "types": ["fire"]}];
w[468] = [{"introduced_in": 8, "name": "Togekiss", "weight": 380, "hp": 85, "catch_rate": 30, "speed": 80, "types": ["fairy", "flying"]}];
w[469] = [{"introduced_in": 8, "name": "Yanmega", "weight": 515, "hp": 86, "catch_rate": 30, "speed": 95, "types": ["bug", "flying"]}];
w[470] = [{"introduced_in": 8, "name": "Leafeon", "weight": 255, "hp": 65, "catch_rate": 45, "speed": 95, "types": ["grass"]}];
w[471] = [{"introduced_in": 8, "name": "Glaceon", "weight": 259, "hp": 65, "catch_rate": 45, "speed": 65, "types": ["ice"]}];
w[472] = [{"introduced_in": 8, "name": "Gliscor", "weight": 425, "hp": 75, "catch_rate": 30, "speed": 95, "types": ["ground", "flying"]}];
w[473] = [{"introduced_in": 8, "name": "Mamoswine", "weight": 2910, "hp": 110, "catch_rate": 50, "speed": 80, "types": ["ice", "ground"]}];
w[474] = [{"introduced_in": 8, "name": "Porygon-Z", "weight": 340, "hp": 85, "catch_rate": 30, "speed": 90, "types": ["normal"]}];
w[475] = [{"introduced_in": 8, "name": "Gallade", "weight": 520, "hp": 68, "catch_rate": 45, "speed": 80, "types": ["psychic", "fighting"]}, {"introduced_in": 16, "name": "Mega Gallade", "weight": 564, "hp": 68, "catch_rate": 45, "speed": 110, "types": ["psychic", "fighting"]}];
w[476] = [{"introduced_in": 8, "name": "Probopass", "weight": 3400, "hp": 60, "catch_rate": 60, "speed": 40, "types": ["rock", "steel"]}];
w[477] = [{"introduced_in": 8, "name": "Dusknoir", "weight": 1066, "hp": 45, "catch_rate": 45, "speed": 45, "types": ["ghost"]}];
w[478] = [{"introduced_in": 8, "name": "Froslass", "weight": 266, "hp": 70, "catch_rate": 75, "speed": 110, "types": ["ice", "ghost"]}];
w[479] = [{"introduced_in": 8, "name": "Rotom", "weight": 3, "hp": 50, "catch_rate": 45, "speed": 91, "types": ["electric", "ghost"]}, {"introduced_in": 9, "name": "Heat Rotom", "weight": 3, "hp": 50, "catch_rate": 45, "speed": 86, "types": ["electric", "fire"]}, {"introduced_in": 9, "name": "Wash Rotom", "weight": 3, "hp": 50, "catch_rate": 45, "speed": 86, "types": ["electric", "water"]}, {"introduced_in": 9, "name": "Frost Rotom", "weight": 3, "hp": 50, "catch_rate": 45, "speed": 86, "types": ["electric", "ice"]}, {"introduced_in": 9, "name": "Fan Rotom", "weight": 3, "hp": 50, "catch_rate": 45, "speed": 86, "types": ["electric", "flying"]}, {"introduced_in": 9, "name": "Mow Rotom", "weight": 3, "hp": 50, "catch_rate": 45, "speed": 86, "types": ["electric", "grass"]}];
w[480] = [{"introduced_in": 8, "name": "Uxie", "weight": 3, "hp": 75, "catch_rate": 3, "speed": 95, "types": ["psychic"]}];
w[481] = [{"introduced_in": 8, "name": "Mesprit", "weight": 3, "hp": 80, "catch_rate": 3, "speed": 80, "types": ["psychic"]}];
w[482] = [{"introduced_in": 8, "name": "Azelf", "weight": 3, "hp": 75, "catch_rate": 3, "speed": 115, "types": ["psychic"]}];
w[483] = [{"introduced_in": 8, "name": "Dialga", "weight": 6830, "hp": 100, "catch_rate": 3, "speed": 90, "types": ["steel", "dragon"]}];
w[484] = [{"introduced_in": 8, "name": "Palkia", "weight": 3360, "hp": 90, "catch_rate": 3, "speed": 100, "types": ["water", "dragon"]}];
w[485] = [{"introduced_in": 8, "name": "Heatran", "weight": 4300, "hp": 91, "catch_rate": 3, "speed": 77, "types": ["fire", "steel"]}];
w[486] = [{"introduced_in": 8, "name": "Regigigas", "weight": 4200, "hp": 110, "catch_rate": 3, "speed": 100, "types": ["normal"]}];
w[487] = [{"introduced_in": 8, "name": "Altered Giratina", "weight": 7500, "hp": 150, "catch_rate": 3, "speed": 90, "types": ["ghost", "dragon"]}, {"introduced_in": 9, "name": "Origin Giratina", "weight": 6500, "hp": 150, "catch_rate": 3, "speed": 90, "types": ["ghost", "dragon"]}];
w[488] = [{"introduced_in": 8, "name": "Cresselia", "weight": 856, "hp": 120, "catch_rate": 3, "speed": 85, "types": ["psychic"]}];
w[489] = [{"introduced_in": 8, "name": "Phione", "weight": 31, "hp": 80, "catch_rate": 30, "speed": 80, "types": ["water"]}];
w[490] = [{"introduced_in": 8, "name": "Manaphy", "weight": 14, "hp": 100, "catch_rate": 3, "speed": 100, "types": ["water"]}];
w[491] = [{"introduced_in": 8, "name": "Darkrai", "weight": 505, "hp": 70, "catch_rate": 3, "speed": 125, "types": ["dark"]}];
w[492] = [{"introduced_in": 8, "name": "Land Shaymin", "weight": 21, "hp": 100, "catch_rate": 45, "speed": 100, "types": ["grass"]}, {"introduced_in": 9, "name": "Sky Shaymin", "weight": 52, "hp": 100, "catch_rate": 45, "speed": 127, "types": ["grass", "flying"]}];
w[493] = [{"introduced_in": 8, "name": "Arceus", "weight": 3200, "hp": 120, "catch_rate": 3, "speed": 120, "types": ["normal"]}];
w[494] = [{"introduced_in": 11, "name": "Victini", "weight": 40, "hp": 100, "catch_rate": 3, "speed": 100, "types": ["psychic", "fire"]}];
w[495] = [{"introduced_in": 11, "name": "Snivy", "weight": 81, "hp": 45, "catch_rate": 45, "speed": 63, "types": ["grass"]}];
w[496] = [{"introduced_in": 11, "name": "Servine", "weight": 160, "hp": 60, "catch_rate": 45, "speed": 83, "types": ["grass"]}];
w[497] = [{"introduced_in": 11, "name": "Serperior", "weight": 630, "hp": 75, "catch_rate": 45, "speed": 113, "types": ["grass"]}];
w[498] = [{"introduced_in": 11, "name": "Tepig", "weight": 99, "hp": 65, "catch_rate": 45, "speed": 45, "types": ["fire"]}];
w[499] = [{"introduced_in": 11, "name": "Pignite", "weight": 555, "hp": 90, "catch_rate": 45, "speed": 55, "types": ["fire", "fighting"]}];
w[500] = [{"introduced_in": 11, "name": "Emboar", "weight": 1500, "hp": 110, "catch_rate": 45, "speed": 65, "types": ["fire", "fighting"]}];
w[501] = [{"introduced_in": 11, "name": "Oshawott", "weight": 59, "hp": 55, "catch_rate": 45, "speed": 45, "types": ["water"]}];
w[502] = [{"introduced_in": 11, "name": "Dewott", "weight": 245, "hp": 75, "catch_rate": 45, "speed": 60, "types": ["water"]}];
w[503] = [{"introduced_in": 11, "name": "Samurott", "weight": 946, "hp": 95, "catch_rate": 45, "speed": 70, "types": ["water"]}];
w[504] = [{"introduced_in": 11, "name": "Patrat", "weight": 116, "hp": 45, "catch_rate": 255, "speed": 42, "types": ["normal"]}];
w[505] = [{"introduced_in": 11, "name": "Watchog", "weight": 270, "hp": 60, "catch_rate": 255, "speed": 77, "types": ["normal"]}];
w[506] = [{"introduced_in": 11, "name": "Lillipup", "weight": 41, "hp": 45, "catch_rate": 255, "speed": 55, "types": ["normal"]}];
w[507] = [{"introduced_in": 11, "name": "Herdier", "weight": 147, "hp": 65, "catch_rate": 120, "speed": 60, "types": ["normal"]}];
w[508] = [{"introduced_in": 11, "name": "Stoutland", "weight": 610, "hp": 85, "catch_rate": 45, "speed": 80, "types": ["normal"]}];
w[509] = [{"introduced_in": 11, "name": "Purrloin", "weight": 101, "hp": 41, "catch_rate": 255, "speed": 66, "types": ["dark"]}];
w[510] = [{"introduced_in": 11, "name": "Liepard", "weight": 375, "hp": 64, "catch_rate": 90, "speed": 106, "types": ["dark"]}];
w[511] = [{"introduced_in": 11, "name": "Pansage", "weight": 105, "hp": 50, "catch_rate": 190, "speed": 64, "types": ["grass"]}];
w[512] = [{"introduced_in": 11, "name": "Simisage", "weight": 305, "hp": 75, "catch_rate": 75, "speed": 101, "types": ["grass"]}];
w[513] = [{"introduced_in": 11, "name": "Pansear", "weight": 110, "hp": 50, "catch_rate": 190, "speed": 64, "types": ["fire"]}];
w[514] = [{"introduced_in": 11, "name": "Simisear", "weight": 280, "hp": 75, "catch_rate": 75, "speed": 101, "types": ["fire"]}];
w[515] = [{"introduced_in": 11, "name": "Panpour", "weight": 135, "hp": 50, "catch_rate": 190, "speed": 64, "types": ["water"]}];
w[516] = [{"introduced_in": 11, "name": "Simipour", "weight": 290, "hp": 75, "catch_rate": 75, "speed": 101, "types": ["water"]}];
w[517] = [{"introduced_in": 11, "name": "Munna", "weight": 233, "hp": 76, "catch_rate": 190, "speed": 24, "types": ["psychic"]}];
w[518] = [{"introduced_in": 11, "name": "Musharna", "weight": 605, "hp": 116, "catch_rate": 75, "speed": 29, "types": ["psychic"]}];
w[519] = [{"introduced_in": 11, "name": "Pidove", "weight": 21, "hp": 50, "catch_rate": 255, "speed": 43, "types": ["normal", "flying"]}];
w[520] = [{"introduced_in": 11, "name": "Tranquill", "weight": 150, "hp": 62, "catch_rate": 120, "speed": 65, "types": ["normal", "flying"]}];
w[521] = [{"introduced_in": 11, "name": "Unfezant", "weight": 290, "hp": 80, "catch_rate": 45, "speed": 93, "types": ["normal", "flying"]}];
w[522] = [{"introduced_in": 11, "name": "Blitzle", "weight": 298, "hp": 45, "catch_rate": 190, "speed": 76, "types": ["electric"]}];
w[523] = [{"introduced_in": 11, "name": "Zebstrika", "weight": 795, "hp": 75, "catch_rate": 75, "speed": 116, "types": ["electric"]}];
w[524] = [{"introduced_in": 11, "name": "Roggenrola", "weight": 180, "hp": 55, "catch_rate": 255, "speed": 15, "types": ["rock"]}];
w[525] = [{"introduced_in": 11, "name": "Boldore", "weight": 1020, "hp": 70, "catch_rate": 120, "speed": 20, "types": ["rock"]}];
w[526] = [{"introduced_in": 11, "name": "Gigalith", "weight": 2600, "hp": 85, "catch_rate": 45, "speed": 25, "types": ["rock"]}];
w[527] = [{"introduced_in": 11, "name": "Woobat", "weight": 21, "hp": 65, "catch_rate": 190, "speed": 72, "types": ["psychic", "flying"]}];
w[528] = [{"introduced_in": 11, "name": "Swoobat", "weight": 105, "hp": 67, "catch_rate": 45, "speed": 114, "types": ["psychic", "flying"]}];
w[529] = [{"introduced_in": 11, "name": "Drilbur", "weight": 85, "hp": 60, "catch_rate": 120, "speed": 68, "types": ["ground"]}];
w[530] = [{"introduced_in": 11, "name": "Excadrill", "weight": 404, "hp": 110, "catch_rate": 60, "speed": 88, "types": ["ground", "steel"]}];
w[531] = [{"introduced_in": 11, "name": "Audino", "weight": 310, "hp": 103, "catch_rate": 255, "speed": 50, "types": ["normal"]}, {"introduced_in": 16, "name": "Mega Audino", "weight": 320, "hp": 103, "catch_rate": 255, "speed": 50, "types": ["normal", "fairy"]}];
w[532] = [{"introduced_in": 11, "name": "Timburr", "weight": 125, "hp": 75, "catch_rate": 180, "speed": 35, "types": ["fighting"]}];
w[533] = [{"introduced_in": 11, "name": "Gurdurr", "weight": 400, "hp": 85, "catch_rate": 90, "speed": 40, "types": ["fighting"]}];
w[534] = [{"introduced_in": 11, "name": "Conkeldurr", "weight": 870, "hp": 105, "catch_rate": 45, "speed": 45, "types": ["fighting"]}];
w[535] = [{"introduced_in": 11, "name": "Tympole", "weight": 45, "hp": 50, "catch_rate": 255, "speed": 64, "types": ["water"]}];
w[536] = [{"introduced_in": 11, "name": "Palpitoad", "weight": 170, "hp": 75, "catch_rate": 120, "speed": 69, "types": ["water", "ground"]}];
w[537] = [{"introduced_in": 11, "name": "Seismitoad", "weight": 620, "hp": 105, "catch_rate": 45, "speed": 74, "types": ["water", "ground"]}];
w[538] = [{"introduced_in": 11, "name": "Throh", "weight": 555, "hp": 120, "catch_rate": 45, "speed": 45, "types": ["fighting"]}];
w[539] = [{"introduced_in": 11, "name": "Sawk", "weight": 510, "hp": 75, "catch_rate": 45, "speed": 85, "types": ["fighting"]}];
w[540] = [{"introduced_in": 11, "name": "Sewaddle", "weight": 25, "hp": 45, "catch_rate": 255, "speed": 42, "types": ["bug", "grass"]}];
w[541] = [{"introduced_in": 11, "name": "Swadloon", "weight": 73, "hp": 55, "catch_rate": 120, "speed": 42, "types": ["bug", "grass"]}];
w[542] = [{"introduced_in": 11, "name": "Leavanny", "weight": 205, "hp": 75, "catch_rate": 45, "speed": 92, "types": ["bug", "grass"]}];
w[543] = [{"introduced_in": 11, "name": "Venipede", "weight": 53, "hp": 30, "catch_rate": 255, "speed": 57, "types": ["bug", "poison"]}];
w[544] = [{"introduced_in": 11, "name": "Whirlipede", "weight": 585, "hp": 40, "catch_rate": 120, "speed": 47, "types": ["bug", "poison"]}];
w[545] = [{"introduced_in": 11, "name": "Scolipede", "weight": 2005, "hp": 60, "catch_rate": 45, "speed": 112, "types": ["bug", "poison"]}];
w[546] = [{"introduced_in": 11, "name": "Cottonee", "weight": 6, "hp": 40, "catch_rate": 190, "speed": 66, "types": ["grass", "fairy"]}];
w[547] = [{"introduced_in": 11, "name": "Whimsicott", "weight": 66, "hp": 60, "catch_rate": 75, "speed": 116, "types": ["grass", "fairy"]}];
w[548] = [{"introduced_in": 11, "name": "Petilil", "weight": 66, "hp": 45, "catch_rate": 190, "speed": 30, "types": ["grass"]}];
w[549] = [{"introduced_in": 11, "name": "Lilligant", "weight": 163, "hp": 70, "catch_rate": 75, "speed": 90, "types": ["grass"]}];
w[550] = [{"introduced_in": 11, "name": "Red-Striped Basculin", "weight": 180, "hp": 70, "catch_rate": 25, "speed": 98, "types": ["water"]}, {"introduced_in": 11, "name": "Blue-Striped Basculin", "weight": 180, "hp": 70, "catch_rate": 25, "speed": 98, "types": ["water"]}];
w[551] = [{"introduced_in": 11, "name": "Sandile", "weight": 152, "hp": 50, "catch_rate": 180, "speed": 65, "types": ["ground", "dark"]}];
w[552] = [{"introduced_in": 11, "name": "Krokorok", "weight": 334, "hp": 60, "catch_rate": 90, "speed": 74, "types": ["ground", "dark"]}];
w[553] = [{"introduced_in": 11, "name": "Krookodile", "weight": 963, "hp": 95, "catch_rate": 45, "speed": 92, "types": ["ground", "dark"]}];
w[554] = [{"introduced_in": 11, "name": "Darumaka", "weight": 375, "hp": 70, "catch_rate": 120, "speed": 50, "types": ["fire"]}];
w[555] = [{"introduced_in": 11, "name": "Standard Darmanitan", "weight": 929, "hp": 105, "catch_rate": 60, "speed": 95, "types": ["fire"]}, {"introduced_in": 11, "name": "Zen Darmanitan", "weight": 929, "hp": 105, "catch_rate": 60, "speed": 55, "types": ["fire", "psychic"]}];
w[556] = [{"introduced_in": 11, "name": "Maractus", "weight": 280, "hp": 75, "catch_rate": 255, "speed": 60, "types": ["grass"]}];
w[557] = [{"introduced_in": 11, "name": "Dwebble", "weight": 145, "hp": 50, "catch_rate": 190, "speed": 55, "types": ["bug", "rock"]}];
w[558] = [{"introduced_in": 11, "name": "Crustle", "weight": 2000, "hp": 70, "catch_rate": 75, "speed": 45, "types": ["bug", "rock"]}];
w[559] = [{"introduced_in": 11, "name": "Scraggy", "weight": 118, "hp": 50, "catch_rate": 180, "speed": 48, "types": ["dark", "fighting"]}];
w[560] = [{"introduced_in": 11, "name": "Scrafty", "weight": 300, "hp": 65, "catch_rate": 90, "speed": 58, "types": ["dark", "fighting"]}];
w[561] = [{"introduced_in": 11, "name": "Sigilyph", "weight": 140, "hp": 72, "catch_rate": 45, "speed": 97, "types": ["psychic", "flying"]}];
w[562] = [{"introduced_in": 11, "name": "Yamask", "weight": 15, "hp": 38, "catch_rate": 190, "speed": 30, "types": ["ghost"]}];
w[563] = [{"introduced_in": 11, "name": "Cofagrigus", "weight": 765, "hp": 58, "catch_rate": 90, "speed": 30, "types": ["ghost"]}];
w[564] = [{"introduced_in": 11, "name": "Tirtouga", "weight": 165, "hp": 54, "catch_rate": 45, "speed": 22, "types": ["water", "rock"]}];
w[565] = [{"introduced_in": 11, "name": "Carracosta", "weight": 810, "hp": 74, "catch_rate": 45, "speed": 32, "types": ["water", "rock"]}];
w[566] = [{"introduced_in": 11, "name": "Archen", "weight": 95, "hp": 55, "catch_rate": 45, "speed": 70, "types": ["rock", "flying"]}];
w[567] = [{"introduced_in": 11, "name": "Archeops", "weight": 320, "hp": 75, "catch_rate": 45, "speed": 110, "types": ["rock", "flying"]}];
w[568] = [{"introduced_in": 11, "name": "Trubbish", "weight": 310, "hp": 50, "catch_rate": 190, "speed": 65, "types": ["poison"]}];
w[569] = [{"introduced_in": 11, "name": "Garbodor", "weight": 1073, "hp": 80, "catch_rate": 60, "speed": 75, "types": ["poison"]}];
w[570] = [{"introduced_in": 11, "name": "Zorua", "weight": 125, "hp": 40, "catch_rate": 75, "speed": 65, "types": ["dark"]}];
w[571] = [{"introduced_in": 11, "name": "Zoroark", "weight": 811, "hp": 60, "catch_rate": 45, "speed": 105, "types": ["dark"]}];
w[572] = [{"introduced_in": 11, "name": "Minccino", "weight": 58, "hp": 55, "catch_rate": 255, "speed": 75, "types": ["normal"]}];
w[573] = [{"introduced_in": 11, "name": "Cinccino", "weight": 75, "hp": 75, "catch_rate": 60, "speed": 115, "types": ["normal"]}];
w[574] = [{"introduced_in": 11, "name": "Gothita", "weight": 58, "hp": 45, "catch_rate": 200, "speed": 45, "types": ["psychic"]}];
w[575] = [{"introduced_in": 11, "name": "Gothorita", "weight": 180, "hp": 60, "catch_rate": 100, "speed": 55, "types": ["psychic"]}];
w[576] = [{"introduced_in": 11, "name": "Gothitelle", "weight": 440, "hp": 70, "catch_rate": 50, "speed": 65, "types": ["psychic"]}];
w[577] = [{"introduced_in": 11, "name": "Solosis", "weight": 10, "hp": 45, "catch_rate": 200, "speed": 20, "types": ["psychic"]}];
w[578] = [{"introduced_in": 11, "name": "Duosion", "weight": 80, "hp": 65, "catch_rate": 100, "speed": 30, "types": ["psychic"]}];
w[579] = [{"introduced_in": 11, "name": "Reuniclus", "weight": 201, "hp": 110, "catch_rate": 50, "speed": 30, "types": ["psychic"]}];
w[580] = [{"introduced_in": 11, "name": "Ducklett", "weight": 55, "hp": 62, "catch_rate": 190, "speed": 55, "types": ["water", "flying"]}];
w[581] = [{"introduced_in": 11, "name": "Swanna", "weight": 242, "hp": 75, "catch_rate": 45, "speed": 98, "types": ["water", "flying"]}];
w[582] = [{"introduced_in": 11, "name": "Vanillite", "weight": 57, "hp": 36, "catch_rate": 255, "speed": 44, "types": ["ice"]}];
w[583] = [{"introduced_in": 11, "name": "Vanillish", "weight": 410, "hp": 51, "catch_rate": 120, "speed": 59, "types": ["ice"]}];
w[584] = [{"introduced_in": 11, "name": "Vanilluxe", "weight": 575, "hp": 71, "catch_rate": 45, "speed": 79, "types": ["ice"]}];
w[585] = [{"introduced_in": 11, "name": "Deerling", "weight": 195, "hp": 60, "catch_rate": 190, "speed": 75, "types": ["normal", "grass"]}];
w[586] = [{"introduced_in": 11, "name": "Sawsbuck", "weight": 925, "hp": 80, "catch_rate": 75, "speed": 95, "types": ["normal", "grass"]}];
w[587] = [{"introduced_in": 11, "name": "Emolga", "weight": 50, "hp": 55, "catch_rate": 200, "speed": 103, "types": ["electric", "flying"]}];
w[588] = [{"introduced_in": 11, "name": "Karrablast", "weight": 59, "hp": 50, "catch_rate": 200, "speed": 60, "types": ["bug"]}];
w[589] = [{"introduced_in": 11, "name": "Escavalier", "weight": 330, "hp": 70, "catch_rate": 75, "speed": 20, "types": ["bug", "steel"]}];
w[590] = [{"introduced_in": 11, "name": "Foongus", "weight": 10, "hp": 69, "catch_rate": 190, "speed": 15, "types": ["grass", "poison"]}];
w[591] = [{"introduced_in": 11, "name": "Amoonguss", "weight": 105, "hp": 114, "catch_rate": 75, "speed": 30, "types": ["grass", "poison"]}];
w[592] = [{"introduced_in": 11, "name": "Frillish", "weight": 330, "hp": 55, "catch_rate": 190, "speed": 40, "types": ["water", "ghost"]}];
w[593] = [{"introduced_in": 11, "name": "Jellicent", "weight": 1350, "hp": 100, "catch_rate": 60, "speed": 60, "types": ["water", "ghost"]}];
w[594] = [{"introduced_in": 11, "name": "Alomomola", "weight": 316, "hp": 165, "catch_rate": 75, "speed": 65, "types": ["water"]}];
w[595] = [{"introduced_in": 11, "name": "Joltik", "weight": 6, "hp": 50, "catch_rate": 190, "speed": 65, "types": ["bug", "electric"]}];
w[596] = [{"introduced_in": 11, "name": "Galvantula", "weight": 143, "hp": 70, "catch_rate": 75, "speed": 108, "types": ["bug", "electric"]}];
w[597] = [{"introduced_in": 11, "name": "Ferroseed", "weight": 188, "hp": 44, "catch_rate": 255, "speed": 10, "types": ["grass", "steel"]}];
w[598] = [{"introduced_in": 11, "name": "Ferrothorn", "weight": 1100, "hp": 74, "catch_rate": 90, "speed": 20, "types": ["grass", "steel"]}];
w[599] = [{"introduced_in": 11, "name": "Klink", "weight": 210, "hp": 40, "catch_rate": 130, "speed": 30, "types": ["steel"]}];
w[600] = [{"introduced_in": 11, "name": "Klang", "weight": 510, "hp": 60, "catch_rate": 60, "speed": 50, "types": ["steel"]}];
w[601] = [{"introduced_in": 11, "name": "Klinklang", "weight": 810, "hp": 60, "catch_rate": 30, "speed": 90, "types": ["steel"]}];
w[602] = [{"introduced_in": 11, "name": "Tynamo", "weight": 3, "hp": 35, "catch_rate": 190, "speed": 60, "types": ["electric"]}];
w[603] = [{"introduced_in": 11, "name": "Eelektrik", "weight": 220, "hp": 65, "catch_rate": 60, "speed": 40, "types": ["electric"]}];
w[604] = [{"introduced_in": 11, "name": "Eelektross", "weight": 805, "hp": 85, "catch_rate": 30, "speed": 50, "types": ["electric"]}];
w[605] = [{"introduced_in": 11, "name": "Elgyem", "weight": 90, "hp": 55, "catch_rate": 255, "speed": 30, "types": ["psychic"]}];
w[606] = [{"introduced_in": 11, "name": "Beheeyem", "weight": 345, "hp": 75, "catch_rate": 90, "speed": 40, "types": ["psychic"]}];
w[607] = [{"introduced_in": 11, "name": "Litwick", "weight": 31, "hp": 50, "catch_rate": 190, "speed": 20, "types": ["ghost", "fire"]}];
w[608] = [{"introduced_in": 11, "name": "Lampent", "weight": 130, "hp": 60, "catch_rate": 90, "speed": 55, "types": ["ghost", "fire"]}];
w[609] = [{"introduced_in": 11, "name": "Chandelure", "weight": 343, "hp": 60, "catch_rate": 45, "speed": 80, "types": ["ghost", "fire"]}];
w[610] = [{"introduced_in": 11, "name": "Axew", "weight": 180, "hp": 46, "catch_rate": 75, "speed": 57, "types": ["dragon"]}];
w[611] = [{"introduced_in": 11, "name": "Fraxure", "weight": 360, "hp": 66, "catch_rate": 60, "speed": 67, "types": ["dragon"]}];
w[612] = [{"introduced_in": 11, "name": "Haxorus", "weight": 1055, "hp": 76, "catch_rate": 45, "speed": 97, "types": ["dragon"]}];
w[613] = [{"introduced_in": 11, "name": "Cubchoo", "weight": 85, "hp": 55, "catch_rate": 120, "speed": 40, "types": ["ice"]}];
w[614] = [{"introduced_in": 11, "name": "Beartic", "weight": 2600, "hp": 95, "catch_rate": 60, "speed": 50, "types": ["ice"]}];
w[615] = [{"introduced_in": 11, "name": "Cryogonal", "weight": 1480, "hp": 80, "catch_rate": 25, "speed": 105, "types": ["ice"]}];
w[616] = [{"introduced_in": 11, "name": "Shelmet", "weight": 77, "hp": 50, "catch_rate": 200, "speed": 25, "types": ["bug"]}];
w[617] = [{"introduced_in": 11, "name": "Accelgor", "weight": 253, "hp": 80, "catch_rate": 75, "speed": 145, "types": ["bug"]}];
w[618] = [{"introduced_in": 11, "name": "Stunfisk", "weight": 110, "hp": 109, "catch_rate": 75, "speed": 32, "types": ["ground", "electric"]}];
w[619] = [{"introduced_in": 11, "name": "Mienfoo", "weight": 200, "hp": 45, "catch_rate": 180, "speed": 65, "types": ["fighting"]}];
w[620] = [{"introduced_in": 11, "name": "Mienshao", "weight": 355, "hp": 65, "catch_rate": 45, "speed": 105, "types": ["fighting"]}];
w[621] = [{"introduced_in": 11, "name": "Druddigon", "weight": 1390, "hp": 77, "catch_rate": 45, "speed": 48, "types": ["dragon"]}];
w[622] = [{"introduced_in": 11, "name": "Golett", "weight": 920, "hp": 59, "catch_rate": 190, "speed": 35, "types": ["ground", "ghost"]}];
w[623] = [{"introduced_in": 11, "name": "Golurk", "weight": 3300, "hp": 89, "catch_rate": 90, "speed": 55, "types": ["ground", "ghost"]}];
w[624] = [{"introduced_in": 11, "name": "Pawniard", "weight": 102, "hp": 45, "catch_rate": 120, "speed": 60, "types": ["dark", "steel"]}];
w[625] = [{"introduced_in": 11, "name": "Bisharp", "weight": 700, "hp": 65, "catch_rate": 45, "speed": 70, "types": ["dark", "steel"]}];
w[626] = [{"introduced_in": 11, "name": "Bouffalant", "weight": 946, "hp": 95, "catch_rate": 45, "speed": 55, "types": ["normal"]}];
w[627] = [{"introduced_in": 11, "name": "Rufflet", "weight": 105, "hp": 70, "catch_rate": 190, "speed": 60, "types": ["normal", "flying"]}];
w[628] = [{"introduced_in": 11, "name": "Braviary", "weight": 410, "hp": 100, "catch_rate": 60, "speed": 80, "types": ["normal", "flying"]}];
w[629] = [{"introduced_in": 11, "name": "Vullaby", "weight": 90, "hp": 70, "catch_rate": 190, "speed": 60, "types": ["dark", "flying"]}];
w[630] = [{"introduced_in": 11, "name": "Mandibuzz", "weight": 395, "hp": 110, "catch_rate": 60, "speed": 80, "types": ["dark", "flying"]}];
w[631] = [{"introduced_in": 11, "name": "Heatmor", "weight": 580, "hp": 85, "catch_rate": 90, "speed": 65, "types": ["fire"]}];
w[632] = [{"introduced_in": 11, "name": "Durant", "weight": 330, "hp": 58, "catch_rate": 90, "speed": 109, "types": ["bug", "steel"]}];
w[633] = [{"introduced_in": 11, "name": "Deino", "weight": 173, "hp": 52, "catch_rate": 45, "speed": 38, "types": ["dark", "dragon"]}];
w[634] = [{"introduced_in": 11, "name": "Zweilous", "weight": 500, "hp": 72, "catch_rate": 45, "speed": 58, "types": ["dark", "dragon"]}];
w[635] = [{"introduced_in": 11, "name": "Hydreigon", "weight": 1600, "hp": 92, "catch_rate": 45, "speed": 98, "types": ["dark", "dragon"]}];
w[636] = [{"introduced_in": 11, "name": "Larvesta", "weight": 288, "hp": 55, "catch_rate": 45, "speed": 60, "types": ["bug", "fire"]}];
w[637] = [{"introduced_in": 11, "name": "Volcarona", "weight": 460, "hp": 85, "catch_rate": 15, "speed": 100, "types": ["bug", "fire"]}];
w[638] = [{"introduced_in": 11, "name": "Cobalion", "weight": 2500, "hp": 91, "catch_rate": 3, "speed": 108, "types": ["steel", "fighting"]}];
w[639] = [{"introduced_in": 11, "name": "Terrakion", "weight": 2600, "hp": 91, "catch_rate": 3, "speed": 108, "types": ["rock", "fighting"]}];
w[640] = [{"introduced_in": 11, "name": "Virizion", "weight": 2000, "hp": 91, "catch_rate": 3, "speed": 108, "types": ["grass", "fighting"]}];
w[641] = [{"introduced_in": 11, "name": "Incarnate Tornadus", "weight": 630, "hp": 79, "catch_rate": 3, "speed": 111, "types": ["flying"]}, {"introduced_in": 14, "name": "Therian Tornadus", "weight": 630, "hp": 79, "catch_rate": 3, "speed": 121, "types": ["flying"]}];
w[642] = [{"introduced_in": 11, "name": "Incarnate Thundurus", "weight": 610, "hp": 79, "catch_rate": 3, "speed": 111, "types": ["electric", "flying"]}, {"introduced_in": 14, "name": "Therian Thundurus", "weight": 610, "hp": 79, "catch_rate": 3, "speed": 101, "types": ["electric", "flying"]}];
w[643] = [{"introduced_in": 11, "name": "Reshiram", "weight": 3300, "hp": 100, "catch_rate": 3, "speed": 90, "types": ["dragon", "fire"]}];
w[644] = [{"introduced_in": 11, "name": "Zekrom", "weight": 3450, "hp": 100, "catch_rate": 3, "speed": 90, "types": ["dragon", "electric"]}];
w[645] = [{"introduced_in": 11, "name": "Incarnate Landorus", "weight": 680, "hp": 89, "catch_rate": 3, "speed": 101, "types": ["ground", "flying"]}, {"introduced_in": 14, "name": "Therian Landorus", "weight": 680, "hp": 89, "catch_rate": 3, "speed": 91, "types": ["ground", "flying"]}];
w[646] = [{"introduced_in": 11, "name": "Kyurem", "weight": 3250, "hp": 125, "catch_rate": 3, "speed": 95, "types": ["dragon", "ice"]}, {"introduced_in": 14, "name": "White Kyurem", "weight": 3250, "hp": 125, "catch_rate": 3, "speed": 95, "types": ["dragon", "ice"]}, {"introduced_in": 14, "name": "Black Kyurem", "weight": 3250, "hp": 125, "catch_rate": 3, "speed": 95, "types": ["dragon", "ice"]}];
w[647] = [{"introduced_in": 11, "name": "Ordinary Keldeo", "weight": 485, "hp": 91, "catch_rate": 3, "speed": 108, "types": ["water", "fighting"]}, {"introduced_in": 14, "name": "Resolute Keldeo", "weight": 485, "hp": 91, "catch_rate": 3, "speed": 108, "types": ["water", "fighting"]}];
w[648] = [{"introduced_in": 11, "name": "Aria Meloetta", "weight": 65, "hp": 100, "catch_rate": 3, "speed": 90, "types": ["normal", "psychic"]}, {"introduced_in": 11, "name": "Pirouette Meloetta", "weight": 65, "hp": 100, "catch_rate": 3, "speed": 128, "types": ["normal", "fighting"]}];
w[649] = [{"introduced_in": 11, "name": "Genesect", "weight": 825, "hp": 71, "catch_rate": 3, "speed": 99, "types": ["bug", "steel"]}];
w[650] = [{"introduced_in": 15, "name": "Chespin", "weight": 90, "hp": 56, "catch_rate": 45, "speed": 38, "types": ["grass"]}];
w[651] = [{"introduced_in": 15, "name": "Quilladin", "weight": 290, "hp": 61, "catch_rate": 45, "speed": 57, "types": ["grass"]}];
w[652] = [{"introduced_in": 15, "name": "Chesnaught", "weight": 900, "hp": 88, "catch_rate": 45, "speed": 64, "types": ["grass", "fighting"]}];
w[653] = [{"introduced_in": 15, "name": "Fennekin", "weight": 94, "hp": 40, "catch_rate": 45, "speed": 60, "types": ["fire"]}];
w[654] = [{"introduced_in": 15, "name": "Braixen", "weight": 145, "hp": 59, "catch_rate": 45, "speed": 73, "types": ["fire"]}];
w[655] = [{"introduced_in": 15, "name": "Delphox", "weight": 390, "hp": 75, "catch_rate": 45, "speed": 104, "types": ["fire", "psychic"]}];
w[656] = [{"introduced_in": 15, "name": "Froakie", "weight": 70, "hp": 41, "catch_rate": 45, "speed": 71, "types": ["water"]}];
w[657] = [{"introduced_in": 15, "name": "Frogadier", "weight": 109, "hp": 54, "catch_rate": 45, "speed": 97, "types": ["water"]}];
w[658] = [{"introduced_in": 15, "name": "Greninja", "weight": 400, "hp": 72, "catch_rate": 45, "speed": 122, "types": ["water", "dark"]}, {"introduced_in": 17, "name": "Battle Bond Greninja", "weight": 400, "hp": 72, "catch_rate": 45, "speed": 122, "types": ["water", "dark"]}, {"introduced_in": 17, "name": "Ash's Greninja", "weight": 400, "hp": 72, "catch_rate": 45, "speed": 132, "types": ["water", "dark"]}];
w[659] = [{"introduced_in": 15, "name": "Bunnelby", "weight": 50, "hp": 38, "catch_rate": 255, "speed": 57, "types": ["normal"]}];
w[660] = [{"introduced_in": 15, "name": "Diggersby", "weight": 424, "hp": 85, "catch_rate": 127, "speed": 78, "types": ["normal", "ground"]}];
w[661] = [{"introduced_in": 15, "name": "Fletchling", "weight": 17, "hp": 45, "catch_rate": 255, "speed": 62, "types": ["normal", "flying"]}];
w[662] = [{"introduced_in": 15, "name": "Fletchinder", "weight": 160, "hp": 62, "catch_rate": 120, "speed": 84, "types": ["fire", "flying"]}];
w[663] = [{"introduced_in": 15, "name": "Talonflame", "weight": 245, "hp": 78, "catch_rate": 45, "speed": 126, "types": ["fire", "flying"]}];
w[664] = [{"introduced_in": 15, "name": "Scatterbug", "weight": 25, "hp": 38, "catch_rate": 255, "speed": 35, "types": ["bug"]}];
w[665] = [{"introduced_in": 15, "name": "Spewpa", "weight": 84, "hp": 45, "catch_rate": 120, "speed": 29, "types": ["bug"]}];
w[666] = [{"introduced_in": 15, "name": "Vivillon", "weight": 170, "hp": 80, "catch_rate": 45, "speed": 89, "types": ["bug", "flying"]}];
w[667] = [{"introduced_in": 15, "name": "Litleo", "weight": 135, "hp": 62, "catch_rate": 220, "speed": 72, "types": ["fire", "normal"]}];
w[668] = [{"introduced_in": 15, "name": "Pyroar", "weight": 815, "hp": 86, "catch_rate": 65, "speed": 106, "types": ["fire", "normal"]}];
w[669] = [{"introduced_in": 15, "name": "Flab\u00e9b\u00e9", "weight": 1, "hp": 44, "catch_rate": 225, "speed": 42, "types": ["fairy"]}];
w[670] = [{"introduced_in": 15, "name": "Floette", "weight": 9, "hp": 54, "catch_rate": 120, "speed": 52, "types": ["fairy"]}, {"introduced_in": 15, "name": "Eternal Floette", "weight": 9, "hp": 74, "catch_rate": 120, "speed": 92, "types": ["fairy"]}];
w[671] = [{"introduced_in": 15, "name": "Florges", "weight": 100, "hp": 78, "catch_rate": 45, "speed": 75, "types": ["fairy"]}];
w[672] = [{"introduced_in": 15, "name": "Skiddo", "weight": 310, "hp": 66, "catch_rate": 200, "speed": 52, "types": ["grass"]}];
w[673] = [{"introduced_in": 15, "name": "Gogoat", "weight": 910, "hp": 123, "catch_rate": 45, "speed": 68, "types": ["grass"]}];
w[674] = [{"introduced_in": 15, "name": "Pancham", "weight": 80, "hp": 67, "catch_rate": 220, "speed": 43, "types": ["fighting"]}];
w[675] = [{"introduced_in": 15, "name": "Pangoro", "weight": 1360, "hp": 95, "catch_rate": 65, "speed": 58, "types": ["fighting", "dark"]}];
w[676] = [{"introduced_in": 15, "name": "Furfrou", "weight": 280, "hp": 75, "catch_rate": 160, "speed": 102, "types": ["normal"]}];
w[677] = [{"introduced_in": 15, "name": "Espurr", "weight": 35, "hp": 62, "catch_rate": 190, "speed": 68, "types": ["psychic"]}];
w[678] = [{"introduced_in": 15, "name": "Male Meowstic", "weight": 85, "hp": 74, "catch_rate": 75, "speed": 104, "types": ["psychic"]}, {"introduced_in": 15, "name": "Female Meowstic", "weight": 85, "hp": 74, "catch_rate": 75, "speed": 104, "types": ["psychic"]}];
w[679] = [{"introduced_in": 15, "name": "Honedge", "weight": 20, "hp": 45, "catch_rate": 180, "speed": 28, "types": ["steel", "ghost"]}];
w[680] = [{"introduced_in": 15, "name": "Doublade", "weight": 45, "hp": 59, "catch_rate": 90, "speed": 35, "types": ["steel", "ghost"]}];
w[681] = [{"introduced_in": 15, "name": "Shield Aegislash", "weight": 530, "hp": 60, "catch_rate": 45, "speed": 60, "types": ["steel", "ghost"]}, {"introduced_in": 15, "name": "Blade Aegislash", "weight": 530, "hp": 60, "catch_rate": 45, "speed": 60, "types": ["steel", "ghost"]}];
w[682] = [{"introduced_in": 15, "name": "Spritzee", "weight": 5, "hp": 78, "catch_rate": 200, "speed": 23, "types": ["fairy"]}];
w[683] = [{"introduced_in": 15, "name": "Aromatisse", "weight": 155, "hp": 101, "catch_rate": 140, "speed": 29, "types": ["fairy"]}];
w[684] = [{"introduced_in": 15, "name": "Swirlix", "weight": 35, "hp": 62, "catch_rate": 200, "speed": 49, "types": ["fairy"]}];
w[685] = [{"introduced_in": 15, "name": "Slurpuff", "weight": 50, "hp": 82, "catch_rate": 140, "speed": 72, "types": ["fairy"]}];
w[686] = [{"introduced_in": 15, "name": "Inkay", "weight": 35, "hp": 53, "catch_rate": 190, "speed": 45, "types": ["dark", "psychic"]}];
w[687] = [{"introduced_in": 15, "name": "Malamar", "weight": 470, "hp": 86, "catch_rate": 80, "speed": 73, "types": ["dark", "psychic"]}];
w[688] = [{"introduced_in": 15, "name": "Binacle", "weight": 310, "hp": 42, "catch_rate": 120, "speed": 50, "types": ["rock", "water"]}];
w[689] = [{"introduced_in": 15, "name": "Barbaracle", "weight": 960, "hp": 72, "catch_rate": 45, "speed": 68, "types": ["rock", "water"]}];
w[690] = [{"introduced_in": 15, "name": "Skrelp", "weight": 73, "hp": 50, "catch_rate": 225, "speed": 30, "types": ["poison", "water"]}];
w[691] = [{"introduced_in": 15, "name": "Dragalge", "weight": 815, "hp": 65, "catch_rate": 55, "speed": 44, "types": ["poison", "dragon"]}];
w[692] = [{"introduced_in": 15, "name": "Clauncher", "weight": 83, "hp": 50, "catch_rate": 225, "speed": 44, "types": ["water"]}];
w[693] = [{"introduced_in": 15, "name": "Clawitzer", "weight": 353, "hp": 71, "catch_rate": 55, "speed": 59, "types": ["water"]}];
w[694] = [{"introduced_in": 15, "name": "Helioptile", "weight": 60, "hp": 44, "catch_rate": 190, "speed": 70, "types": ["electric", "normal"]}];
w[695] = [{"introduced_in": 15, "name": "Heliolisk", "weight": 210, "hp": 62, "catch_rate": 75, "speed": 109, "types": ["electric", "normal"]}];
w[696] = [{"introduced_in": 15, "name": "Tyrunt", "weight": 260, "hp": 58, "catch_rate": 45, "speed": 48, "types": ["rock", "dragon"]}];
w[697] = [{"introduced_in": 15, "name": "Tyrantrum", "weight": 2700, "hp": 82, "catch_rate": 45, "speed": 71, "types": ["rock", "dragon"]}];
w[698] = [{"introduced_in": 15, "name": "Amaura", "weight": 252, "hp": 77, "catch_rate": 45, "speed": 46, "types": ["rock", "ice"]}];
w[699] = [{"introduced_in": 15, "name": "Aurorus", "weight": 2250, "hp": 123, "catch_rate": 45, "speed": 58, "types": ["rock", "ice"]}];
w[700] = [{"introduced_in": 15, "name": "Sylveon", "weight": 235, "hp": 95, "catch_rate": 45, "speed": 60, "types": ["fairy"]}];
w[701] = [{"introduced_in": 15, "name": "Hawlucha", "weight": 215, "hp": 78, "catch_rate": 100, "speed": 118, "types": ["fighting", "flying"]}];
w[702] = [{"introduced_in": 15, "name": "Dedenne", "weight": 22, "hp": 67, "catch_rate": 180, "speed": 101, "types": ["electric", "fairy"]}];
w[703] = [{"introduced_in": 15, "name": "Carbink", "weight": 57, "hp": 50, "catch_rate": 60, "speed": 50, "types": ["rock", "fairy"]}];
w[704] = [{"introduced_in": 15, "name": "Goomy", "weight": 28, "hp": 45, "catch_rate": 45, "speed": 40, "types": ["dragon"]}];
w[705] = [{"introduced_in": 15, "name": "Sliggoo", "weight": 175, "hp": 68, "catch_rate": 45, "speed": 60, "types": ["dragon"]}];
w[706] = [{"introduced_in": 15, "name": "Goodra", "weight": 1505, "hp": 90, "catch_rate": 45, "speed": 80, "types": ["dragon"]}];
w[707] = [{"introduced_in": 15, "name": "Klefki", "weight": 30, "hp": 57, "catch_rate": 75, "speed": 75, "types": ["steel", "fairy"]}];
w[708] = [{"introduced_in": 15, "name": "Phantump", "weight": 70, "hp": 43, "catch_rate": 120, "speed": 38, "types": ["ghost", "grass"]}];
w[709] = [{"introduced_in": 15, "name": "Trevenant", "weight": 710, "hp": 85, "catch_rate": 60, "speed": 56, "types": ["ghost", "grass"]}];
w[710] = [{"introduced_in": 15, "name": "Average Pumpkaboo", "weight": 50, "hp": 49, "catch_rate": 120, "speed": 51, "types": ["ghost", "grass"]}, {"introduced_in": 15, "name": "Small Pumpkaboo", "weight": 35, "hp": 44, "catch_rate": 120, "speed": 56, "types": ["ghost", "grass"]}, {"introduced_in": 15, "name": "Large Pumpkaboo", "weight": 75, "hp": 54, "catch_rate": 120, "speed": 46, "types": ["ghost", "grass"]}, {"introduced_in": 15, "name": "Super Pumpkaboo", "weight": 150, "hp": 59, "catch_rate": 120, "speed": 41, "types": ["ghost", "grass"]}];
w[711] = [{"introduced_in": 15, "name": "Average Gourgeist", "weight": 125, "hp": 65, "catch_rate": 60, "speed": 84, "types": ["ghost", "grass"]}, {"introduced_in": 15, "name": "Small Gourgeist", "weight": 95, "hp": 55, "catch_rate": 60, "speed": 99, "types": ["ghost", "grass"]}, {"introduced_in": 15, "name": "Large Gourgeist", "weight": 140, "hp": 75, "catch_rate": 60, "speed": 69, "types": ["ghost", "grass"]}, {"introduced_in": 15, "name": "Super Gourgeist", "weight": 390, "hp": 85, "catch_rate": 60, "speed": 54, "types": ["ghost", "grass"]}];
w[712] = [{"introduced_in": 15, "name": "Bergmite", "weight": 995, "hp": 55, "catch_rate": 190, "speed": 28, "types": ["ice"]}];
w[713] = [{"introduced_in": 15, "name": "Avalugg", "weight": 5050, "hp": 95, "catch_rate": 55, "speed": 28, "types": ["ice"]}];
w[714] = [{"introduced_in": 15, "name": "Noibat", "weight": 80, "hp": 40, "catch_rate": 190, "speed": 55, "types": ["flying", "dragon"]}];
w[715] = [{"introduced_in": 15, "name": "Noivern", "weight": 850, "hp": 85, "catch_rate": 45, "speed": 123, "types": ["flying", "dragon"]}];
w[716] = [{"introduced_in": 15, "name": "Xerneas", "weight": 2150, "hp": 126, "catch_rate": 45, "speed": 99, "types": ["fairy"]}];
w[717] = [{"introduced_in": 15, "name": "Yveltal", "weight": 2030, "hp": 126, "catch_rate": 45, "speed": 99, "types": ["dark", "flying"]}];
w[718] = [{"introduced_in": 15, "name": "Zygarde", "weight": 3050, "hp": 108, "catch_rate": 3, "speed": 95, "types": ["dragon", "ground"]}, {"introduced_in": 17, "name": "10% Zygarde", "weight": 335, "hp": 54, "catch_rate": 3, "speed": 115, "types": ["dragon", "ground"]}, {"introduced_in": 17, "name": "50% Zygarde", "weight": 3050, "hp": 108, "catch_rate": 3, "speed": 95, "types": ["dragon", "ground"]}, {"introduced_in": 17, "name": "Complete Zygarde", "weight": 6100, "hp": 216, "catch_rate": 3, "speed": 85, "types": ["dragon", "ground"]}];
w[719] = [{"introduced_in": 15, "name": "Diancie", "weight": 88, "hp": 50, "catch_rate": 3, "speed": 50, "types": ["rock", "fairy"]}, {"introduced_in": 16, "name": "Mega Diancie", "weight": 278, "hp": 50, "catch_rate": 3, "speed": 110, "types": ["rock", "fairy"]}];
w[720] = [{"introduced_in": 15, "name": "Confined Hoopa", "weight": 90, "hp": 80, "catch_rate": 3, "speed": 70, "types": ["psychic", "ghost"]}, {"introduced_in": 16, "name": "Hoopa Unbound", "weight": 4900, "hp": 80, "catch_rate": 3, "speed": 80, "types": ["psychic", "dark"]}];
w[721] = [{"introduced_in": 15, "name": "Volcanion", "weight": 1950, "hp": 80, "catch_rate": 3, "speed": 70, "types": ["fire", "water"]}];
w[722] = [{"introduced_in": 17, "name": "Rowlet", "weight": 15, "hp": 68, "catch_rate": 45, "speed": 42, "types": ["grass", "flying"]}];
w[723] = [{"introduced_in": 17, "name": "Dartrix", "weight": 160, "hp": 78, "catch_rate": 45, "speed": 52, "types": ["grass", "flying"]}];
w[724] = [{"introduced_in": 17, "name": "Decidueye", "weight": 366, "hp": 78, "catch_rate": 45, "speed": 70, "types": ["grass", "ghost"]}];
w[725] = [{"introduced_in": 17, "name": "Litten", "weight": 43, "hp": 45, "catch_rate": 45, "speed": 70, "types": ["fire"]}];
w[726] = [{"introduced_in": 17, "name": "Torracat", "weight": 250, "hp": 65, "catch_rate": 45, "speed": 90, "types": ["fire"]}];
w[727] = [{"introduced_in": 17, "name": "Incineroar", "weight": 830, "hp": 95, "catch_rate": 45, "speed": 60, "types": ["fire", "dark"]}];
w[728] = [{"introduced_in": 17, "name": "Popplio", "weight": 75, "hp": 50, "catch_rate": 45, "speed": 40, "types": ["water"]}];
w[729] = [{"introduced_in": 17, "name": "Brionne", "weight": 175, "hp": 60, "catch_rate": 45, "speed": 50, "types": ["water"]}];
w[730] = [{"introduced_in": 17, "name": "Primarina", "weight": 440, "hp": 80, "catch_rate": 45, "speed": 60, "types": ["water", "fairy"]}];
w[731] = [{"introduced_in": 17, "name": "Pikipek", "weight": 12, "hp": 35, "catch_rate": 255, "speed": 65, "types": ["normal", "flying"]}];
w[732] = [{"introduced_in": 17, "name": "Trumbeak", "weight": 148, "hp": 55, "catch_rate": 120, "speed": 75, "types": ["normal", "flying"]}];
w[733] = [{"introduced_in": 17, "name": "Toucannon", "weight": 260, "hp": 80, "catch_rate": 45, "speed": 60, "types": ["normal", "flying"]}];
w[734] = [{"introduced_in": 17, "name": "Yungoos", "weight": 60, "hp": 48, "catch_rate": 255, "speed": 45, "types": ["normal"]}];
w[735] = [{"introduced_in": 17, "name": "Gumshoos", "weight": 142, "hp": 88, "catch_rate": 127, "speed": 45, "types": ["normal"]}, {"introduced_in": 17, "name": "Totem Gumshoos", "weight": 600, "hp": 88, "catch_rate": 127, "speed": 45, "types": ["normal"]}];
w[736] = [{"introduced_in": 17, "name": "Grubbin", "weight": 44, "hp": 47, "catch_rate": 255, "speed": 46, "types": ["bug"]}];
w[737] = [{"introduced_in": 17, "name": "Charjabug", "weight": 105, "hp": 57, "catch_rate": 120, "speed": 36, "types": ["bug", "electric"]}];
w[738] = [{"introduced_in": 17, "name": "Vikavolt", "weight": 450, "hp": 77, "catch_rate": 45, "speed": 43, "types": ["bug", "electric"]}, {"introduced_in": 17, "name": "Totem Vikavolt", "weight": 1475, "hp": 77, "catch_rate": 45, "speed": 43, "types": ["bug", "electric"]}];
w[739] = [{"introduced_in": 17, "name": "Crabrawler", "weight": 70, "hp": 47, "catch_rate": 225, "speed": 63, "types": ["fighting"]}];
w[740] = [{"introduced_in": 17, "name": "Crabominable", "weight": 1800, "hp": 97, "catch_rate": 60, "speed": 43, "types": ["fighting", "ice"]}];
w[741] = [{"introduced_in": 17, "name": "Baile Oricorio", "weight": 34, "hp": 75, "catch_rate": 45, "speed": 93, "types": ["fire", "flying"]}, {"introduced_in": 17, "name": "Pom-pom Oricorio", "weight": 34, "hp": 75, "catch_rate": 45, "speed": 93, "types": ["electric", "flying"]}, {"introduced_in": 17, "name": "Pa\u2019u Oricorio", "weight": 34, "hp": 75, "catch_rate": 45, "speed": 93, "types": ["psychic", "flying"]}, {"introduced_in": 17, "name": "Sensu Oricorio", "weight": 34, "hp": 75, "catch_rate": 45, "speed": 93, "types": ["ghost", "flying"]}];
w[742] = [{"introduced_in": 17, "name": "Cutiefly", "weight": 2, "hp": 40, "catch_rate": 190, "speed": 84, "types": ["bug", "fairy"]}];
w[743] = [{"introduced_in": 17, "name": "Ribombee", "weight": 5, "hp": 60, "catch_rate": 75, "speed": 124, "types": ["bug", "fairy"]}, {"introduced_in": 18, "name": "Totem Ribombee", "weight": 20, "hp": 60, "catch_rate": 75, "speed": 124, "types": ["bug", "fairy"]}];
w[744] = [{"introduced_in": 17, "name": "Rockruff", "weight": 92, "hp": 45, "catch_rate": 190, "speed": 60, "types": ["rock"]}, {"introduced_in": 18, "name": "Own Tempo Rockruff", "weight": 92, "hp": 45, "catch_rate": 190, "speed": 60, "types": ["rock"]}];
w[745] = [{"introduced_in": 17, "name": "Midday Lycanroc", "weight": 250, "hp": 75, "catch_rate": 90, "speed": 112, "types": ["rock"]}, {"introduced_in": 17, "name": "Midnight Lycanroc", "weight": 250, "hp": 85, "catch_rate": 90, "speed": 82, "types": ["rock"]}, {"introduced_in": 18, "name": "Dusk Lycanroc", "weight": 250, "hp": 75, "catch_rate": 90, "speed": 110, "types": ["rock"]}];
w[746] = [{"introduced_in": 17, "name": "Solo Wishiwashi", "weight": 3, "hp": 45, "catch_rate": 60, "speed": 40, "types": ["water"]}, {"introduced_in": 17, "name": "School Wishiwashi", "weight": 786, "hp": 45, "catch_rate": 60, "speed": 30, "types": ["water"]}];
w[747] = [{"introduced_in": 17, "name": "Mareanie", "weight": 80, "hp": 50, "catch_rate": 190, "speed": 45, "types": ["poison", "water"]}];
w[748] = [{"introduced_in": 17, "name": "Toxapex", "weight": 145, "hp": 50, "catch_rate": 75, "speed": 35, "types": ["poison", "water"]}];
w[749] = [{"introduced_in": 17, "name": "Mudbray", "weight": 1100, "hp": 70, "catch_rate": 190, "speed": 45, "types": ["ground"]}];
w[750] = [{"introduced_in": 17, "name": "Mudsdale", "weight": 9200, "hp": 100, "catch_rate": 60, "speed": 35, "types": ["ground"]}];
w[751] = [{"introduced_in": 17, "name": "Dewpider", "weight": 40, "hp": 38, "catch_rate": 200, "speed": 27, "types": ["water", "bug"]}];
w[752] = [{"introduced_in": 17, "name": "Araquanid", "weight": 820, "hp": 68, "catch_rate": 100, "speed": 42, "types": ["water", "bug"]}, {"introduced_in": 18, "name": "Totem Araquanid", "weight": 2175, "hp": 68, "catch_rate": 100, "speed": 42, "types": ["water", "bug"]}];
w[753] = [{"introduced_in": 17, "name": "Fomantis", "weight": 15, "hp": 40, "catch_rate": 190, "speed": 35, "types": ["grass"]}];
w[754] = [{"introduced_in": 17, "name": "Lurantis", "weight": 185, "hp": 70, "catch_rate": 75, "speed": 45, "types": ["grass"]}, {"introduced_in": 17, "name": "Totem Lurantis", "weight": 580, "hp": 70, "catch_rate": 75, "speed": 45, "types": ["grass"]}];
w[755] = [{"introduced_in": 17, "name": "Morelull", "weight": 15, "hp": 40, "catch_rate": 190, "speed": 15, "types": ["grass", "fairy"]}];
w[756] = [{"introduced_in": 17, "name": "Shiinotic", "weight": 115, "hp": 60, "catch_rate": 75, "speed": 30, "types": ["grass", "fairy"]}];
w[757] = [{"introduced_in": 17, "name": "Salandit", "weight": 48, "hp": 48, "catch_rate": 120, "speed": 77, "types": ["poison", "fire"]}];
w[758] = [{"introduced_in": 17, "name": "Salazzle", "weight": 222, "hp": 68, "catch_rate": 45, "speed": 117, "types": ["poison", "fire"]}, {"introduced_in": 17, "name": "Totem Salazzle", "weight": 810, "hp": 68, "catch_rate": 45, "speed": 117, "types": ["poison", "fire"]}];
w[759] = [{"introduced_in": 17, "name": "Stufful", "weight": 68, "hp": 70, "catch_rate": 140, "speed": 50, "types": ["normal", "fighting"]}];
w[760] = [{"introduced_in": 17, "name": "Bewear", "weight": 1350, "hp": 120, "catch_rate": 70, "speed": 60, "types": ["normal", "fighting"]}];
w[761] = [{"introduced_in": 17, "name": "Bounsweet", "weight": 32, "hp": 42, "catch_rate": 235, "speed": 32, "types": ["grass"]}];
w[762] = [{"introduced_in": 17, "name": "Steenee", "weight": 82, "hp": 52, "catch_rate": 120, "speed": 62, "types": ["grass"]}];
w[763] = [{"introduced_in": 17, "name": "Tsareena", "weight": 214, "hp": 72, "catch_rate": 45, "speed": 72, "types": ["grass"]}];
w[764] = [{"introduced_in": 17, "name": "Comfey", "weight": 3, "hp": 51, "catch_rate": 60, "speed": 100, "types": ["fairy"]}];
w[765] = [{"introduced_in": 17, "name": "Oranguru", "weight": 760, "hp": 90, "catch_rate": 45, "speed": 60, "types": ["normal", "psychic"]}];
w[766] = [{"introduced_in": 17, "name": "Passimian", "weight": 828, "hp": 100, "catch_rate": 45, "speed": 80, "types": ["fighting"]}];
w[767] = [{"introduced_in": 17, "name": "Wimpod", "weight": 120, "hp": 25, "catch_rate": 90, "speed": 80, "types": ["bug", "water"]}];
w[768] = [{"introduced_in": 17, "name": "Golisopod", "weight": 1080, "hp": 75, "catch_rate": 45, "speed": 40, "types": ["bug", "water"]}];
w[769] = [{"introduced_in": 17, "name": "Sandygast", "weight": 700, "hp": 55, "catch_rate": 140, "speed": 15, "types": ["ghost", "ground"]}];
w[770] = [{"introduced_in": 17, "name": "Palossand", "weight": 2500, "hp": 85, "catch_rate": 60, "speed": 35, "types": ["ghost", "ground"]}];
w[771] = [{"introduced_in": 17, "name": "Pyukumuku", "weight": 12, "hp": 55, "catch_rate": 60, "speed": 5, "types": ["water"]}];
w[772] = [{"introduced_in": 17, "name": "Type: Null", "weight": 1205, "hp": 95, "catch_rate": 3, "speed": 59, "types": ["normal"]}];
w[773] = [{"introduced_in": 17, "name": "Silvally", "weight": 1005, "hp": 95, "catch_rate": 3, "speed": 95, "types": ["normal"]}];
w[774] = [{"introduced_in": 17, "name": "Red Meteor Minior", "weight": 400, "hp": 60, "catch_rate": 30, "speed": 60, "types": ["rock", "flying"]}, {"introduced_in": 17, "name": "Orange Meteor Minior", "weight": 400, "hp": 60, "catch_rate": 30, "speed": 60, "types": ["rock", "flying"]}, {"introduced_in": 17, "name": "Yellow Meteor Minior", "weight": 400, "hp": 60, "catch_rate": 30, "speed": 60, "types": ["rock", "flying"]}, {"introduced_in": 17, "name": "Green Meteor Minior", "weight": 400, "hp": 60, "catch_rate": 30, "speed": 60, "types": ["rock", "flying"]}, {"introduced_in": 17, "name": "Blue Meteor Minior", "weight": 400, "hp": 60, "catch_rate": 30, "speed": 60, "types": ["rock", "flying"]}, {"introduced_in": 17, "name": "Indigo Meteor Minior", "weight": 400, "hp": 60, "catch_rate": 30, "speed": 60, "types": ["rock", "flying"]}, {"introduced_in": 17, "name": "Violent Meteor Minior", "weight": 400, "hp": 60, "catch_rate": 30, "speed": 60, "types": ["rock", "flying"]}, {"introduced_in": 17, "name": "Red Core Minior", "weight": 3, "hp": 60, "catch_rate": 30, "speed": 120, "types": ["rock", "flying"]}, {"introduced_in": 17, "name": "Orange Core Minior", "weight": 3, "hp": 60, "catch_rate": 30, "speed": 120, "types": ["rock", "flying"]}, {"introduced_in": 17, "name": "Yellow Core Minior", "weight": 3, "hp": 60, "catch_rate": 30, "speed": 120, "types": ["rock", "flying"]}, {"introduced_in": 17, "name": "Green Core Minior", "weight": 3, "hp": 60, "catch_rate": 30, "speed": 120, "types": ["rock", "flying"]}, {"introduced_in": 17, "name": "Blue Core Minior", "weight": 3, "hp": 60, "catch_rate": 30, "speed": 120, "types": ["rock", "flying"]}, {"introduced_in": 17, "name": "Indigo Core Minior", "weight": 3, "hp": 60, "catch_rate": 30, "speed": 120, "types": ["rock", "flying"]}, {"introduced_in": 17, "name": "Violet Core Minior", "weight": 3, "hp": 60, "catch_rate": 30, "speed": 120, "types": ["rock", "flying"]}];
w[775] = [{"introduced_in": 17, "name": "Komala", "weight": 199, "hp": 65, "catch_rate": 45, "speed": 65, "types": ["normal"]}];
w[776] = [{"introduced_in": 17, "name": "Turtonator", "weight": 2120, "hp": 60, "catch_rate": 70, "speed": 36, "types": ["fire", "dragon"]}];
w[777] = [{"introduced_in": 17, "name": "Togedemaru", "weight": 33, "hp": 65, "catch_rate": 180, "speed": 96, "types": ["electric", "steel"]}, {"introduced_in": 18, "name": "Totem Togedemaru", "weight": 130, "hp": 65, "catch_rate": 180, "speed": 96, "types": ["electric", "steel"]}];
w[778] = [{"introduced_in": 17, "name": "Disguised Mimikyu", "weight": 7, "hp": 55, "catch_rate": 45, "speed": 96, "types": ["ghost", "fairy"]}, {"introduced_in": 17, "name": "Busted Mimikyu", "weight": 7, "hp": 55, "catch_rate": 45, "speed": 96, "types": ["ghost", "fairy"]}, {"introduced_in": 17, "name": "Totem Disguised Mimikyu", "weight": 28, "hp": 55, "catch_rate": 45, "speed": 96, "types": ["ghost", "fairy"]}, {"introduced_in": 17, "name": "Totem Busted Mimikyu", "weight": 28, "hp": 55, "catch_rate": 45, "speed": 96, "types": ["ghost", "fairy"]}];
w[779] = [{"introduced_in": 17, "name": "Bruxish", "weight": 190, "hp": 68, "catch_rate": 80, "speed": 92, "types": ["water", "psychic"]}];
w[780] = [{"introduced_in": 17, "name": "Drampa", "weight": 1850, "hp": 78, "catch_rate": 70, "speed": 36, "types": ["normal", "dragon"]}];
w[781] = [{"introduced_in": 17, "name": "Dhelmise", "weight": 2100, "hp": 70, "catch_rate": 25, "speed": 40, "types": ["ghost", "grass"]}];
w[782] = [{"introduced_in": 17, "name": "Jangmo-o", "weight": 297, "hp": 45, "catch_rate": 45, "speed": 45, "types": ["dragon"]}];
w[783] = [{"introduced_in": 17, "name": "Hakamo-o", "weight": 470, "hp": 55, "catch_rate": 45, "speed": 65, "types": ["dragon", "fighting"]}];
w[784] = [{"introduced_in": 17, "name": "Kommo-o", "weight": 782, "hp": 75, "catch_rate": 45, "speed": 85, "types": ["dragon", "fighting"]}, {"introduced_in": 17, "name": "Totem Kommo\u2019o", "weight": 2075, "hp": 75, "catch_rate": 45, "speed": 85, "types": ["dragon", "fighting"]}];
w[785] = [{"introduced_in": 17, "name": "Tapu Koko", "weight": 205, "hp": 70, "catch_rate": 3, "speed": 130, "types": ["electric", "fairy"]}];
w[786] = [{"introduced_in": 17, "name": "Tapu Lele", "weight": 186, "hp": 70, "catch_rate": 3, "speed": 95, "types": ["psychic", "fairy"]}];
w[787] = [{"introduced_in": 17, "name": "Tapu Bulu", "weight": 455, "hp": 70, "catch_rate": 3, "speed": 75, "types": ["grass", "fairy"]}];
w[788] = [{"introduced_in": 17, "name": "Tapu Fini", "weight": 212, "hp": 70, "catch_rate": 3, "speed": 85, "types": ["water", "fairy"]}];
w[789] = [{"introduced_in": 17, "name": "Cosmog", "weight": 1, "hp": 43, "catch_rate": 45, "speed": 37, "types": ["psychic"]}];
w[790] = [{"introduced_in": 17, "name": "Cosmoem", "weight": 9999, "hp": 43, "catch_rate": 45, "speed": 37, "types": ["psychic"]}];
w[791] = [{"introduced_in": 17, "name": "Solgaleo", "weight": 2300, "hp": 137, "catch_rate": 45, "speed": 97, "types": ["psychic", "steel"]}];
w[792] = [{"introduced_in": 17, "name": "Lunala", "weight": 1200, "hp": 137, "catch_rate": 45, "speed": 97, "types": ["psychic", "ghost"]}];
w[793] = [{"introduced_in": 17, "name": "Nihilego", "weight": 555, "hp": 109, "catch_rate": 45, "speed": 103, "types": ["rock", "poison"]}];
w[794] = [{"introduced_in": 17, "name": "Buzzwole", "weight": 3336, "hp": 107, "catch_rate": 45, "speed": 79, "types": ["bug", "fighting"]}];
w[795] = [{"introduced_in": 17, "name": "Pheromosa", "weight": 250, "hp": 71, "catch_rate": 45, "speed": 151, "types": ["bug", "fighting"]}];
w[796] = [{"introduced_in": 17, "name": "Xurkitree", "weight": 1000, "hp": 83, "catch_rate": 45, "speed": 83, "types": ["electric"]}];
w[797] = [{"introduced_in": 17, "name": "Celesteela", "weight": 9999, "hp": 97, "catch_rate": 45, "speed": 61, "types": ["steel", "flying"]}];
w[798] = [{"introduced_in": 17, "name": "Kartana", "weight": 1, "hp": 59, "catch_rate": 45, "speed": 109, "types": ["grass", "steel"]}];
w[799] = [{"introduced_in": 17, "name": "Guzzlord", "weight": 8880, "hp": 223, "catch_rate": 45, "speed": 43, "types": ["dark", "dragon"]}];
w[800] = [{"introduced_in": 17, "name": "Necrozma", "weight": 2300, "hp": 97, "catch_rate": 255, "speed": 79, "types": ["psychic"]}, {"introduced_in": 18, "name": "Dusk Necrozma", "weight": 4600, "hp": 97, "catch_rate": 255, "speed": 77, "types": ["psychic", "steel"]}, {"introduced_in": 18, "name": "Dawn Necrozma", "weight": 3500, "hp": 97, "catch_rate": 255, "speed": 77, "types": ["psychic", "ghost"]}, {"introduced_in": 18, "name": "Ultra Necrozma", "weight": 2300, "hp": 97, "catch_rate": 255, "speed": 129, "types": ["psychic", "dragon"]}];
w[801] = [{"introduced_in": 17, "name": "Magearna", "weight": 805, "hp": 80, "catch_rate": 3, "speed": 65, "types": ["steel", "fairy"]}, {"introduced_in": 17, "name": "Original Magearna", "weight": 805, "hp": 80, "catch_rate": 3, "speed": 65, "types": ["steel", "fairy"]}];
w[802] = [{"introduced_in": 17, "name": "Marshadow", "weight": 222, "hp": 90, "catch_rate": 3, "speed": 125, "types": ["fighting", "ghost"]}];
w[803] = [{"introduced_in": 18, "name": "Poipole", "weight": 18, "hp": 67, "catch_rate": 45, "speed": 73, "types": ["poison"]}];
w[804] = [{"introduced_in": 18, "name": "Naganadel", "weight": 1500, "hp": 73, "catch_rate": 45, "speed": 121, "types": ["poison", "dragon"]}];
w[805] = [{"introduced_in": 18, "name": "Stakataka", "weight": 8200, "hp": 61, "catch_rate": 30, "speed": 13, "types": ["rock", "steel"]}];
w[806] = [{"introduced_in": 18, "name": "Blacephalon", "weight": 130, "hp": 53, "catch_rate": 30, "speed": 107, "types": ["fire", "ghost"]}];
w[807] = [{"introduced_in": 18, "name": "Zeraora", "weight": 445, "hp": 88, "catch_rate": 3, "speed": 143, "types": ["electric"]}];


var num_wobbles = ["No wobbles", "One wobble", "Two wobbles", "Three wobbles"];
var msg = ["", "", "", ""];
var status_mods;
var max_iv = 31;
var version_group = 17;

var $results;

function show_percent(chance) {
   // Print a nice percentage value for the given chance out of 1.
   return Math.round(chance * 100000) / 1000;
}

function ChanceObj() {
   this.success = 0;
   this.wobble3 = 0;
   this.wobble2 = 0;
   this.wobble1 = 0;
   this.wobble0 = 0;
   this.critical = 0;
   this.crit_success = 0;
   this.freeze = false;
   this.extra_msg = "";
   this.comp_val = 0;
}

function get_version_group() {
   return version_group;
}

function copy_object(obj) {
   var new_obj = {};
   for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
         new_obj[key] = obj[key];
      }
   }
   return new_obj;
}

function get_pokemon(pokemon, form) {
   // Get Pokémon data, with version-dependent stat modifications.
   var mon = copy_object(w[pokemon][form || 0]);
   var version_group = get_version_group();

   if (version_group < 18) {
      // Unapply US/UM stat changes
      switch (pokemon) {
         case 794: // Buzzwole
            mon.catch_rate = 25;
            break;
         case 795: // Pheromosa
            mon.catch_rate = 255;
            break;
         case 796: // Xurkitree
            mon.catch_rate = 30;
            break;
         case 797: // Celesteela
            mon.catch_rate = 25;
            break;
         case 798: // Kartana
            mon.catch_rate = 255;
            break;
         case 799: // Guzzlord
            mon.catch_rate = 15;
            break;
         case 800: // Necrozma
            mon.catch_rate = 3;
            break;
      }
   }

   if (version_group < 17) {
      // Unapply Sun/Moon stat changes
      switch (pokemon) {
         case 85: // Dodrio
            mon.speed = 100;
            break;
         case 101: // Electrode
            mon.speed = 140;
            break;
         case 219: // Magcargo
            mon.hp = 50;
            break;
         case 222: // Corsola
            mon.hp = 55;
            break;
         case 226: // Mantine
            mon.hp = 65;
            break;
         case 284: // Masquerain
            mon.speed = 60;
            break;
         case 301: // Delcatty
            mon.speed = 70;
            break;
         case 337: // Lunatone
         case 338: // Solrock
            mon.hp = 70;
            break;
         case 358: // Chimecho
            mon.hp = 65;
            break;
         case 527: // Woobat
            mon.hp = 55;
            break;
      }
   }

   if (version_group < 16) {
      // Unapply OR/AS catch rate changes
      switch (pokemon) {
         case 382:
         case 383:
            // Groudon, Kyogre
            mon.catch_rate = 5;
            break;
         case 483:
         case 484:
            // Dialga, Palkia
            mon.catch_rate = 30;
            break;
         case 643:
         case 644:
            // Reshiram, Zekrom
            mon.catch_rate = 45;
            break;
         case 384:
            // Rayquaza
            mon.catch_rate = 3;
            break;
      }
   }

   if (version_group < 15) {
      // Unapply X/Y stat changes
      switch (pokemon) {
         case 18: // Pidgeot
            mon.speed = 91;
            break;
         case 26: // Raichu
            mon.speed = 100;
            break;
      }
   }

   if (version_group < 11 && pokemon === 479) {
      // Rotom forms are all Electric/Ghost prior to gen 5.
      // We don't have to bother fiddling with the types of every other Pokémon whose types have changed, since the only ones that matter for capture calculations are Bug and Water (because of the Net Ball) and the only other type changes that have happened didn't touch either of those types.
      mon.types = ["electric", "ghost"];
   }

   if (version_group < 5 && pokemon === 20) {
      // Raticate's catch rate changed in R/S/E
      mon.catch_rate = 90;
   }

   if (version_group === 2) {
      // Dragonair and Dragonite's catch rates changed in Yellow
      if (pokemon === 148) {
         mon.catch_rate = 27;
      } else if (pokemon === 149) {
         mon.catch_rate = 9;
      }
   }
   return mon;
}

function get_hp() {
   // -1 as a return value from this function stands for False Swiped to 1 HP.
   if ($("#hp1").is(":checked")) {
      // False Swiped to 1 HP
      return -1;
   }
   else {
      // Assume we're looking at a percentage of the max HP
      var percent = $("#percent").val();
      if (isNaN(percent) || percent > 100) {
         return 100;
      }
      else if (percent <= 0) {
         return 1;
      }
      else {
         return percent;
      }
   }
}

function calc_cur_hp(max_hp) {
   var percent = get_hp();
   if (percent == -1) {
      // False Swiped to 1 HP
      return 1;
   }
   else {
      return Math.max(1, Math.round(max_hp * percent / 100));
   }
}

function get_hp_bar_class(hp) {
   if (hp < 20) {
      return "low_hp";
   }
   else if (hp < 50) {
      return "medium_hp";
   }
   else {
      return "high_hp";
   }
}

function update_hp() {
   var hpfill;
   var color;
   var hp = get_hp();
   if (hp == -1) {
      // False Swiped to 1 HP
      hpfill = 1;
   }
   else {
      hpfill = Math.ceil(hp / 100 * 48);
   }
   $("#curhp").width(hpfill * 2);
   $("#curhp").attr("class", get_hp_bar_class(hp));
}

function shake_bar(span_class, title, message, chance) {
   var $shake_bar = $("<span></span>").addClass(span_class);
   var msg = '';
   if (message != '') {
      msg = ' - ' + message;
   }
   var percent = show_percent(chance);
   $shake_bar.attr("title", title + ' (' + percent + '%)' + msg).css('width', percent + '%');
   return $shake_bar;
}

function pluralize(num, word, plural_word) {
   if (!plural_word) {
      plural_word = word + "s";
   }
   if (num === 1) {
      return word;
   }
   else {
      return plural_word;
   }
}

function num_balls(desired_chance, ball_chance) {
   // Calculates the number of balls needed to have at least a desired_chance chance of capturing the Pokémon.
   return Math.ceil(Math.log(1 - desired_chance) / Math.log(1 - ball_chance));
}

function num_balls_message(ball_chance) {
   if (ball_chance === 0) {
      return "Thus, you will never capture it.";
   }
   else if (ball_chance === 1) {
      return "Thus, you are guaranteed to get it in a single ball.";
   }
   else {
      var fifty_num_balls = num_balls(0.5, ball_chance);
      var ninetyfive_num_balls = num_balls(0.95, ball_chance);
      if (fifty_num_balls == ninetyfive_num_balls) {
         return "Thus, you have at least a 95% chance of catching it within " + ninetyfive_num_balls + " " + pluralize(ninetyfive_num_balls, "ball") + ".";
      }
      else {
         return "Thus, you have at least a 50% chance of catching it within " + fifty_num_balls + " " + pluralize(fifty_num_balls, "ball") + " and at least a 95% chance of catching it within " + ninetyfive_num_balls + " " + pluralize(ninetyfive_num_balls, "ball") + ".";
      }
   }
}

function write_results(chance_obj, print_chance, extra_message) {
   if (extra_message == undefined) {
      extra_message = "";
   }
   var $results_p = $("<p></p>");
   if (!print_chance) {
      $results_p.html(extra_message);
   }
   else {
      var $shakebar = $("<div></div>").addClass("shakebar");
      if (chance_obj.critical == 0) {
         $results_p.html("You have a <strong>" + show_percent(chance_obj.success) + "%</strong> chance of capturing it per ball. " + num_balls_message(chance_obj.success) + extra_message);
      }
      else {
         var finalchance = chance_obj.critical * chance_obj.crit_success + (1 - chance_obj.critical) * chance_obj.success;
         $results_p.html("You have a " + show_percent(chance_obj.critical) + "% chance of a critical capture, which then has a " + show_percent(chance_obj.crit_success) + "% chance of succeeding. Failing that, you have a " + show_percent(chance_obj.success) + "% chance of succeeding with a normal capture. All in all, this amounts to a <strong>" + show_percent(finalchance) + "%</strong> chance per ball. " + num_balls_message(finalchance) + extra_message);
         
         $shakebar.append(shake_bar('success', 'Successful critical capture', '', chance_obj.critical * chance_obj.crit_success));
         if (chance_obj.crit_success < 1) {
            $shakebar.append(shake_bar('wobble1', 'Failed critical capture', msg[0], chance_obj.critical * (1 - chance_obj.crit_success)));
         }
      }
      $shakebar.append(shake_bar('success', 'Successful capture', '', (1 - chance_obj.critical) * chance_obj.success));
      for (var i = 3; i >= 0; i--) {
         if (chance_obj['wobble' + i] > 0) {
            $shakebar.append(shake_bar('wobble' + i, num_wobbles[i], msg[i], (1 - chance_obj.critical) * chance_obj['wobble' + i]));
         }
      }
      
      $results.append($shakebar);
   }
   $results.append($results_p);
}

function get_catch_rate(pokemon, ball) {
   return get_pokemon(pokemon, 0).catch_rate;
}

function get_ball_bonus(ball) {
   return 1;
}

function calculate() {
   var pokemon = $("#pokemon").val() * 1;

   var ball = $("#ball").val();

   var form = $("#form").val() * 1 || 0;

   // C value, the Pokémon's catch rate (possibly modified by the ball)
   var c = get_catch_rate(pokemon, ball);

   // B value, the ball bonus
   var b = get_ball_bonus(ball);

   // S value, the status
   var s = status_mods[$("#status").val()];

   // The Pokémon's level
   if ($("#level:focus").val() === "") {
      // The user is probably in the middle of typing a level - just leave everything alone
      return;
   }

   var level = $("#level").val() * 1;
   if (isNaN(level) || Math.floor(level) != level || level < 1 || level > 100) {
      alert("Please enter a valid integer between 1 and 100 as the wild Pokémon's level.");
      $("#level").val(1);
      return false;
   }

   var basehp = get_pokemon(pokemon, form).hp;

   // E value, the Entralink modifier
   var $entralink = $("#entralink");
   var e = 1;
   if ($entralink.length > 0) {
      e = $entralink.val() * 1;
   }

   // Pokédex completion level:
   // Since both the thick grass modifier and the Pokédex modifier in the critical capture chance formula cut along the same lines, i.e. change the modifier between the same values, we can immediately convert the number of caught Pokémon to a "category" for the purposes of the later calculations.
   var $pokedex = $("#pokedex");
   var dexcat = 0;
   if ($pokedex.length > 0) {
      var dex = $pokedex.val() * 1;
      if (dex > 30) {
         dexcat++;
      }
      if (dex > 150) {
         dexcat++;
      }
      if (dex > 300) {
         dexcat++;
      }
      if (dex > 450) {
         dexcat++;
      }
      if (dex > 600) {
         dexcat++;
      }
   }

   // G value, the grass modifier
   var g = 1;
   var gvals = [1229/4096, 0.5, 2867/4096, 3277/4096, 3686/4096, 1];
   if ($("#thickgrass").is(":checked")) {
      // In thick grass
      g = gvals[dexcat];
   }

   // P value, the Pokédex modifier
   var pvals = [0, 0.5, 1, 1.5, 2, 2.5];
   var p = pvals[dexcat];

   var details = $("#details").is(":checked");

   function show_results(start_iv, end_iv, chance) {
      if (details) {
         var $results_heading = $("<h4></h4>");
         var iv_string;
         if (start_iv == end_iv) {
            iv_string = start_iv.toString();
         }
         else {
            iv_string = start_iv + "-" + end_iv;
         }
         $results_heading.text("HP IV of " + iv_string).appendTo($results);
      }
      write_results(chance, chance.success > 0 || !chance.extra_msg, chance.extra_msg);
   }

   $results.html("");

   if (b === -1) {
      // A ball that always succeeds
      var chance_obj = new ChanceObj();
      chance_obj.success = 1;
      show_results(0, max_iv, chance_obj);
      return;
   }

   // Calculate X for every possible IV
   var run_start = 0;
   var last_x = 0;
   var last_chance;
   var x_array = [];
   for (var iv = 0; iv <= max_iv; iv++) {
      // Stat formula for the Pokémon's max HP
      var m;
      if (basehp == 1) {
         // Shedinja always has 1 HP
         m = 1;
      }
      else {
         m = Math.floor((2 * basehp + (max_iv == 15 ? 2 * iv : iv)) * level / 100 + level + 10);
      }
      var hp = calc_cur_hp(m);

      var x = calc_x(m, hp, c, b, s, g, e);
      if (details) {
         if (iv == 0) {
            last_x = x;
            last_chance = calc_chances([x], c, b, s, p);
         }
         else if (x != last_x) {
            // This is the end of a run of identical X values; see if the chance itself changed
            var chance = calc_chances([x], c, b, s, p);
            if (chance.comp_val != last_chance.comp_val) {
               // This is also the end of a run of identical chances
               show_results(run_start, iv-1, last_chance);
               run_start = iv;
               last_chance = chance;
            }
            last_x = x;
         }
         if (iv == max_iv) {
            show_results(run_start, iv, calc_chances([x], c, b, s, p));
         }
      }
      else {
         x_array[iv] = x;
      }
   }
   if (!details) {
      show_results(0, max_iv, calc_chances(x_array, c, b, s, p));
   }
}

$(document).ready(function() {
   $results = $("#results");
   $("#percenthp, #hp1").click(update_hp);
   $("#percent").keyup(update_hp);
   $("#hpbar").click(function(event) {
      var offset_x = event.pageX - $(this).offset().left - $("#curhp").position().left;
      if (offset_x < 1 && $("#hp1").length > 0) {
         $("#hp1").prop("checked", true);
      }
      else {
         $("#percent").val(Math.max(1, Math.min(100, Math.round(offset_x * 100 / 96))));
         $("#percenthp").prop("checked", true);
      }
      update_hp();
      calculate();
   });

   $("#pokemon").change(function() {
      if ($("#form").length === 0) {
         return;
      }
        $("#form").empty();
      var pokemon = $(this).val();
      for (var i = 0; i < w[pokemon].length; i++) {
         if (w[pokemon][i].introduced_in <= version_group) {
            $("#form").append('<option value="' + i + '">' + w[pokemon][i].name + '</option>');
         }
      }
      if ($("#form").children().length === 1) {
         $("#pick-form").hide();
      }
      else {
         $("#pick-form").show();
      }
   }).change();

   $("#calcform input[type=radio], #calcform input[type=checkbox], #calcform select").change(calculate);
   $("#calcform input[type=text]").keyup(calculate);

   $(".ball-options").hide().filter("." + $("#ball").val()).show();
   $("#ball").change(function() {
      $(".ball-options").hide().filter("." + $("#ball").val()).show();
   });
   update_hp();
   calculate();
});
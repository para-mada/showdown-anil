export const Pokedex: import('../sim/dex-species').SpeciesDataTable = {
// Tercer combate
	flapple: {
		inherit: true,
		baseStats: {hp: 110, atk:109, def: 105, spa: 75, spd: 85, spe: 56},
    },
	slowbrogalar: {
		num: 80,
		name: "Slowbro-Galar",
		baseSpecies: "Slowbro",
		forme: "Galar",
		types: ["Poison", "Psychic"],
		baseStats: { hp: 95, atk: 65, def: 80, spa: 110, spd: 110, spe: 30 },
		abilities: { 0: "Quick Draw", 1: "Own Tempo", H: "Regenerator" },
		heightm: 1.6,
		weightkg: 70.5,
		color: "Pink",
		prevo: "Slowpoke-Galar",
		evoType: "useItem",
		evoItem: "Galarica Cuff",
		eggGroups: ["Monster", "Water 1"],
	},
// Segundo combate
	// Frigo
		lapras: {
			inherit: true,
			baseStats: {hp: 130, atk: 75, def: 80, spa: 95, spd: 95, spe: 60},
		},
		slitherwing: {
			num: 988,
			name: "Slither Wing",
			types: ["Bug", "Dragon"],
			gender: "N",
			baseStats: { hp: 85, atk: 135, def: 105, spa: 60, spd: 65, spe: 100 },
			abilities: { 0: "Protosynthesis" },
			heightm: 3.2,
			weightkg: 92,
			color: "White",
			tags: ["Paradox"],
			eggGroups: ["Undiscovered"],
		},
		flapplegmax: {
			num: 841,
			name: "Flapple-Gmax",
			baseSpecies: "Flapple",
			forme: "Gmax",
			types: ["Grass", "Dragon"],
			baseStats: { hp: 110, atk: 125, def: 100, spa: 100, spd: 100, spe: 50 },
			abilities: { 0: "Parental Bond", 1: "Parental Bond", H: "Parental Bond" },
			heightm: 24,
			weightkg: 0,
			color: "Green",
			eggGroups: ["Grass", "Dragon"],
			changesFrom: "Flapple",
		},
		orbeetlegmax: {
			num: 826,
			name: "Orbeetle-Gmax",
			baseSpecies: "Orbeetle",
			forme: "Gmax",
			 isMega: true,                  // ← importante
			battleOnly: "Orbeetle",        // ← importante (solo existe en batalla tras mega)
			changesFrom: "Orbeetle",       // ← opcional pero útil para UI
			types: ["Bug", "Psychic"],
			baseStats: { hp: 60, atk: 65, def: 130, spa: 110, spd: 140, spe: 100 },
			abilities: { 0: "Speed Boost", 1: "Speed Boost", H: "Speed Boost" },
			heightm: 14,
			weightkg: 0,
			color: "Red",
			eggGroups: ["Bug"],
			requiredItem: "Orbeetlenita",
	},
	// Fola
		gallademega: {
			num: 475,
			name: "Gallade-Mega",
			baseSpecies: "Gallade",
			forme: "Mega",
			types: ["Psychic", "Fighting"],
			gender: "M",
			baseStats: { hp: 68, atk: 165, def: 95, spa: 65, spd: 115, spe: 110 },
			abilities: { 0: "Acometida" },
			heightm: 1.6,
			weightkg: 56.4,
			color: "White",
			eggGroups: ["Amorphous"],
			requiredItem: "Galladite",
		},
		trevenant: {
			inherit: true,
			baseStats: {hp: 85, atk: 110, def: 86, spa: 65, spd: 82, spe: 56},
		},
// Primer Combate
	// Pokes de Fola
	drizzile: {
		inherit: true,
		types: ["Water", "Dark"],
		baseStats: {hp: 65, atk: 50, def: 55, spa: 95, spd: 50, spe: 90},
    },
	inteleon: {
		inherit: true,
		types: ["Water", "Dark"],
		baseStats: {hp: 70, atk: 85, def: 65, spa: 125, spd: 65, spe: 120},
    },
	feraligatr: {
		inherit: true,
		types: ["Water", "Dark"],
		baseStats: {hp: 85, atk: 105, def: 100, spa: 79, spd: 83, spe: 78},
    },
	vikavolt: {
		inherit: true,
		baseStats: {hp: 77, atk: 70, def: 90, spa: 145, spd: 75, spe: 43},
    },
	delcatty: {
		inherit: true,
		types: ["Normal", "Fairy"],
		baseStats: { hp: 90, atk: 95, def: 85, spa: 95, spd: 75, spe: 100 },
	},
	samurott: {
		inherit: true,
		types: ["Water", "Fighting"],
		baseStats: {hp: 95, atk: 108, def: 85, spa: 100, spd: 70, spe: 70},
    },
	loudred: {
		inherit: true,
		baseStats: {hp: 84, atk: 80, def: 43, spa: 80, spd: 43, spe: 48},
    },
	torterra: {
		inherit: true,
		baseStats: {hp: 95, atk:109, def: 105, spa: 75, spd: 85, spe: 56},
    },
	drednaw: {
		inherit: true,
		types: ["Water", "Rock"],
		baseStats: {hp: 90, atk: 115, def: 90, spa: 48, spd: 68, spe: 74},
    },
	rhyperior: {
		inherit: true,
		baseStats: {hp: 115, atk: 140, def: 130, spa: 55, spd: 55, spe: 40},
    },
	weezing: {
		inherit: true,
		baseStats: {hp: 65, atk: 90, def: 120, spa: 95, spd: 70, spe: 60},
    },
	primeape: {
		inherit: true,
		baseStats: {hp: 65, atk: 115, def: 60, spa: 60, spd: 70, spe: 105},
    },
	vanillish: {
		inherit: true,
		types: ["Ice", "Fairy"],
		baseStats: {hp: 51, atk: 65, def: 65, spa: 80, spd: 75, spe: 59},
    },
	vanilluxe: {
		inherit: true,
		types: ["Ice", "Fairy"],
		baseStats: {hp: 71, atk: 75, def: 85, spa: 130, spd: 95, spe: 79},
    },
	swampert: {
		inherit: true,
		baseStats: {hp: 100, atk: 110, def: 90, spa: 85, spd: 90, spe: 60},
    },
	florges: {
		inherit: true,
		baseStats: {hp: 78, atk: 65, def: 68, spa: 112, spd: 154, spe: 75},
    },
	pelipper: {
		inherit: true,
		baseStats: {hp: 80, atk: 50, def: 100, spa: 95, spd: 70, spe: 65},
    },
	jynx: {
		inherit: true,
		baseStats: {hp: 65, atk: 50, def: 35, spa: 115, spd: 95, spe: 105},
    },
	// Pokes de Frigo
	malamar: {
		inherit: true,
		baseStats: {hp: 86, atk: 100, def: 88, spa: 68, spd: 85, spe: 73},
    },
	klinklang: {
		inherit: true,
		baseStats: {hp: 60, atk: 100, def: 115, spa: 70, spd: 85, spe: 90},
    },
	noivern: {
		inherit: true,
		baseStats: {hp: 85, atk: 70, def: 80, spa: 97, spd: 80, spe: 123},
    },
	lokix: {
		inherit: true,
		baseStats: {hp: 71, atk: 112, def: 78, spa: 52, spd: 55, spe: 92},
    },
	// Fin de modificados
	bulbasaur: {
		num: 1,
		name: "Bulbasaur",
		types: ["Grass", "Poison"],
		genderRatio: { M: 0.875, F: 0.125 },
		baseStats: { hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45 },
		abilities: { 0: "Overgrow", H: "Chlorophyll" },
		heightm: 0.7,
		weightkg: 6.9,
		color: "Green",
		evos: ["Ivysaur"],
		eggGroups: ["Monster", "Grass"],
	},
	farfetchd: {
		num: 83,
		name: "Farfetch\u2019d",
		types: ["Normal", "Flying"],
		baseStats: { hp: 85, atk: 100, def: 75, spa: 60, spd: 85, spe: 95 },
		abilities: { 0: "Keen Eye", 1: "Inner Focus", H: "Defiant" },
		heightm: 0.8,
		weightkg: 15,
		color: "Brown",
		evos: ["Sirfetch\u2019d"],
		eggGroups: ["Flying", "Field"],
		otherFormes: ["Farfetch\u2019d-Galar"],
		formeOrder: ["Farfetch\u2019d", "Farfetch\u2019d-Galar"],
	},
};

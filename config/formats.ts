export const Formats: import('../sim/dex-formats').FormatList = [
  { section: "Dualockes Fola" },

  {
    name: "[Gen 9] Fola vs Frigo",
    mod: 'folavsfrigo',            // 
    gameType: 'singles',        // "singles" para combates individuales, "doubles" para combates dobles
    searchShow: true,           // que se muestre en el cliente
    debug: true,

    // Reglas del formato 
    ruleset: [
	
	  // timer
	  'timerstarting = 1200',         // Segundos iniciales por jugador
	  'timeraddperturn = 5',         // Segundos adicionales que se da por turno
	  'timergrace = 5',              // Segundos que tarda en iniciar el Timer después de presionar el botón
	  
	  // Reglas del Formato
	  'adjustlevel = 59',            // Nivel que tendrán todos los pokémon del campo
	  'speciesclause',               // Sólo 1 especia de pokémon por equipo
	  'nicknameclause',              // Los pokémon no pueden repetir MOTE
	  'sleepclausemod',              // Sólo 1 pokémon dormido a la vez
	  'teamtypepreview',             // Permite ver los tipos de los pokémon del rival
      'maxteamsize= 6',              // Cantidad Máxima de pokémon en el equipo
      'Cancel Mod'                   // Deja a los participantes cambiar su elección del turno

    ],
  },
];
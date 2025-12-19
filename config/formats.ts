export const Formats: import('../sim/dex-formats').FormatList = [
  { section: "Pokémon Twitch Cup" },

  {
    name: "[Gen 9] Torneos Pokémon Twitch Cup",
    mod: 'twitchcup',            // 9gen con velocidad de antes de 8va
    gameType: 'doubles',        // "singles" para combates individuales, "doubles" para combates dobles
    searchShow: true,           // que se muestre en el cliente
    debug: true,
	battle: { oldSpeedOrder: true },
	
    // Reglas del formato 
    ruleset: [
	
	  // timer
	  'vgctimer',					// 90 segundos de team preview, 7 minutos por persona, 1 minuto por turno
	  
	  // Reglas del Formato
	  'adjustlevel = 50',            // Nivel que tendrán todos los pokémon del campo
	  'speciesclause',               // Sólo 1 especia de pokémon por equipo
	  'nicknameclause',              // Los pokémon no pueden repetir MOTE
	  'itemclause = 1',              // No objetos repetidos
	  'sleepclausemod',              // Sólo 1 pokémon dormido a la vez
	  'teamtypepreview',             // Permite ver los tipos de los pokémon del rival
	  'forceopenteamsheets',         // Fuerza la lista abierta para que no tengan que aceptar los participantes
	  'teampreview',                 // Vista previa de los equipos
      'maxteamsize= 6',              // Cantidad Máxima de pokémon en el equipo
	  'Picked Team Size = 4',		 // Cantidad a elegir de pokémon
      'Cancel Mod'                  // Deja a los participantes cambiar su elección del turno

    ],
  },
];
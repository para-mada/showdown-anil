"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var formats_exports = {};
__export(formats_exports, {
  Formats: () => Formats
});
module.exports = __toCommonJS(formats_exports);
const Formats = [
  { section: "Pok\xE9mon Twitch Cup" },
  {
    name: "[Gen 9] Torneos Pok\xE9mon Twitch Cup",
    mod: "twitchcup",
    // 9gen con velocidad de antes de 8va
    gameType: "doubles",
    // "singles" para combates individuales, "doubles" para combates dobles
    searchShow: true,
    // que se muestre en el cliente
    debug: true,
    battle: { oldSpeedOrder: true },
    // Reglas del formato 
    ruleset: [
      // timer
      "vgctimer",
      // 90 segundos de team preview, 7 minutos por persona, 1 minuto por turno
      // Reglas del Formato
      "adjustlevel = 50",
      // Nivel que tendrán todos los pokémon del campo
      "speciesclause",
      // Sólo 1 especia de pokémon por equipo
      "nicknameclause",
      // Los pokémon no pueden repetir MOTE
      "itemclause = 1",
      // No objetos repetidos
      "sleepclausemod",
      // Sólo 1 pokémon dormido a la vez
      "teamtypepreview",
      // Permite ver los tipos de los pokémon del rival
      "forceopenteamsheets",
      // Fuerza la lista abierta para que no tengan que aceptar los participantes
      "teampreview",
      // Vista previa de los equipos
      "maxteamsize= 6",
      // Cantidad Máxima de pokémon en el equipo
      "Picked Team Size = 4",
      // Cantidad a elegir de pokémon
      "Cancel Mod"
      // Deja a los participantes cambiar su elección del turno
    ]
  }
];
//# sourceMappingURL=formats.js.map

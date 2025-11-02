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
  { section: "Dualockes Fola" },
  {
    name: "[Gen 9] Fola vs Frigo",
    mod: "folavsfrigo",
    // 
    gameType: "singles",
    // "singles" para combates individuales, "doubles" para combates dobles
    searchShow: true,
    // que se muestre en el cliente
    debug: true,
    // Reglas del formato 
    ruleset: [
      // timer
      "timerstarting = 1200",
      // Segundos iniciales por jugador
      "timeraddperturn = 5",
      // Segundos adicionales que se da por turno
      "timergrace = 5",
      // Segundos que tarda en iniciar el Timer después de presionar el botón
      // Reglas del Formato
      "adjustlevel = 49",
      // Nivel que tendrán todos los pokémon del campo
      "speciesclause",
      // Sólo 1 especia de pokémon por equipo
      "nicknameclause",
      // Los pokémon no pueden repetir MOTE
      "sleepclausemod",
      // Sólo 1 pokémon dormido a la vez
      "teamtypepreview",
      // Permite ver los tipos de los pokémon del rival
      "maxteamsize= 6",
      // Cantidad Máxima de pokémon en el equipo
      "Cancel Mod"
      // Deja a los participantes cambiar su elección del turno
    ]
  }
];
//# sourceMappingURL=formats.js.map

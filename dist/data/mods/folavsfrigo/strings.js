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
var strings_exports = {};
__export(strings_exports, {
  BattleText: () => BattleText
});
module.exports = __toCommonJS(strings_exports);
const BattleText = {
  move: `\xA1{USER} us\xF3 {MOVE}!`,
  damage: `({TARGET} perdi\xF3 el {PERCENT}% de su salud!)`,
  hitcount: `\xA1El Pok\xE9mon fue golpeado {NUM} veces!`,
  switch: `\xA1{PLAYER} envi\xF3 a {POKEMON}!`,
  faint: `\xA1{POKEMON} se ha debilitado!`,
  crit: `\xA1Es un golpe cr\xEDtico!`,
  supereffective: `\xA1Es muy eficaz!`,
  resisted: `\xA1No es muy eficaz!`,
  miss: `\xA1{USER} fall\xF3 el ataque!`,
  status: `{POKEMON} ahora tiene el estado {STATUS}.`,
  boost: `{POKEMON} aument\xF3 su {STAT}.`,
  unboost: `{POKEMON} redujo su {STAT}.`,
  start: `\xA1El combate comenz\xF3 entre {P1} y {P2}!`,
  cant: `{POKEMON} no pudo moverse debido a {REASON}.`,
  prepare: `{USER} se est\xE1 preparando para usar {MOVE}...`,
  end: `\xA1{POKEMON} fue retirado!`,
  immune: `\xA1{POKEMON} es inmune!`,
  fail: `\xA1El movimiento fall\xF3!`,
  item: `{POKEMON} us\xF3 su objeto: {ITEM}.`
};
//# sourceMappingURL=strings.js.map

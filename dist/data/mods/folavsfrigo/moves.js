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
var moves_exports = {};
__export(moves_exports, {
  Moves: () => Moves
});
module.exports = __toCommonJS(moves_exports);
const Moves = {
  amorpostumo: {
    num: 950,
    accuracy: 100,
    basePower: 102,
    category: "Physical",
    isNonstandard: "Past",
    name: "Amor Postumo",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
    secondary: null,
    target: "normal",
    type: "Ghost",
    zMove: { basePower: 160 },
    maxMove: { basePower: 130 },
    contestType: "Cute"
  },
  deslizamiento: {
    num: 951,
    accuracy: 100,
    basePower: 70,
    category: "Physical",
    name: "Deslizamiento",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, dance: 1, metronome: 1 },
    secondary: {
      chance: 100,
      self: {
        boosts: {
          spe: 1
        }
      }
    },
    target: "normal",
    type: "Ice",
    contestType: "Cool"
  },
  escalofrio: {
    num: 952,
    accuracy: 85,
    basePower: 0,
    category: "Status",
    name: "Escalofrio",
    pp: 15,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
    status: "frz",
    secondary: null,
    target: "normal",
    type: "Ice",
    zMove: { boost: { atk: 1 } },
    contestType: "Beautiful"
  },
  tripleaxelanil: {
    num: 953,
    accuracy: 90,
    basePower: 20,
    basePowerCallback(pokemon, target, move) {
      return 20 * move.hit;
    },
    category: "Physical",
    name: "Triple Axel Anil",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
    multihit: 3,
    multiaccuracy: true,
    secondary: null,
    target: "normal",
    type: "Ice",
    zMove: { basePower: 120 },
    maxMove: { basePower: 140 }
  }
};
//# sourceMappingURL=moves.js.map

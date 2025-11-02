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
var abilities_exports = {};
__export(abilities_exports, {
  Abilities: () => Abilities
});
module.exports = __toCommonJS(abilities_exports);
const Abilities = {
  realeza: {
    onModifySTAB(stab, source, target, move) {
      return 1.5;
    },
    flags: {},
    name: "Realeza",
    rating: 4,
    num: 311
  },
  pielherbacea: {
    onModifyTypePriority: -1,
    onModifyType(move, pokemon) {
      const noModifyType = [
        "judgment",
        "multiattack",
        "naturalgift",
        "revelationdance",
        "technoblast",
        "terrainpulse",
        "weatherball"
      ];
      if (move.type === "Normal" && (!noModifyType.includes(move.id) || this.activeMove?.isMax) && !(move.isZ && move.category !== "Status") && !(move.name === "Tera Blast" && pokemon.terastallized)) {
        move.type = "Grass";
        move.typeChangerBoosted = this.effect;
      }
    },
    onBasePowerPriority: 23,
    onBasePower(basePower, pokemon, target, move) {
      if (move.typeChangerBoosted === this.effect)
        return this.chainModify([4915, 4096]);
    },
    flags: {},
    name: "Piel Herbacea",
    rating: 4,
    num: 312
  },
  sobrecarga: {
    onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Electric" && attacker.hp <= attacker.maxhp / 3) {
        this.debug("Overgrow boost");
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Electric" && attacker.hp <= attacker.maxhp / 3) {
        this.debug("Overgrow boost");
        return this.chainModify(1.5);
      }
    },
    flags: {},
    name: "Sobrecarga",
    rating: 2,
    num: 313
  },
  acometida: {
    onStart(pokemon) {
      pokemon.addVolatile("acometida");
      this.add("-ability", pokemon, "Acometida");
      this.add("-message", `Acometida: Aumenta el ataque y velocidad por 1 turno`);
      this.effectState.active = true;
    },
    onModifySpe(spe) {
      if (this.effectState.active)
        return this.chainModify([3, 2]);
    },
    onModifyAtk(atk) {
      if (this.effectState.active)
        return this.chainModify([6, 5]);
    },
    onResidualOrder: 28,
    onResidualSubOrder: 2,
    onResidual(pokemon) {
      if (!pokemon.activeTurns)
        return;
      if (this.effectState.active) {
        this.effectState.active = false;
        if (pokemon.volatiles["acometida"])
          pokemon.removeVolatile("acometida");
      }
    },
    onEnd(pokemon) {
      if (pokemon.volatiles["acometida"])
        pokemon.removeVolatile("acometida");
      this.effectState.active = false;
    },
    name: "Acometida",
    shortDesc: "Al entrar: Atq x1.2 y Vel x1.5 ese turno.",
    rating: 3,
    num: 314
  },
  intimidate: {
    onStart(pokemon) {
      let activated = false;
      for (const target of pokemon.adjacentFoes()) {
        if (!activated) {
          this.add("-ability", pokemon, "Intimidate", "boost");
          activated = true;
        }
        if (target.volatiles["substitute"]) {
          this.add("-immune", target);
        } else {
          this.boost({ atk: -1 }, target, pokemon, null, true);
        }
      }
    },
    flags: {},
    name: "Intimidate",
    rating: 3.5,
    num: 22
  },
  illuminate: {
    onStart(pokemon) {
      let activated = false;
      for (const target of pokemon.adjacentFoes()) {
        if (!activated) {
          this.add("-ability", pokemon, "illuminate", "boost");
          activated = true;
        }
        if (target.volatiles["substitute"]) {
          this.add("-immune", target);
        } else {
          this.boost({ accuracy: -1 }, target, pokemon, null, true);
        }
      }
    },
    flags: { breakable: 1 },
    name: "Illuminate",
    rating: 3.5,
    num: 35
  }
};
//# sourceMappingURL=abilities.js.map

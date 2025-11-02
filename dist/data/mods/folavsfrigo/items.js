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
var items_exports = {};
__export(items_exports, {
  Items: () => Items
});
module.exports = __toCommonJS(items_exports);
const Items = {
  abilityshield: {
    name: "Ability Shield",
    spritenum: 746,
    fling: {
      basePower: 30
    },
    ignoreKlutz: true,
    // Neutralizing Gas protection implemented in Pokemon.ignoringAbility() within sim/pokemon.ts
    // and in Neutralizing Gas itself within data/abilities.ts
    onSetAbility(ability, target, source, effect) {
      if (effect && effect.effectType === "Ability" && effect.name !== "Trace") {
        this.add("-ability", source, effect);
      }
      this.add("-block", target, "item: Ability Shield");
      return null;
    },
    // Mold Breaker protection implemented in Battle.suppressingAbility() within sim/battle.ts
    num: 1881,
    gen: 9
  },
  supereviolite: {
    name: "SuperEviolite",
    spritenum: 130,
    fling: {
      basePower: 40
    },
    onModifyDefPriority: 2,
    onModifyDef(def, pokemon) {
      if (pokemon.baseSpecies.nfe) {
        return this.chainModify(1.5);
      }
    },
    onModifySpDPriority: 2,
    onModifySpD(spd, pokemon) {
      if (pokemon.baseSpecies.nfe) {
        return this.chainModify(1.5);
      }
    },
    onModifyAtkPriority: 2,
    onModifyAtk(atk, pokemon) {
      if (pokemon.baseSpecies.nfe) {
        return this.chainModify(1.5);
      }
    },
    onModifySpAPriority: 2,
    onModifySpA(spa, pokemon) {
      if (pokemon.baseSpecies.nfe) {
        return this.chainModify(1.5);
      }
    },
    onModifySpePriority: 2,
    onModifySpe(spe, pokemon) {
      if (pokemon.baseSpecies.nfe) {
        return this.chainModify(1.5);
      }
    },
    num: 538,
    gen: 5
  }
};
//# sourceMappingURL=items.js.map

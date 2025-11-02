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
var conditions_exports = {};
__export(conditions_exports, {
  Conditions: () => Conditions
});
module.exports = __toCommonJS(conditions_exports);
const Conditions = {
  acometida: {
    name: "Acometida",
    // Sin duration ni onResidual: NO autovence.
    // Solo sirve para que el cliente vea clientPokemon.volatiles['acometida'].
    onStart(target) {
      this.add("-start", target, "Acometida");
    },
    onEnd(target) {
      this.add("-end", target, "Acometida");
    }
  },
  frz: {
    inherit: true,
    // Mostramos el mensaje estándar de estado
    onStart(target, source, sourceEffect) {
      this.add("-status", target, "frz");
    },
    // Permitir que el congelado NO bloquee la acción (si quieres que
    // el cong. clásico bloquee, elimina por completo este onBeforeMove)
    onBeforeMove() {
    },
    // Residual como quemadura: 1/16 al final del turno
    onResidualOrder: 10,
    onResidual(pokemon) {
      this.damage(pokemon.baseMaxhp / 16);
    },
    // Reducir el Ataque “efectivo” (mitad), igual que BRN,
    // se aplica donde corresponde (daño físico, confusión, etc.)
    onModifySpA(spa) {
      return this.chainModify(0.5);
    }
  }
};
//# sourceMappingURL=conditions.js.map

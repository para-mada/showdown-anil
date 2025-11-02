export const Conditions: import('../../../sim/dex-conditions').ModdedConditionDataTable = {
  acometida: {
    name: 'Acometida',
    // Sin duration ni onResidual: NO autovence.
    // Solo sirve para que el cliente vea clientPokemon.volatiles['acometida'].
    onStart(target) {
      // opcional (visual)
      this.add('-start', target, 'Acometida');
    },
    onEnd(target) {
      // opcional (visual)
      this.add('-end', target, 'Acometida');
    },
  },
 frz: {
    inherit: true,
    // Mostramos el mensaje estándar de estado
    onStart(target, source, sourceEffect) {
      this.add('-status', target, 'frz');
    },

    // Permitir que el congelado NO bloquee la acción (si quieres que
    // el cong. clásico bloquee, elimina por completo este onBeforeMove)
    onBeforeMove() {},

    // Residual como quemadura: 1/16 al final del turno
    onResidualOrder: 10,
    onResidual(pokemon) {
      this.damage(pokemon.baseMaxhp / 16);
    },

    // Reducir el Ataque “efectivo” (mitad), igual que BRN,
    // se aplica donde corresponde (daño físico, confusión, etc.)
    onModifySpA(spa) {
      return this.chainModify(0.5);
    },
  },
};

export const Scripts: BattleScriptsData = {
	  gen: 9,
  // Deshabilita la teracristalización en todo el mod
  actions: {
    // NOTA: Showdown consulta este método para decidir si ofrecer la opción.
    canTerastallize(pokemon) {
      return null; // <- sin Tera
    },
    // Si algún cliente o bot intentara teracristalizar por texto, no hará nada
    terastallize(target) {
      return false;
    },
  },

  // Opcional: limpia Tera de las sets que lleguen
  onValidateSet(set) {
    if ((set as any).teraType) {
      // borra el campo para evitar warnings y que clientes viejos lo muestren
      delete (set as any).teraType;
    }
  },
};

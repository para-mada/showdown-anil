export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
	realeza: {
		onModifySTAB(stab, source, target, move) 
		    {
				return 1.5;
			},
		flags: {},
		name: "Realeza",
		rating: 4,
		num: 311,
		},
	pielherbacea: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && (!noModifyType.includes(move.id) || this.activeMove?.isMax) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Grass';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		flags: {},
		name: "Piel Herbacea",
		rating: 4,
		num: 312,
	},
	sobrecarga: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Electric' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Overgrow boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Electric' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Overgrow boost');
				return this.chainModify(1.5);
			}
		},
		flags: {},
		name: "Sobrecarga",
		rating: 2,
		num: 313,
	},
  acometida: {
    onStart(pokemon) {
        pokemon.addVolatile('acometida');
		this.add('-ability', pokemon, 'Acometida'); // opcional
		this.add('-message', `Acometida: Aumenta el ataque y velocidad por 1 turno`);
		this.effectState.active = true;
    },
    onModifySpe(spe) {
      if (this.effectState.active) return this.chainModify([3, 2]); // x1.5
    },
    onModifyAtk(atk) {
      if (this.effectState.active) return this.chainModify([6, 5]); // x1.2
    },
    onResidualOrder: 28,
    onResidualSubOrder: 2,
    onResidual(pokemon) {
      // Si entró por cambio, al FINAL de ese turno activeTurns===0 → NO quitar aún
      if (!pokemon.activeTurns) return;

      // Ya completó su 1er turno completo en campo → apagar habilidad y quitar volatile
      if (this.effectState.active) {
        this.effectState.active = false;
        if (pokemon.volatiles['acometida']) pokemon.removeVolatile('acometida');
      }
    },
    onEnd(pokemon) {
      // Limpieza si sale antes
      if (pokemon.volatiles['acometida']) pokemon.removeVolatile('acometida');
      this.effectState.active = false;
    },
    name: "Acometida",
    shortDesc: "Al entrar: Atq x1.2 y Vel x1.5 ese turno.",
    rating: 3,
    num: 314,
  },
	intimidate: {
		onStart(pokemon) {
			let activated = false;
			for (const target of pokemon.adjacentFoes()) {
				if (!activated) {
					this.add('-ability', pokemon, 'Intimidate', 'boost');
					activated = true;
				}
				if (target.volatiles['substitute']) {
					this.add('-immune', target);
				} else {
					this.boost({ atk: -1 }, target, pokemon, null, true);
				}
			}
		},
		flags: {},
		name: "Intimidate",
		rating: 3.5,
		num: 22,
	},
	illuminate: {
		onStart(pokemon) {
			let activated = false;
			for (const target of pokemon.adjacentFoes()) {
				if (!activated) {
					this.add('-ability', pokemon, 'illuminate', 'boost');
					activated = true;
				}
				if (target.volatiles['substitute']) {
					this.add('-immune', target);
				} else {
					this.boost({ accuracy: -1 }, target, pokemon, null, true);
				}
			}
		},
		flags: { breakable: 1 },
		name: "Illuminate",
		rating: 3.5,
		num: 35,
	},
};
import type { School } from "./school";
import type { SpellAction } from "./spell-action";

interface SpellCost {
  readonly pips: number;
  readonly shadowPips: number;
}

export const enum SpellType {
  Damage = "Damage",
  DamageAll = "DamageAll",
  Drain = "Drain",
  Healing = "Healing",
  Charm = "Charm",
  Ward = "Ward",
  Aura = "Aura",
  Global = "Global",
  Enchantment = "Enchantment",
  Manipulation = "Manipulation",
  Polymorph = "Polymorph",
  Mutate = "Mutate"
}

export interface Spell<T extends SpellType = SpellType> {
  readonly type: T;
  readonly image: string;
  readonly name: string;
  readonly school: School;
  readonly accuracy: number;
  readonly cost: SpellCost;
  readonly actions: SpellAction[];
}
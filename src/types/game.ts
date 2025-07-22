export type CardType = 'Attack' | 'Spell' | 'Heal' | 'Feature' | 'Skill';
export type ResourceType = 'Actions' | 'Rage' | 'Mana' | 'Divine Favor' | 'Ki' | 'Reagents' | 'Aetherium Charges' | 'Sorcery Points' | 'Inspiration';

export interface CardCost {
  actions: number;
  resource?: {
    type: ResourceType;
    amount: number;
  };
}

export interface CardEffect {
  description: string;
  damage?: number;
  block?: number;
  heal?: number;
  conditions?: string[];
  keywords?: string[];
}

export interface GameCard {
  id: string;
  name: string;
  type: CardType;
  cost: CardCost;
  effects: CardEffect[];
  image: string;
  rarity?: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';
  expend?: boolean;
  sacrifice?: boolean;
  piercing?: boolean;
  combo?: boolean;
  keep?: boolean;
  className?: string;
  defaultQuantity?: number; // Number of copies included by default
}

export interface ClassInfo {
  name: string;
  icon: string;
  primaryResource: ResourceType;
  primaryStats: string[];
  skills: string[];
  description: string;
  starterCards: GameCard[];
  classCards: GameCard[];
}

export interface ItemSlot {
  name: string;
  type: 'MainHand' | 'OffHand' | 'Armor' | 'Amulet' | 'Consumable';
  occupied: boolean;
  item?: GameItem;
}

export interface GameItem {
  id: string;
  name: string;
  type: 'Weapon' | 'Armor' | 'Magical' | 'Trinket' | 'Potion' | 'Poison' | 'Scroll' | 'Tool';
  slots: string[];
  effects: string[];
  consumable: boolean;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';
}

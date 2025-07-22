import { GameCard } from '@/types/game';

export const barbarianStarterCards: GameCard[] = [
  {
    id: 'barb-defend',
    name: 'Defend',
    type: 'Feature',
    cost: { actions: 1 },
    effects: [
      {
        description: 'Gain Block',
        block: 2
      }
    ],
    image: '🛡️',
    className: 'Barbarian',
    defaultQuantity: 3
  },
  {
    id: 'barb-ragefull',
    name: 'Ragefull',
    type: 'Feature',
    cost: { actions: 1 },
    effects: [
      {
        description: 'Gain Rage',
        keywords: ['Gain 1 Rage']
      }
    ],
    image: '😡💥',
    className: 'Barbarian',
    defaultQuantity: 2
  },
  {
    id: 'barb-strike',
    name: 'Strike',
    type: 'Attack',
    cost: { actions: 1 },
    effects: [
      {
        description: 'Deal damage',
        damage: 3
      }
    ],
    image: '⚔️💥',
    className: 'Barbarian',
    defaultQuantity: 3
  }
];

export const barbarianClassCards: GameCard[] = [
  // Attack Cards
  {
    id: 'barb-bone-snap',
    name: 'Bone Snap',
    type: 'Attack',
    cost: { actions: 0 },
    effects: [
      {
        description: 'Deal damage',
        damage: 6
      }
    ],
    image: '🦴💀💥',
    expend: true,
    className: 'Barbarian',
    defaultQuantity: 1
  },
  {
    id: 'barb-head-toss',
    name: 'Head Toss',
    type: 'Attack',
    cost: { actions: 0 },
    effects: [
      {
        description: 'Discard 1 card. If the discarded card was an Attack, gain 1 Rage. Deal damage.',
        damage: 5
      }
    ],
    image: '🗣️💫😵‍💫',
    expend: true,
    className: 'Barbarian',
    defaultQuantity: 1
  },
  {
    id: 'barb-blood-fuelled-slash',
    name: 'Blood-Fuelled Slash',
    type: 'Attack',
    cost: { actions: 1 },
    effects: [
      {
        description: 'Discard 1 card. Gain 1 Rage. Deal damage.',
        damage: 10
      }
    ],
    image: '🩸⚔️😡',
    className: 'Barbarian',
    defaultQuantity: 1
  },
  {
    id: 'barb-jawbreaker',
    name: 'Jawbreaker',
    type: 'Attack',
    cost: { actions: 1 },
    effects: [
      {
        description: 'Deal damage. Put a card from your discard to the top of your deck.',
        damage: 3
      }
    ],
    image: '👊🦷💥',
    className: 'Barbarian',
    defaultQuantity: 1
  },
  {
    id: 'barb-berserkers-fury',
    name: "Berserker's Fury",
    type: 'Attack',
    cost: { actions: 2 },
    effects: [
      {
        description: 'If you have Rage, gain 1 additional Rage. Deal damage.',
        damage: 8
      }
    ],
    image: '�😤🧖⚔️',
    className: 'Barbarian',
    defaultQuantity: 1
  },
  {
    id: 'barb-raging-charge',
    name: 'Raging Charge',
    type: 'Attack',
    cost: { actions: 2 },
    effects: [
      {
        description: 'If you have no Rage, gain 3 Rage. Deal damage.',
        damage: 6
      }
    ],
    image: '🏃‍♂️😡⚔️',
    className: 'Barbarian',
    defaultQuantity: 1
  },
  {
    id: 'barb-reckless-flurry',
    name: 'Reckless Flurry',
    type: 'Attack',
    cost: { actions: 2 },
    effects: [
      {
        description: 'Spend any amount of Rage. Deal 5 damage per Rage spent, then lose that Rage.',
        damage: 0
      }
    ],
    image: '🌪️⚔️💨',
    className: 'Barbarian',
    defaultQuantity: 1
  },
  {
    id: 'barb-frenzied-assault',
    name: 'Frenzied Assault',
    type: 'Attack',
    cost: { actions: 3 },
    effects: [
      {
        description: 'Deal 5 damage three times.',
        damage: 15
      }
    ],
    image: '⚡🌩️',
    className: 'Barbarian',
    defaultQuantity: 1
  },
  {
    id: 'barb-skull-splitter',
    name: 'Skull Splitter',
    type: 'Attack',
    cost: { actions: 3 },
    effects: [
      {
        description: "If the target's Health is at or below half, gain 2 Rage. Deal damage.",
        damage: 15
      }
    ],
    image: '�⚔️�💥',
    className: 'Barbarian',
    defaultQuantity: 1
  },

  // Spell Cards
  {
    id: 'barb-rage-of-ancients',
    name: 'Rage of the Ancients',
    type: 'Spell',
    cost: { actions: 3 },
    effects: [
      {
        description: 'Heal. If you have Rage, gain Wrath.',
        heal: 5
      }
    ],
    image: '👻⚡🔮',
    expend: true,
    className: 'Barbarian',
    defaultQuantity: 1
  },
  {
    id: 'barb-rage-of-elements',
    name: 'Rage of the Elements',
    type: 'Spell',
    cost: { actions: 3 },
    effects: [
      {
        description: 'If you have Rage, gain 2 additional Rage. Deal damage.',
        damage: 8
      }
    ],
    image: '🌊🌀💨',
    className: 'Barbarian',
    defaultQuantity: 1
  },
  {
    id: 'barb-ragnaroks-embrace',
    name: "Ragnarok's Embrace",
    type: 'Spell',
    cost: { actions: 4 },
    effects: [
      {
        description: 'Discard your hand. Gain Wrath. For each card discarded this way, deal 5 damage.',
        damage: 0
      }
    ],
    image: '�🌋🔥',
    expend: true,
    className: 'Barbarian',
    defaultQuantity: 1
  },

  // Feature Cards
  {
    id: 'barb-rageguard-1',
    name: 'Rageguard',
    type: 'Feature',
    cost: {
      actions: 0,
      resource: { type: 'Rage', amount: 2 }
    },
    effects: [
      {
        description: 'Gain Block equal to your current Rage (max 10).',
        block: 0
      }
    ],
    image: '🛡️',
    expend: true,
    className: 'Barbarian',
    defaultQuantity: 1
  },
  {
    id: 'barb-berserkers-resilience',
    name: "Berserker's Resilience",
    type: 'Feature',
    cost: {
      actions: 0,
      resource: { type: 'Rage', amount: 2 }
    },
    effects: [
      {
        description: 'Gain Block. If you have Wrath, gain 5 additional Block.',
        block: 5
      }
    ],
    image: '💪💥',
    className: 'Barbarian',
    defaultQuantity: 1
  },
  {
    id: 'barb-battle-roar',
    name: 'Battle Roar',
    type: 'Feature',
    cost: { actions: 1 },
    effects: [
      {
        description: 'Gain Block. If you have Rage, gain 2 additional Block.',
        block: 2
      }
    ],
    image: '📢⚔️',
    className: 'Barbarian',
    defaultQuantity: 1
  },
  {
    id: 'barb-bloodlust',
    name: 'Bloodlust',
    type: 'Feature',
    cost: { actions: 1 },
    effects: [
      {
        description: 'Gain 1 Rage. If you have Wrath, gain 2 additional Rage.'
      }
    ],
    image: '🩸😤',
    className: 'Barbarian',
    defaultQuantity: 1
  },
  {
    id: 'barb-wrathful',
    name: 'Wrathful',
    type: 'Feature',
    cost: {
      actions: 1,
      resource: { type: 'Rage', amount: 3 }
    },
    effects: [
      {
        description: 'Gain Wrath.'
      }
    ],
    image: '😤💨🧘‍♂️',
    className: 'Barbarian',
    defaultQuantity: 1
  },
  {
    id: 'barb-calm-before-storm',
    name: 'Calm Before the Storm',
    type: 'Feature',
    cost: { actions: 2 },
    effects: [
      {
        description: 'Gain Block; if you have no Rage, gain Wrath.',
        block: 2
      }
    ],
    image: '🧘‍♂️',
    className: 'Barbarian',
    defaultQuantity: 1
  },
  {
    id: 'barb-unstoppable-onslaught',
    name: 'Unstoppable Onslaught',
    type: 'Feature',
    cost: { actions: 3 },
    effects: [
      {
        description: 'Lose 10 health. For the rest of this turn, whenever you play an Attack card, gain 1 Rage and draw a card and gain an action.'
      }
    ],
    image: '⚔️',
    className: 'Barbarian',
    defaultQuantity: 1
  },
  {
    id: 'barb-avatar-of-fury',
    name: 'Avatar of Fury',
    type: 'Feature',
    cost: { actions: 5 },
    effects: [
      {
        description: 'Lose all your Rage. Reduce this card\'s cost by 1 for each Rage you lost. For the rest of this turn, whenever you play an Attack card, gain 1 Rage, and draw a card.'
      }
    ],
    image: '👹😈',
    className: 'Barbarian',
    defaultQuantity: 1
  },

  // Skill Cards
  {
    id: 'barb-adrenaline-surge',
    name: 'Adrenaline Surge',
    type: 'Skill',
    cost: {
      actions: 0,
      resource: { type: 'Rage', amount: 1 }
    },
    effects: [
      {
        description: 'Gain 1 Action. If you have Wrath, gain 2 Actions instead.',
        keywords: ['+2 to Athletics checks (out-of-combat)']
      }
    ],
    image: '💉⚡💪',
    expend: true,
    className: 'Barbarian',
    defaultQuantity: 1
  },
  {
    id: 'barb-battle-dance',
    name: 'Battle Dance',
    type: 'Skill',
    cost: { actions: 1 },
    effects: [
      {
        description: 'Gain Block.',
        block: 2,
        keywords: ['+2 to Athletics checks (out-of-combat)']
      }
    ],
    image: '💃⚔️',
    className: 'Barbarian',
    defaultQuantity: 1
  },
  {
    id: 'barb-blood-rally',
    name: 'Blood Rally',
    type: 'Skill',
    cost: { actions: 1 },
    effects: [
      {
        description: 'Draw 1 card. If you have Rage, draw an additional card.',
        keywords: ['+3 to Intimidation checks (out-of-combat)']
      }
    ],
    image: '🩸📢',
    className: 'Barbarian',
    defaultQuantity: 1
  },
  {
    id: 'barb-taunt',
    name: 'Taunt',
    type: 'Skill',
    cost: { actions: 1 },
    effects: [
      {
        description: 'Add your taunt token to an enemy. If you have Rage, gain 2 additional Block.',
        keywords: ['+2 to Intimidation checks (out-of-combat)']
      }
    ],
    image: '🎯💥',
    className: 'Barbarian',
    defaultQuantity: 1
  },
  {
    id: 'barb-war-drum',
    name: 'War Drum',
    type: 'Skill',
    cost: { actions: 1 },
    effects: [
      {
        description: 'Gain 1 Action and draw 1 card. If you have Rage, gain an additional 1 Action.',
        keywords: ['+2 to Intimidation checks (out-of-combat)']
      }
    ],
    image: '🥁⚔️💥',
    className: 'Barbarian',
    defaultQuantity: 1
  },
  {
    id: 'barb-mighty-heave',
    name: 'Mighty Heave',
    type: 'Skill',
    cost: { actions: 1 },
    effects: [
      {
        description: 'Discard a card. Gain Block and draw a card.',
        block: 2,
        keywords: ['+2 to Athletics checks (out-of-combat)']
      }
    ],
    image: '🏔️',
    className: 'Barbarian',
    defaultQuantity: 1
  },
  {
    id: 'barb-survival-instinct',
    name: 'Survival Instinct',
    type: 'Skill',
    cost: { actions: 2 },
    effects: [
      {
        description: 'Draw 3 cards. If you\'re below half Health, gain 5 Block.',
        keywords: ['+3 to Survival checks (out-of-combat)']
      }
    ],
    image: '🐺🌙',
    className: 'Barbarian',
    defaultQuantity: 1
  },
  {
    id: 'barb-battle-awareness',
    name: 'Battle Awareness',
    type: 'Skill',
    cost: { actions: 2 },
    effects: [
      {
        description: 'Scry 3, then draw 1 card.',
        keywords: ['+3 to Perception checks (out-of-combat)']
      }
    ],
    image: '👁️',
    className: 'Barbarian',
    defaultQuantity: 1
  },
  {
    id: 'barb-last-stand',
    name: 'Last Stand',
    type: 'Skill',
    cost: { actions: 3 },
    effects: [
      {
        description: 'Gain Block. If you\'re at half Health or below, gain 5 additional Block.',
        block: 10,
        keywords: ['+4 to Intimidation checks (out-of-combat)']
      }
    ],
    image: '🛡️',
    className: 'Barbarian',
    defaultQuantity: 1
  },
  {
    id: 'barb-titans-grip',
    name: "Titan's Grip",
    type: 'Skill',
    cost: { actions: 4 },
    effects: [
      {
        description: 'Gain Block. If you have Wrath, gain 2 Actions. All your Attacks this turn cost no Actions.',
        block: 10,
        keywords: ['+5 to Athletics checks (out-of-combat)']
      }
    ],
    image: '🏛️',
    className: 'Barbarian',
    defaultQuantity: 1
  }
];

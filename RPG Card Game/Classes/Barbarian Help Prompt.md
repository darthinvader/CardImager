## **Vision** 🔭

### **Game Pitch** 🎲
A tactical, party-based roguelite RPG that blends turn-based combat with deck-building mechanics. Embark on an epic adventure: take on quests, face unique encounters, battle monsters, and slay foes (or unexpected heroes). Discover mythical (and mundane) items and expand your characters’ skills.

### **Core Experience** ✨
Capture the feel of a classic tabletop RPG campaign, such as Dungeons & Dragons or Pathfinder, in a streamlined, digital format.
### **Inspiration** 💡
*   Slay the Spire
*   Monster Train
*   Dungeons & Dragons
* 

---

## **Core Gameplay Mechanics** ⚙️

### **Core Loop** 🔄
1.  **Start Turn:** Draw a fixed number of cards.
2.  **Action Phase:** Play cards by spending resources.
3.  **End Turn:** Discard any remaining cards in hand.

### **Resource System** 💎
*   **🏃 Actions:** The primary currency for playing cards.
*   **❤️ Health:** Your character’s life force. Reaching zero means defeat.
*   **🌟 Class Resource:** A unique meter for each class (e.g., Barbarian Rage, Wizard Mana).

### **Card Mechanics** 🃏
Every card includes an Action Cost, Image, Effects, and Card Type. Most cards have fixed, reliable effects, with a special subset of cards adding dice rolls for bonus randomness.

*   **Card Types:**
    *   ⚔️ **Attack:** Primarily deals damage to foes.
    *   🪄 **Spell:** Casts a magical effect, from damage to utility.
    *   ❤️‍🩹 **Heal:** Restores Health or removes negative effects.
    *   🛠️ **Skill:** Versatile cards used for non-combat challenges or unique combat actions.
    *   🌟 **Feature:** Cards that often grant passive or persistent effects.

### **Item Mechanics** ⚔️
*   🛡️ **Permanent Items:** Equipment that grants ongoing passive bonuses.
*   🧪 **Consumables:** Single-use items, like potions or poisons, that are played like cards and then consumed.

### **Class Mechanics** 🧙
*   **🪙 Unique Resource:** Each class has one special meter that fuels its core identity.
*   **📊 Primary Stat:** Two main ability scores that define a class's strengths.
*   **🧩 Subclasses:** Unlocked via progression, granting powerful new cards and expanding the class's unique "puzzle board." (Expansion content perhaps) 
*   **🎯 Unique Gimmicks:** Every class has at least two distinct focuses or strategies that make it feel unique.

### **Ancestry Mechanics** 👪
Primarily for flavor, each ancestry grants a character a unique starting `Skill` and `Feat` card.

### **Enemy Mechanics** 👹
*   **🎯 Target Selection:** Defines how enemies choose which party members to attack.
*   **🤖 Behavior Variants:** Different AI patterns, resistances, and special triggers that make enemies feel distinct.
* Minnions/Minibosses
* Minnions are avoidable, minibosses aren't.
* Final Boss
* Avoiding Enemies will trigger an effect, negative obv.

### **Quest Mechanics** 📜
*   **🗺️ Quest Structure:** The adventure consists of one main quest and two supporting side quests.
*   **🔗 Dependencies:** Completing side quests provides essential aid (e.g., items, allies, shortcuts) needed to progress the main quest.
* Instead of side quests, class quiests, or personal quests..!!!!

### **Status & Condition Mechanics**
*   **🐺 Statuses:** Persistent mechanics that stay with a character between encounters. They are distinct from equipment.
    *   *Example: A character transforms into a werewolf, gaining a permanent `Status` that alters their abilities for the rest of the run.*
*   **🤕 Conditions:** Temporary effects that are removed at the end of combat.
    *   *Example: An enemy is afflicted with a `Poisoned` `Condition`, taking damage each turn until combat ends.*

### **Encounter & Event Mechanics** ⁉️
*   **🏕️ Rests:** Opportunities to recover Health and resources.
* 3d6 vs 1d20 
*   **🛒 Shops:** Places to purchase new cards, items, or upgrades.
*   **🎲 Random Encounters:** Optional narrative events that may require a skill check to resolve.
*   **⚔️ Enemy Encounters:** Standard turn-based battles against foes.
Night Encounters: People not resting get night encounters
### **Player Progression** 🚀
1.  Select a class and build your starting deck.
2.  Win encounters to level up.
3.  On each level-up, gain one of the following:
    *   A new class card (ability or spell).
    *   Subclass cards or features at milestone levels.
    *   Feats (powerful neutral cards) at designated levels.

### **Win & Loss Conditions** 🏆
*   **✅ Win:** Complete the main quest line.
*   **❌ Loss:** The entire party is defeated, or the main quest becomes impossible to complete.

---

## **Design Decisions** 🧠
*   **🎲 Counters:** Use physical counters with different icons and numbers (like 3D10s) to track Health and other resources.
*   **🧩 Class Board:** Each class has a personal "board" that expands with puzzle-like slots from subclass choices.
*   **📥 Item Slots:** Permanent items must be physically fit onto the class board, creating a fun inventory management puzzle.
*   **🎒 Potion Bag:** Consumable potions are kept in a separate bag, not on the board.
*   **🤪 Character Creator:** A fun, silly character creator based on mixing and matching a set number of bodies, heads, and hair styles (e.g., 10x10x10).

---

## Content & Assets 📦

### Icon List
### Card List 🎴
*  Item List 🎒
*  Resources
*  Classes 🧑‍🤝‍🧑
*  Ancestries List
*  Enemy List 🐲
*  Quest List 🗺️
*  Encounters & Events ✨
*  Statuses & Conditions 🐺🤕
*  Feats & Powers 🌟
*  Subclasses 🧩
*  Class Boards 🧙
*  Potion Bag 🧪
*  Character Creator 🤪
*  Counters 🎲
*  Class Resources 💎
*  Ability Scores 📊
*  Target Selection 🎯
*  Behavior Variants 🤖
*  Win & Loss Conditions 🏆
*  Player Progression 🚀


### **Barbarian** 🪓
*   **Core Identity:** A ferocious warrior who thrives in the heart of battle, channeling raw physical power to solve problems both violent and circumstantial.
*   **Unique Resource:** **Rage** - A resource that builds from dealing or taking damage. Spent to fuel powerful abilities.
*   **Core Strategies/Gimmicks:**
    1.  **Wrathful State:** The Barbarian's core combat loop is managing Rage to enter a powerful `Wrath` `Status`, massively amplifying their damage at the cost of control.
    2.  **Pain as Fuel:** Many Barbarian abilities gain significant bonuses when the Barbarian is at low health or after they have taken damage, encouraging a high-risk, high-reward playstyle.
    3.  **World Interaction (Strength & Intimidation):** Outside of combat, Barbarians solve problems with brute force. They can use `Athletics` `Skill` cards during events to clear a rockslide, break down a barred door, or win a test of might. Their fearsome presence also unlocks unique `Intimidation` options to scare off lesser foes or cow an NPC into cooperation.


Cards have a cost in actions from 0-4
Cards can have other costs (Mana, Rage,Health) depending upon class.
Cards should have a clear effect, and be easy to understand.
Cards have an image.
Cards have at least one of the following types: Attack, Spell, Heal, Feature,Skill.
## Averages
Damage for a 0 action card is 2.
Damage for a 1 action card is 4. For a basic class card it's 3
Damage for a 2 action card is 9. For a basic class card it's 7
Damage for a 3 action card is 17. For a basic class card it's 13

Block for a 0 action card is 1.
Block for a 1 action card is 3. For a basic class card it's 2
Block for a 2 action card is 7. For a basic class card it's 5
Block for a 3 action card is 14. For a basic class card it's 10

Heal for a 0 action card is 1.
Heal for a 1 action card is 3. For a basic class card it's 2
Heal for a 2 action card is 7. For a basic class card it's 5
Heal for a 3 action card is 14. For a basic class card it's 10
Heal cards have expended so the players don't just stand around, keeping enemies alive to heal.

Cards with expended cost 1 less action than their power (unless its a heal which already has it)
Cards with Sacrifice cost 2 less actions than their power (unless its a heal which already has it)

Skill Cards follow the pattern 1 Cost +2/ 2Cost +3 / 3 Cost +4 / 4 Cost +5
Skill Cards may have lesser effects in combat to gain more out of combat effects.
Skill Cards may have advantage or re-roll outside of combat on specific skill checks.

Cards with 0 action cost are usually expended if their effects are more powerful than they should be.



## Card Effects:
* **Damage:** The amount of damage dealt to an enemy or enemies.
* **Block:** The amount of damage blocked or prevented.
* **Heal:** The amount of health restored to a character.
* Expend: The card is removed from this fight after use going to the Expended pile.
* Sacrifice: The card is removed from your deck after use.
* Piercing: The attack ignores Block.
* Combo: The card gains additional effects based on the number of Combo Points the target has.
* **Think:** Look at the n top cards of your deck, draw X of them put the rest at any order.
* **Draw:** Gain additional cards from your deck.
* **Discard:** Remove cards from your hand or deck.
* Keep: The card is not discarded at the end of your turn.


# General  
**Secondary Resource:** Rage  
**Common Conditions:** Wrath, Taunt  

# Strategies  
- Rage Management  
- Wrath Status  
- Taunting enemies to protect allies  

# Skills  
- **Primary:** Athletics, Intimidation  
- **Secondary:** Survival, Perception  

# Board  
| Element | Description                                              |  
| ------- | -------------------------------------------------------- |  
| Effect  | For each Rage you have, gain +1 damage on attacks        |  
| Meter   | Rage Meter (max \(5\) or \(10\))                         |  

**Zones:**  
- Deck  
- Discard  
- Expended  
- On Bottom  
- Hand  
- Off-hand  
- Armor  
- Amulet  
- Bag (3 Item Consumables)  

**On Top:**  
- Left: Statuses  
- Right: Conditions  

# Cards

## Starter Cards  
- 3× **Defend** _(Feature · 1 Action)_  
  • Effect: Gain \(2\) Block.  
  • Image: A barbarian raising a shield.  

- 2× **Ragefull** _(Feature · 1 Action)_  
  • Effect: Gain \(1\) Rage.  
  • Image: A raging barbarian with glowing eyes.  

- 3× **Strike** _(Attack · 1 Action)_  
  • Effect: Deal \(3\) damage.  
  • Image: A barbarian swinging a club.  

## Attacks  
- **Bone Snap** _(Attack · 0 Actions)_  
  • Effect:  
    1. Deal \(6\) damage.  
    2. Expend this card.  
  • Image: A club crushing bone in a single, brutal blow.  

- **Head Toss** _(Attack · 0 Actions)_  
  • Effect:  
    1. Discard 1 card.  
    2. If the discarded card was an Attack, gain \(1\) Rage.  
    3. Deal \(5\) damage.  
    4. Expend this card.  
  • Image: A brutal headbutt that sends an enemy’s helmet flying.  

- **Blood-Fuelled Slash** _(Attack · 1 Action)_  
  • Effect:  
    1. Discard 1 card.  
    2. Gain \(1\) Rage.  
    3. Deal \(10\) damage.  
  • Image: A red-stained blade arc that cleaves bone and sinew.  

- **Jawbreaker** _(Attack · 1 Action)_  
	• Effect:  
		1. Deal \(3\) damage.  
		2 Put a card from your discard to the top of your deck.  
	• Image: A barbarian’s fist crushing an enemy’s jaw.

- **Berserker’s Fury** _(Attack · 2 Actions)_  
  • Effect:  
    1. If you have Rage, gain \(1\) additional Rage.  
    2. Deal \(8\) damage.  
  • Image: A barbarian engulfed in flames.  

- **Raging Charge** _(Attack · 2 Actions)_  
  • Effect:  
    1. If you have no Rage, gain \(3\) Rage.  
    2. Deal \(6\) damage.  
  • Image: A barbarian charging into battle.  

- **Reckless Flurry** _(Attack · 2 Actions)_  
  • Effect: Spend any amount of Rage. Deal \(5\) damage per Rage spent, then lose that Rage.  
  • Image: A whirlwind of axe-swings, each fueled by wild fury.  

- **Frenzied Assault** _(Attack · 3 Actions)_  
  • Effect: Deal \(5\) damage three times.  
  • Image: A barbarian attacking multiple enemies.  

- **Skull Splitter** _(Attack · 3 Actions)_  
  • Effect:  
    1. If the target’s Health is at or below half, gain \(2\) Rage.  
    2. Deal \(15\) damage.  
  • Image: A brutal overhead cleave cracking a skull in two.  

## Spells  
- **Rage of the Ancients** _(Spell · 3 Actions)_  
  • Effect:  
    1. Heal \(5\).  
    2. If you have Rage, gain Wrath.  
    3. Expend this card.  
  • Image: A barbarian summoning ancient spirits.  

- **Rage of the Elements** _(Spell · 3 Actions)_  
  • Effect:  
    1. If you have Rage, gain \(2\) additional Rage.  
    2. Deal \(8\) damage.  
  • Image: A barbarian summoning elemental forces.  

- **Ragnarok’s Embrace** _(Spell · 4 Actions)_  
  • Effect:  
    1. Discard your hand.  
    2. Gain Wrath.  
    3. For each card discarded this way, deal \(5\) damage.  
    4. Expend this card.  
  • Image: A world-shattering yell that rends the very earth.  

## Features  
- **Berserker’s Resilience** _(Feature · 0 Actions · 2 Rage)_  
  • Effect: Gain \(5\) Block. If you have Wrath, gain \(5\) additional Block.  
  • Image: A barbarian shrugging off an attack.  

- **Battle Roar** _(Feature · 1 Action)_  
  • Effect: Gain \(2\) Block. If you have Rage, gain \(2\) additional Block.  
  • Image: A barbarian shouting a battle cry.  

- **Bloodlust** _(Feature · 1 Action)_  
  • Effect: Gain \(1\) Rage. If you have Wrath, gain \(2\) additional Rage.  
  • Image: A barbarian with a fierce expression.  

- **Wrathful** _(Feature · 1 Action · 3 Rage)_  
  • Effect: Gain Wrath.  
  • Image: A barbarian with glowing eyes and fists.  

- **Calm Before the Storm** _(Feature · 2 Actions)_  
  • Effect: Gain \(2\) Block; if you have no Rage, gain Wrath.  
  • Image: A meditative barbarian preparing for the fight.  

*More 0 and 2 and 3 cost features are needed* Gain Armor equal to your rage perhaps (rage reaches 10 max)

## Card-Based Skills  
- **Adrenaline Surge** _(Skill · 0 Actions · 1 Rage)_  
  • Effect:  
    1. Gain \(1\) Action. If you have Wrath, gain \(2\) Actions instead.  
    2. Expend this card.  
  • Out-of-combat: +2 to Athletics checks.  
  • Image: A barbarian’s veins bulge as they roar for more fight.  

- **Battle Dance** _(Skill · 1 Action)_  
  • Effect: Gain \(2\) Block.  
  • Out-of-combat: +2 to Athletics checks.  
  • Image: Shield held high, muscles coiled for impact.  

- **Blood Rally** _(Skill · 1 Action)_  
  • Effect: Draw \(1\) card. If you have Rage, draw an additional card.  
  • Out-of-combat: +3 to Intimidation checks.  
  • Image: A roar so fierce it steels allies’ nerves.  

- **Taunt** _(Skill · 1 Action)_  
  • Effect: Add your taunt token to an enemy. If you have Rage, gain \(2\) additional Block.  
  • Out-of-combat: +2 to Intimidation checks.  
  • Image: A barbarian shouting at an enemy.  

- **War Drum** _(Skill · 1 Action)_  
  • Effect: Gain \(1\) Action and draw \(1\) card. If you have Rage, gain an additional \(1\) Action.  
  • Out-of-combat: +2 to Intimidation checks.  
  • Image: A massive drum echoes across the battlefield.  

- **Last Stand** _(Skill · 3 Actions)_  
  • Effect: Gain \(10\) Block. If you’re at half Health or below, gain \(5\) additional Block.  
  • Out-of-combat: +4 to Intimidation checks.  
  • Image: Bloodied but unbowed, the barbarian plants their feet.  
*More *Taunting style cards and we need some skills for more athletics, 1 for survival and 1 for Perception.

# Items  

## Armor  
- Details TBD  

## Weapons  
- Hand / Off-hand / Double Hand  
  - Details TBD  

## Accessories  
- **Amulet**  
  - Details TBD  

- **Bag (3 Consumables)**  
  - Details TBD
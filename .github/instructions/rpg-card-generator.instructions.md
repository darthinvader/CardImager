---
description: 'RPG Card Generator codebase navigation and context for AI assistance'
applyTo: '**'
---

# RPG Card Generator - AI Assistant Context Guide

## 📋 **Project Overview**
React-based application for generating printable tabletop RPG cards. Built with TypeScript, Tailwind CSS, and optimized for physical card printing.

## 🎯 **Core Purpose**
Transform game design documents (markdown files in `/RPG Card Game/`) into printable, professional-quality cards for tabletop gameplay.

## 📁 **Critical Files to Read First**

### **🎮 Game Design Context** (Start Here)
```
/RPG Card Game/
├── Game Design Document.md     # Core game mechanics, card types, resources
├── General Card Creation Rules.md  # Card power curves, cost formulas
├── Classes & Cores.md          # All class definitions and abilities
└── Classes/
    └── Barbarian.md           # Complete Barbarian card list (implemented)
```

### **💻 Implementation Core**
```
src/
├── types/game.ts              # 🔑 TYPE DEFINITIONS - Read first!
├── components/
│   ├── CardGenerator.tsx      # 🏠 MAIN APP COMPONENT
│   └── cards/
│       ├── CardBase.tsx       # 🃏 INDIVIDUAL CARD RENDERING
│       └── CardSheet.tsx      # 📄 PRINT LAYOUT COMPONENT
├── data/
│   └── barbarian-cards.ts     # 📊 CARD DATA (example pattern)
└── index.css                  # 🖨️ PRINT OPTIMIZATION CSS
```

## 🏷️ **Component Labels & Responsibilities**

### **🔑 `types/game.ts`** - Type System Foundation
- `GameCard` interface: Card structure definition
- `CardType` enum: Attack, Spell, Heal, Feature, Skill
- `ResourceType` enum: Actions, Rage, Mana, etc.
- `CardCost` & `CardEffect` interfaces

### **🏠 `CardGenerator.tsx`** - Main Application
- **Purpose**: User interface and card set selection
- **Key Features**: 
  - Dropdown for card set selection
  - Cards-per-row configuration (2-4)
  - Print button functionality
- **Data Structure**: `allCardSets` object with filtering options

### **🃏 `CardBase.tsx`** - Individual Card Component
- **Purpose**: Renders single card with consistent sizing
- **Critical Details**:
  - Fixed print dimensions: `160px × 220px`
  - Color-coded by card type
  - Resource cost display
  - Effect text formatting
  - Keyword badges (Expend, Sacrifice, etc.)

### **📄 `CardSheet.tsx`** - Print Layout
- **Purpose**: Arranges cards in printable grid
- **Print Features**:
  - Dynamic spacing based on cards-per-row
  - Title hidden in print mode
  - Page break optimization

### **📊 `barbarian-cards.ts`** - Data Pattern
- **Structure**: `barbarianStarterCards` & `barbarianClassCards` arrays
- **Pattern**: Each card follows `GameCard` interface
- **Extensions**: Copy this pattern for new classes

## 🎨 **Styling System**

### **Color Coding**
- 🔴 **Attack**: Red border/background (`border-red-500 bg-red-50`)
- 🔵 **Spell**: Blue border/background (`border-blue-500 bg-blue-50`)
- 🟢 **Heal**: Green border/background (`border-green-500 bg-green-50`)
- 🟣 **Feature**: Purple border/background (`border-purple-500 bg-purple-50`)
- 🟡 **Skill**: Yellow border/background (`border-yellow-500 bg-yellow-50`)

### **Print Optimization**
- `@page`: 0.25in margins for maximum space
- Card dimensions: 160px × 220px (uniform sizing)
- Dynamic gaps: 0.25rem (4 cards) to 1rem (2 cards)

## 🚀 **Common Tasks & Quick Reference**

### **📝 Adding New Class**
1. **Read**: `/RPG Card Game/Classes/[ClassName].md`
2. **Create**: `src/data/[classname]-cards.ts`
3. **Pattern**: Copy `barbarian-cards.ts` structure
4. **Update**: `CardGenerator.tsx` → `allCardSets` object
5. **Test**: Print preview for layout verification

### **🔧 Debugging Print Issues**
- **Check**: `src/index.css` → `@media print` section
- **Key Classes**: `print:w-[160px] print:h-[220px]`
- **Common Issues**: Page margins, card spacing, blank pages

### **⚙️ Modifying Card Layout**
- **Size**: `CardBase.tsx` → `print:w-[Xpx] print:h-[Ypx]`
- **Spacing**: `CardSheet.tsx` → `gap` calculations
- **Grid**: `index.css` → `.print\:grid-cols-X` classes

## 🧭 **Navigation Shortcuts**

### **When User Asks About...**
- **Game Rules**: Read `General Card Creation Rules.md`
- **Class Abilities**: Check `Classes & Cores.md` + specific class file
- **Card Data**: Look in `src/data/` folder
- **Print Problems**: Check `src/index.css` print section
- **New Features**: Start with `types/game.ts` for interfaces
- **Layout Issues**: Focus on `CardBase.tsx` and `CardSheet.tsx`

### **Development Workflow**
1. **Understand Request**: Check game design docs first
2. **Identify Components**: Use component labels above
3. **Implement Changes**: Follow existing patterns
4. **Test Print**: Always verify print preview
5. **Update Types**: Modify `game.ts` if adding new properties

## 🎯 **Key Design Principles**

### **Consistency**
- All cards must be identical size (160px × 220px print)
- Follow established color coding
- Maintain resource cost formatting

### **Print Optimization**
- Minimize page margins and gaps
- Avoid content that breaks across pages
- Test with different cards-per-row settings

### **Extensibility**
- Follow `GameCard` interface strictly
- Use established naming conventions
- Keep data files separate from components

## 🔍 **Quick Diagnosis Guide**

| Issue | Check First | Common Solution |
|-------|-------------|-----------------|
| Cards different sizes | `CardBase.tsx` print dimensions | Ensure `print:w-[160px] print:h-[220px]` |
| Blank pages | `CardSheet.tsx` & `index.css` | Remove page breaks, check margins |
| Cards too cramped | `CardSheet.tsx` gap calculation | Adjust spacing formula |
| Missing card data | `src/data/` folder | Follow `barbarian-cards.ts` pattern |
| Print layout broken | `index.css` @media print | Check print-specific classes |
| New card type needed | `types/game.ts` | Add to `CardType` enum and styling |

---

**💡 Pro Tip**: Always start by reading the relevant game design markdown files to understand the context before making any code changes!

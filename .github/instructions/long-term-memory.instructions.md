---
title: CardImager Codebase - Long-Term Memory Specification
applyTo: '**'
description: 'Comprehensive codebase structure and key components guide for AI assistant continuity across sessions.'
version: 2.0
date_created: 2025-01-23
last_updated: 2025-01-23
tags: ['codebase', 'documentation', 'memory', 'rpg-cards', 'architecture']
---

# CardImager Codebase - Long-Term Memory Specification

## Introduction

This specification provides a comprehensive overview of the CardImager codebase, its structure, and core concepts to enable AI assistant continuity across sessions. It serves as a foundational reference for understanding the project's architecture, key components, and development practices.

## 1. Purpose & Scope

### Purpose
- **PUR-001**: Provide high-level codebase overview for AI assistant memory continuity
- **PUR-002**: Document project structure, core components, and development workflows
- **PUR-003**: Enable rapid context understanding for new AI assistant sessions
- **PUR-004**: Serve as architectural reference for development decisions

### Scope
- **SCO-001**: Covers complete repository structure and file organization
- **SCO-002**: Documents core application components and their responsibilities
- **SCO-003**: Includes development workflows, styling systems, and build processes
- **SCO-004**: Excludes detailed implementation specifics (covered in component-specific docs)

## 2. Definitions

- **RPG Cards**: Role-playing game cards with stats, effects, and visual elements
- **Game Design Documents**: Markdown files in `/RPG Card Game/` containing game rules and card definitions
- **Card Generator**: Main UI component for selecting and configuring card layouts
- **Card Base**: Core rendering component for individual cards
- **Card Sheet**: Print layout component arranging cards in grids
- **Emoji Design System**: Standardized approach using 1-4 emoji combinations for card theming
- **Print Optimization**: CSS and layout optimizations for physical card printing

## 3. Repository Architecture

### High-Level Structure
```
CardImager/
├── .github/                 # CI workflows and instruction files
│   ├── instructions/        # AI assistant instruction files
│   └── prompts/            # Reusable prompt templates
├── RPG Card Game/          # Game design documents and reference materials
│   ├── Game Design Document.md
│   ├── General Card Creation Rules.md
│   ├── Classes & Cores.md
│   └── Classes/           # Individual class definitions
├── src/                   # Application source code
│   ├── components/        # React components
│   ├── data/             # Card data and configurations
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility libraries
│   ├── routes/           # Application routing
│   └── types/            # TypeScript type definitions
├── index.html            # Entry HTML for Vite
├── package.json          # NPM dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite build configuration
```

### Core Architecture Principles
- **ARC-001**: Component-based React architecture with clear separation of concerns
- **ARC-002**: TypeScript-first development with strict type checking
- **ARC-003**: Print-optimized CSS with responsive design for physical cards
- **ARC-004**: Data-driven card generation from markdown specifications
- **ARC-005**: Modular emoji design system for visual consistency

## 4. Core Components Specification

### CardGenerator.tsx - Main Application Component
- **COMP-001**: Primary UI for card set selection and configuration
- **COMP-002**: Provides dropdown for card set selection from available data
- **COMP-003**: Configures cards-per-row layout (2-4 cards)
- **COMP-004**: Implements print functionality for card sheets
- **COMP-005**: Manages `allCardSets` object with filtering capabilities

### CardBase.tsx - Individual Card Rendering
- **COMP-006**: Renders single cards with consistent 240px × 320px print dimensions
- **COMP-007**: Implements color-coded styling by card type (Attack=red, Spell=blue, etc.)
- **COMP-008**: Displays resource costs, effect text, and keyword badges
- **COMP-009**: Uses `break-words` for proper title wrapping without truncation
- **COMP-010**: Supports 1-4 emoji combinations in `text-2xl` size within h-20 containers

### CardSheet.tsx - Print Layout Component
- **COMP-011**: Arranges cards in printable grid layouts
- **COMP-012**: Implements dynamic spacing based on cards-per-row configuration
- **COMP-013**: Optimizes page breaks and print margins
- **COMP-014**: Hides titles in print mode for clean output

## 5. Data & Type System

### Game Data Structure
- **DATA-001**: `src/types/game.ts` defines core interfaces: `GameCard`, `CardType`, `ResourceType`, `CardCost`, `CardEffect`
- **DATA-002**: `src/data/barbarian-cards.ts` provides example implementation following `GameCard` interface
- **DATA-003**: Card data organized into starter and class-specific arrays
- **DATA-004**: All card data follows consistent structure for type safety

### Type Definitions
```typescript
// Core interfaces from src/types/game.ts
interface GameCard {
  name: string;
  type: CardType;
  cost: CardCost;
  effects: CardEffect[];
  emojis: string;
  // ... additional properties
}

enum CardType {
  Attack = "Attack",
  Spell = "Spell", 
  Heal = "Heal",
  Feature = "Feature",
  Skill = "Skill"
}
```

## 6. Styling & Design System

### Tailwind CSS Implementation
- **STY-001**: Utilizes Tailwind CSS for component styling and print optimization
- **STY-002**: `src/index.css` contains global styles and `@media print` rules
- **STY-003**: Print rules specify 240px × 320px card dimensions with optimized margins
- **STY-004**: Dynamic gap calculations: 0.25rem (4 cards) to 1rem (2 cards)

### Color Coding System
- **STY-005**: Attack cards: `border-red-500 bg-red-50`
- **STY-006**: Spell cards: `border-blue-500 bg-blue-50`
- **STY-007**: Heal cards: `border-green-500 bg-green-50`
- **STY-008**: Feature cards: `border-purple-500 bg-purple-50`
- **STY-009**: Skill cards: `border-yellow-500 bg-yellow-50`

### Emoji Design Guidelines
- **STY-010**: 1 emoji for simple concepts (🛡️ for basic defense)
- **STY-011**: 2 emojis for moderate complexity (😡💥 for rage building)
- **STY-012**: 3 emojis for complex abilities (🦴💀💥 for Bone Snap)
- **STY-013**: 4 emojis for ultimate abilities (😠😤🧖⚔️ for Berserker's Fury)
- **STY-014**: Research emoji combinations using Emojipedia.org for accuracy

## 7. Development Workflows

### Local Development
- **WFL-001**: `pnpm install` - Install dependencies
- **WFL-002**: `pnpm dev` - Start development server
- **WFL-003**: Open `localhost:3000` - Access application
- **WFL-004**: `pnpm build` - Generate production build in `dist/`

### Adding New Card Classes
- **WFL-005**: Read `/RPG Card Game/Classes/[ClassName].md` for specifications
- **WFL-006**: Create `src/data/[classname]-cards.ts` following barbarian pattern
- **WFL-007**: Update `CardGenerator.tsx` → `allCardSets` object with new class
- **WFL-008**: Design 1-4 emoji combinations following thematic patterns
- **WFL-009**: Test print preview for layout verification

### Print Optimization Workflow
- **WFL-010**: Check `src/index.css` → `@media print` section for issues
- **WFL-011**: Verify `print:w-[240px] print:h-[320px]` classes on cards
- **WFL-012**: Test different cards-per-row settings (2, 3, 4)
- **WFL-013**: Validate page margins and card spacing
- **WFL-014**: Ensure no content breaks across pages

## 8. Key Design Patterns & Practices

### Code Quality Standards
- **PAT-001**: Self-explanatory code with minimal comments explaining "why" not "what"
- **PAT-002**: Specification-driven development maintaining `requirements.md`, `design.md`, `tasks.md`
- **PAT-003**: Consistent file naming and component organization
- **PAT-004**: TypeScript strict mode with proper type definitions

### Print-First Design
- **PAT-005**: All cards must be identical 240px × 320px print size
- **PAT-006**: Responsive design with print-specific optimizations
- **PAT-007**: Dynamic spacing calculations based on layout configuration
- **PAT-008**: Page break optimization for clean printing

### Data-Driven Architecture
- **PAT-009**: Game design documents drive card data structure
- **PAT-010**: Markdown specifications translated to TypeScript interfaces
- **PAT-011**: Extensible pattern for adding new card classes
- **PAT-012**: Consistent emoji theming across all card types

## 9. Navigation & Troubleshooting Guide

### Common Development Tasks
- **NAV-001**: Game rule changes → Read `General Card Creation Rules.md`
- **NAV-002**: Class abilities → Check `Classes & Cores.md` + specific class file
- **NAV-003**: Card data modifications → Look in `src/data/` folder
- **NAV-004**: Emoji design → Follow patterns in instructions or research on Emojipedia
- **NAV-005**: Print problems → Check `src/index.css` print section
- **NAV-006**: New features → Start with `types/game.ts` for interfaces
- **NAV-007**: Layout issues → Focus on `CardBase.tsx` and `CardSheet.tsx`

### Troubleshooting Quick Reference
| Issue | Check First | Common Solution |
|-------|-------------|-----------------|
| Cards different sizes | `CardBase.tsx` print dimensions | Ensure `print:w-[240px] print:h-[320px]` |
| Blank pages | `CardSheet.tsx` & `index.css` | Remove page breaks, check margins |
| Cards too cramped | `CardSheet.tsx` gap calculation | Adjust spacing formula |
| Missing card data | `src/data/` folder | Follow `barbarian-cards.ts` pattern |
| Print layout broken | `index.css` @media print | Check print-specific classes |
| New card type needed | `types/game.ts` | Add to `CardType` enum and styling |
| Emoji not displaying | Check emoji compatibility | Use Emojipedia.org to verify emojis |
| Emoji overcrowded | `CardBase.tsx` container size | Ensure proper spacing in h-20 container |

## 10. File Organization Standards

### Critical Files for AI Context
- **FIL-001**: `src/types/game.ts` - READ FIRST for type system understanding
- **FIL-002**: `src/components/CardGenerator.tsx` - Main application entry point
- **FIL-003**: `src/components/cards/CardBase.tsx` - Core card rendering logic
- **FIL-004**: `src/data/barbarian-cards.ts` - Data pattern reference
- **FIL-005**: `src/index.css` - Print optimization CSS rules

### Game Design Reference Files
- **FIL-006**: `/RPG Card Game/Game Design Document.md` - Core mechanics
- **FIL-007**: `/RPG Card Game/General Card Creation Rules.md` - Card design rules
- **FIL-008**: `/RPG Card Game/Classes & Cores.md` - Class definitions
- **FIL-009**: `/RPG Card Game/Classes/Barbarian.md` - Implemented example

### Development Configuration
- **FIL-010**: `package.json` - Dependencies and build scripts
- **FIL-011**: `tsconfig.json` - TypeScript configuration
- **FIL-012**: `vite.config.ts` - Build tool configuration
- **FIL-013**: `index.html` - Application entry point

## 11. Extensibility Patterns

### Adding New Features
- **EXT-001**: Follow `GameCard` interface strictly for data consistency
- **EXT-002**: Use established naming conventions for files and components
- **EXT-003**: Maintain emoji design patterns across new card classes
- **EXT-004**: Keep data files separate from presentation components

### Scaling Guidelines
- **EXT-005**: New card types require updates to `CardType` enum and styling
- **EXT-006**: Additional card properties need `GameCard` interface updates
- **EXT-007**: New print layouts require `CardSheet.tsx` modifications
- **EXT-008**: Custom styling needs `index.css` print rules updates

## 12. Memory Bank Integration

### Project Context Files
- **MEM-001**: This file serves as `long-term-memory.instructions.md` in Memory Bank
- **MEM-002**: Complement with `rpg-card-generator.instructions.md` for detailed guidance
- **MEM-003**: Update when major architectural changes occur
- **MEM-004**: Cross-reference with `unified-ai-workflow.instructions.md` for process

### Session Continuity
- **MEM-005**: Start each session by reading this specification
- **MEM-006**: Validate current codebase against documented patterns
- **MEM-007**: Update this file when discovering new architectural insights
- **MEM-008**: Maintain consistency with actual implementation

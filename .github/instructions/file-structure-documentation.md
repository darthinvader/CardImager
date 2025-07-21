# Board Game Card Creator - File Structure Documentation

This document provides a comprehensive overview of every file in the project, organized by category for easy access and understanding.

## 📁 Project Overview

**Purpose**: A React-based web application for creating, designing, and printing professional-quality board game cards.

**Tech Stack**: React 19, TypeScript, TanStack Router, shadcn/ui, Tailwind CSS, Vite

---

## 🗂️ Root Configuration Files

### `package.json`
**Purpose**: Node.js project configuration and dependencies
**Contains**: 
- Project metadata and scripts
- Production dependencies (React, TanStack Router, UI libraries)
- Development dependencies (TypeScript, Vite, linting tools)
- Build and dev server configurations

### `tsconfig.json`
**Purpose**: TypeScript compiler configuration
**Contains**:
- Strict type checking rules
- Path mapping for `@/` imports
- React JSX settings
- Build output specifications

### `tsconfig.node.json`
**Purpose**: TypeScript configuration for Node.js build tools
**Contains**: Vite and build tool specific TypeScript settings

### `vite.config.ts`
**Purpose**: Vite build tool configuration
**Contains**:
- React plugin setup
- TanStack Router plugin
- Path resolution for `@/` imports
- Development server settings

### `components.json`
**Purpose**: shadcn/ui component library configuration
**Contains**: UI component generation settings and styling preferences

### `db.json`
**Purpose**: Mock database for json-server (development)
**Contains**: Sample data for API testing during development

---

## 🎨 Styling & Design

### `src/index.css`
**Purpose**: Global CSS styles and Tailwind CSS imports
**Contains**:
- Tailwind CSS base, components, and utilities
- Custom CSS variables and global styles
- Print-specific media queries

### `src/lib/utils.ts`
**Purpose**: Utility functions for styling and common operations
**Contains**:
- `cn()` function for conditional class name merging
- Tailwind CSS class combination utilities

---

## 🧱 Core Application Files

### `src/main.tsx`
**Purpose**: Application entry point
**Contains**:
- React DOM rendering
- Root component mounting
- Initial application bootstrap

### `src/App.tsx`
**Purpose**: Root application component
**Contains**:
- TanStack Router provider setup
- Global application context
- Root-level error boundaries

---

## 🛤️ Routing System

### `src/router.tsx`
**Purpose**: Router configuration and setup
**Contains**:
- TanStack Router instance creation
- Route tree import and configuration
- TypeScript router registration

### `src/routeTree.gen.ts`
**Purpose**: Auto-generated route tree (DO NOT EDIT)
**Contains**: Generated route definitions from TanStack Router CLI

### Route Files (`src/routes/`)

#### `src/routes/__root.tsx`
**Label**: `[ROOT-LAYOUT]`
**Purpose**: Root layout component for all pages
**Contains**:
- Global header with navigation
- Page wrapper and styling
- Development tools integration

#### `src/routes/index.tsx`
**Label**: `[GALLERY-PAGE]`
**Purpose**: Main card gallery and dashboard
**Contains**:
- Card statistics display
- Card grid layout
- Bulk download functionality
- Card detail modal

#### `src/routes/create.tsx`
**Label**: `[CREATE-PAGE]`
**Purpose**: Card creation form and editor
**Contains**:
- Card creation form with validation
- Live preview functionality
- Effect management system
- Save and download options

#### `src/routes/print.tsx`
**Label**: `[PRINT-PAGE]`
**Purpose**: Print sheet generation and layout
**Contains**:
- Print layout configurations
- Paper size options (A4, Letter, A3)
- Print preview with cut lines
- Professional print sheet download

---

## 🎴 Card System Components

### `src/components/cards/GameCard.tsx`
**Label**: `[CARD-COMPONENT]`
**Purpose**: Individual card display component
**Contains**:
- Card rendering with proper dimensions
- Rarity-based styling
- Multiple size variants (small, medium, large, print)
- Individual card download functionality
- Stats display and effects rendering

### `src/components/cards/CardGallery.tsx`
**Label**: `[GALLERY-COMPONENT]`
**Purpose**: Grid layout for displaying multiple cards
**Contains**:
- Responsive grid system
- Card size controls
- Empty state handling
- Download button integration

---

## 🎛️ UI Components (`src/components/ui/`)

All components in this folder are from shadcn/ui library:

### `src/components/ui/badge.tsx`
**Label**: `[UI-BADGE]`
**Purpose**: Badge/tag component for card types and rarities

### `src/components/ui/button.tsx`
**Label**: `[UI-BUTTON]`
**Purpose**: Button component with variants and sizes

### `src/components/ui/card.tsx`
**Label**: `[UI-CARD]`
**Purpose**: Card container component (not game card)

### `src/components/ui/input.tsx`
**Label**: `[UI-INPUT]`
**Purpose**: Form input component

### `src/components/ui/label.tsx`
**Label**: `[UI-LABEL]`
**Purpose**: Form label component

### `src/components/ui/select.tsx`
**Label**: `[UI-SELECT]`
**Purpose**: Dropdown select component

### `src/components/ui/textarea.tsx`
**Label**: `[UI-TEXTAREA]`
**Purpose**: Multi-line text input component

---

## 📊 Data & Schema Management

### `src/lib/schemas/card.ts`
**Label**: `[CARD-SCHEMA]`
**Purpose**: Card data structure and validation
**Contains**:
- Zod schema for card validation
- TypeScript types for Card, Effects, Rarity, CardType
- Card creation input validation
- Type safety for all card operations

### `src/data/fakeCards.ts`
**Label**: `[SAMPLE-DATA]`
**Purpose**: Sample card data for development and testing
**Contains**:
- 6+ professionally designed sample cards
- Diverse card types and rarities
- Board game mechanics examples
- Utility functions for data manipulation

---

## 💾 Download System

### `src/lib/download.ts`
**Label**: `[DOWNLOAD-UTILS]`
**Purpose**: Core download functionality
**Contains**:
- Individual card download (PNG, JPG, PDF)
- Bulk card downloads
- Print sheet generation
- High-resolution export (300 DPI)
- Standard card dimensions
- File naming and sanitization

### `src/hooks/useCardDownload.ts`
**Label**: `[DOWNLOAD-HOOK]`
**Purpose**: React hook for download operations
**Contains**:
- Download progress tracking
- Error handling
- Loading states
- Download validation
- React integration for download system

---

## 📚 Documentation (`RPG Card Game/`)

### `Game Design Document.md`
**Label**: `[GAME-DESIGN]`
**Purpose**: Overall game design and mechanics

### `General Card Creation Rules.md`
**Label**: `[CARD-RULES]`
**Purpose**: Guidelines for creating balanced cards

### `Classes & Cores.md`
**Label**: `[GAME-CLASSES]`
**Purpose**: Character classes and core mechanics

### `Items.md`
**Label**: `[GAME-ITEMS]`
**Purpose**: Item cards and equipment system

### `Status & Conditions.md`
**Label**: `[GAME-STATUS]`
**Purpose**: Status effects and conditions

### `Enemies & Pattern Ai.md`
**Label**: `[GAME-ENEMIES]`
**Purpose**: Enemy cards and AI patterns

### `Testing.md`
**Label**: `[GAME-TESTING]`
**Purpose**: Game testing procedures

### `Prompt.md`
**Label**: `[GAME-PROMPT]`
**Purpose**: Game prompts and scenarios

### `Classes/Barbarian.md` & `Classes/Barbarian Help Prompt.md`
**Label**: `[BARBARIAN-CLASS]`
**Purpose**: Specific class documentation

---

## ⚙️ Configuration & Instructions (`.github/instructions/`)

### `copilot-thought-logging.instructions.md`
**Label**: `[COPILOT-PROCESS]`
**Purpose**: Guidelines for AI assistant workflow and process tracking

### `markdown.instructions.md`
**Label**: `[MARKDOWN-STANDARDS]`
**Purpose**: Documentation and content creation standards

### `memory-bank.instructions.md`
**Label**: `[MEMORY-SYSTEM]`
**Purpose**: AI memory and context management system

### `reactjs.instructions.md`
**Label**: `[REACT-STANDARDS]`
**Purpose**: ReactJS development standards and best practices

### `self-explanatory-code-commenting.instructions.md`
**Label**: `[COMMENTING-GUIDE]`
**Purpose**: Code commenting guidelines for maintainable code

### `tanstack-start-shadcn-tailwind.instructions.md`
**Label**: `[TECH-STACK-GUIDE]`
**Purpose**: Guidelines for TanStack Start applications with shadcn/ui

### `taming-copilot.instructions.md`
**Label**: `[COPILOT-CONTROL]`
**Purpose**: Guidelines for controlling AI assistant behavior

---

## 🚀 Quick Access Labels

Use these labels to quickly find files:

| Label | File | Purpose |
|-------|------|---------|
| `[CARD-COMPONENT]` | `src/components/cards/GameCard.tsx` | Individual card rendering |
| `[GALLERY-COMPONENT]` | `src/components/cards/CardGallery.tsx` | Card grid display |
| `[CARD-SCHEMA]` | `src/lib/schemas/card.ts` | Data structure & validation |
| `[SAMPLE-DATA]` | `src/data/fakeCards.ts` | Test cards |
| `[DOWNLOAD-UTILS]` | `src/lib/download.ts` | Core download system |
| `[DOWNLOAD-HOOK]` | `src/hooks/useCardDownload.ts` | React download integration |
| `[GALLERY-PAGE]` | `src/routes/index.tsx` | Main page |
| `[CREATE-PAGE]` | `src/routes/create.tsx` | Card editor |
| `[PRINT-PAGE]` | `src/routes/print.tsx` | Print sheets |
| `[ROOT-LAYOUT]` | `src/routes/__root.tsx` | App layout |

---

## 🔧 Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Generate route tree (after route changes)
pnpm exec tsr generate

# Run linting
pnpm lint

# Start JSON server (for API testing)
pnpm serve-json
```

---

## 📈 File Relationships

```
App.tsx → router.tsx → routeTree.gen.ts
├── __root.tsx (layout)
├── index.tsx → CardGallery → GameCard
├── create.tsx → GameCard (preview)
└── print.tsx → GameCard (sheet)

GameCard → card schema → sample data
Download system → html2canvas + jsPDF + file-saver
UI components → shadcn/ui → Tailwind CSS
```

This documentation should be updated whenever new files are added or existing files are significantly modified.

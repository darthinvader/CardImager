import { GameCard } from '@/types/game';

/**
 * Expands cards with their default quantities
 * @param cards Array of unique cards with potential defaultQuantity
 * @returns Array of cards expanded to include duplicates
 */
export function expandCardsWithQuantities(cards: GameCard[]): GameCard[] {
  const expandedCards: GameCard[] = [];

  cards.forEach((card) => {
    const quantity = card.defaultQuantity || 1;
    for (let i = 0; i < quantity; i++) {
      expandedCards.push({
        ...card,
        // Create unique IDs for duplicates while preserving the base ID for the first copy
        id: i === 0 ? card.id : `${card.id}-${i + 1}`
      });
    }
  });

  return expandedCards;
}

/**
 * Gets unique cards from an expanded card list (removes duplicates)
 * @param cards Array of potentially expanded cards
 * @returns Array of unique cards with defaultQuantity set
 */
export function getUniqueCardsWithQuantities(cards: GameCard[]): GameCard[] {
  const cardMap = new Map<string, { card: GameCard; count: number }>();

  cards.forEach((card) => {
    // Extract base ID (remove -1, -2, etc. suffixes)
    const baseId = card.id.replace(/-\d+$/, '');

    if (cardMap.has(baseId)) {
      cardMap.get(baseId)!.count++;
    } else {
      cardMap.set(baseId, {
        card: { ...card, id: baseId },
        count: 1
      });
    }
  });

  return Array.from(cardMap.values()).map(({ card, count }) => ({
    ...card,
    defaultQuantity: count
  }));
}

/**
 * Generates final card list for printing based on custom quantities
 * @param uniqueCards Array of unique cards
 * @param customQuantities Object mapping card IDs to custom quantities
 * @returns Array of cards ready for printing
 */
export function generatePrintCards(
  uniqueCards: GameCard[],
  customQuantities: { [cardId: string]: number } = {}
): GameCard[] {
  const printCards: GameCard[] = [];

  uniqueCards.forEach((card) => {
    const quantity = customQuantities[card.id] ?? card.defaultQuantity ?? 1;
    for (let i = 0; i < quantity; i++) {
      printCards.push({
        ...card,
        id: i === 0 ? card.id : `${card.id}-copy-${i + 1}`
      });
    }
  });

  return printCards;
}

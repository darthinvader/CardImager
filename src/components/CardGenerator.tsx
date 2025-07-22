import { useState } from 'react';
import { CardSheet } from './cards/CardSheet';
import { barbarianStarterCards, barbarianClassCards } from '@/data/barbarian-cards';
import { generatePrintCards } from '@/lib/cardUtils';

const allCardSets = {
  'barbarian-starter': {
    name: 'Barbarian Starter Cards',
    cards: barbarianStarterCards
  },
  'barbarian-attacks': {
    name: 'Barbarian Attack Cards',
    cards: barbarianClassCards.filter(card => card.type === 'Attack')
  },
  'barbarian-spells': {
    name: 'Barbarian Spell Cards',
    cards: barbarianClassCards.filter(card => card.type === 'Spell')
  },
  'barbarian-features': {
    name: 'Barbarian Feature Cards',
    cards: barbarianClassCards.filter(card => card.type === 'Feature')
  },
  'barbarian-skills': {
    name: 'Barbarian Skill Cards',
    cards: barbarianClassCards.filter(card => card.type === 'Skill')
  },
  'barbarian-class': {
    name: 'Barbarian Class Cards',
    cards: barbarianClassCards
  },
  'barbarian-all': {
    name: 'All Barbarian Cards',
    cards: [...barbarianStarterCards, ...barbarianClassCards]
  }
};

export function CardGenerator() {
  const [selectedSet, setSelectedSet] = useState<string>('barbarian-all');
  const [cardsPerRow, setCardsPerRow] = useState<number>(3);
  const [customQuantities, setCustomQuantities] = useState<{ [cardId: string]: number }>({});

  const handlePrint = () => {
    window.print();
  };

  const currentCardSet = allCardSets[selectedSet as keyof typeof allCardSets];

  const updateCardQuantity = (cardId: string, quantity: number) => {
    setCustomQuantities(prev => {
      const newQuantities = { ...prev };
      if (quantity === (currentCardSet.cards.find(card => card.id === cardId)?.defaultQuantity || 1)) {
        delete newQuantities[cardId];
      } else {
        newQuantities[cardId] = quantity;
      }
      return newQuantities;
    });
  };

  const getCardQuantity = (cardId: string) => {
    return customQuantities[cardId] ?? currentCardSet.cards.find(card => card.id === cardId)?.defaultQuantity ?? 1;
  };

  const printCards = generatePrintCards(currentCardSet.cards, customQuantities);
  const totalCards = printCards.length;

  return (
    <div className="bg-gray-100 print:bg-white">
      {/* Controls - hidden when printing */}
      <div className="p-4 bg-white shadow-sm print:hidden">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">RPG Card Generator</h1>
          
          <div className="flex gap-4 items-end mb-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">
                Card Set
              </label>
              <select
                value={selectedSet}
                onChange={(e) => setSelectedSet(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                {Object.entries(allCardSets).map(([key, set]) => (
                  <option key={key} value={key}>
                    {set.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                Cards per Row
              </label>
              <select
                value={cardsPerRow.toString()}
                onChange={(e) => setCardsPerRow(parseInt(e.target.value))}
                className="p-2 border rounded-md"
              >
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              🖨️ Print Cards
            </button>
          </div>

          {/* Card quantity controls */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Card Quantities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-h-60 overflow-y-auto bg-gray-50 p-3 rounded-md">
              {currentCardSet.cards.map((card) => (
                <div key={card.id} className="flex items-center justify-between bg-white p-2 rounded border">
                  <span className="text-sm font-medium truncate flex-1 mr-2">
                    {card.name} {card.defaultQuantity && card.defaultQuantity > 1 ? `(${card.defaultQuantity})` : ''}
                  </span>
                  <select
                    value={getCardQuantity(card.id).toString()}
                    onChange={(e) => updateCardQuantity(card.id, parseInt(e.target.value))}
                    className="text-sm p-1 border rounded w-16"
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-sm text-gray-600">
            <p>Total cards to print: {totalCards}</p>
            <p>Use your browser&apos;s print function or the Print Cards button above to print these cards.</p>
          </div>
        </div>
      </div>

      {/* Card Display */}
      <CardSheet
        cards={printCards}
        title={currentCardSet.name}
        cardsPerRow={cardsPerRow}
        className="max-w-none"
      />
    </div>
  );
}

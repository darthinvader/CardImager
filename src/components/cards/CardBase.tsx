import { GameCard, CardType } from '@/types/game';
import { cn } from '@/lib/utils';

interface CardBaseProps {
  card: GameCard;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const cardTypeColors: Record<CardType, string> = {
  Attack: 'border-red-500 bg-red-50',
  Spell: 'border-blue-500 bg-blue-50',
  Heal: 'border-green-500 bg-green-50',
  Feature: 'border-purple-500 bg-purple-50',
  Skill: 'border-yellow-500 bg-yellow-50',
};

const cardTypeIcons: Record<CardType, string> = {
  Attack: '⚔️',
  Spell: '🪄',
  Heal: '❤️‍🩹',
  Feature: '🌟',
  Skill: '🛠️',
};

export function CardBase({ card, size = 'medium', className }: CardBaseProps) {
  const sizeClasses = {
    small: 'w-32 h-44',
    medium: 'w-48 h-64',
    large: 'w-64 h-88',
  };

  return (
    <div
      className={cn(
        'border-2 rounded-lg p-3 shadow-lg bg-white',
        cardTypeColors[card.type],
        sizeClasses[size],
        'flex flex-col',
        'print:break-inside-avoid',
        // Enhanced dimensions for better print readability
        'print:w-[180px] print:h-[250px]',
        'print:p-2', // Slightly less padding in print for more content space
        className
      )}
    >
      {/* Header - Fixed height */}
      <div className="flex justify-between items-start mb-2 h-8 flex-shrink-0">
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold text-gray-800 leading-tight truncate">
            {card.name}
          </h3>
        </div>
        <div className="flex flex-col items-end ml-2 flex-shrink-0">
          <div className="text-lg">{cardTypeIcons[card.type]}</div>
          <div className="text-xs text-gray-600">{card.type}</div>
        </div>
      </div>

      {/* Cost - Fixed height with print-friendly layout */}
      <div className="flex items-center gap-1 mb-2 h-6 flex-shrink-0 print:h-auto print:flex-wrap">
        <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-800 text-white text-xs font-bold rounded-full flex-shrink-0">
          {card.cost.actions}
        </span>
        <span className="text-xs text-gray-600 print:text-[0.65rem]">Actions</span>
        {card.cost.resource && (
          <>
            <span className="text-xs text-gray-400">+</span>
            <span className="inline-flex items-center justify-center w-6 h-6 bg-orange-500 text-white text-xs font-bold rounded-full flex-shrink-0">
              {card.cost.resource.amount}
            </span>
            <span className="text-xs text-gray-600 truncate print:text-[0.65rem] print:whitespace-nowrap">
              {card.cost.resource.type}
            </span>
          </>
        )}
      </div>

      {/* Image - Fixed height */}
      <div className="mb-2 bg-gray-100 rounded border flex items-center justify-center h-16 flex-shrink-0">
        <span className="text-2xl">{card.image}</span>
      </div>

      {/* Effects - Takes remaining space but with fixed container */}
      <div className="flex-1 min-h-0">
        <div className="space-y-1 h-full overflow-hidden print:space-y-0.5">
          {card.effects.map((effect, index) => (
            <div key={index} className="text-xs text-gray-700 print:text-[0.65rem]">
              <div className="font-medium leading-tight print:leading-snug">{effect.description}</div>
              {effect.damage && (
                <div className="text-red-600 leading-tight print:leading-snug">⚔️ {effect.damage} damage</div>
              )}
              {effect.block && (
                <div className="text-blue-600 leading-tight print:leading-snug">🛡️ {effect.block} block</div>
              )}
              {effect.heal && (
                <div className="text-green-600 leading-tight print:leading-snug">❤️ {effect.heal} heal</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Keywords - Fixed to bottom */}
      {(card.expend || card.sacrifice || card.piercing || card.combo || card.keep) && (
        <div className="flex flex-wrap gap-1 mt-2 flex-shrink-0">
          {card.expend && (
            <span className="px-1 py-0.5 bg-gray-200 text-gray-700 text-xs rounded">
              Expend
            </span>
          )}
          {card.sacrifice && (
            <span className="px-1 py-0.5 bg-red-200 text-red-700 text-xs rounded">
              Sacrifice
            </span>
          )}
          {card.piercing && (
            <span className="px-1 py-0.5 bg-orange-200 text-orange-700 text-xs rounded">
              Piercing
            </span>
          )}
          {card.combo && (
            <span className="px-1 py-0.5 bg-purple-200 text-purple-700 text-xs rounded">
              Combo
            </span>
          )}
          {card.keep && (
            <span className="px-1 py-0.5 bg-blue-200 text-blue-700 text-xs rounded">
              Keep
            </span>
          )}
        </div>
      )}
    </div>
  );
}

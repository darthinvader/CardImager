import { GameCard } from '@/types/game';
import { CardBase } from './CardBase';
import { cn } from '@/lib/utils';

interface CardSheetProps {
  cards: GameCard[];
  title?: string;
  cardsPerRow?: number;
  className?: string;
}

export function CardSheet({ 
  cards, 
  title, 
  cardsPerRow = 3, 
  className 
}: CardSheetProps) {
  return (
    <div className={cn('p-4 print:p-1', className)}>
      {title && (
        <h2 className="text-2xl font-bold mb-4 print:hidden">
          {title}
        </h2>
      )}
      
      <div 
        className={cn(
          'grid gap-4 print:gap-2',
          `grid-cols-${cardsPerRow}`
        )}
        style={{
          gridTemplateColumns: `repeat(${cardsPerRow}, minmax(0, 1fr))`,
          gap: cardsPerRow === 4 ? '0.25rem' : cardsPerRow === 2 ? '1rem' : '0.5rem'
        }}
      >
        {cards.map((card) => (
          <CardBase
            key={card.id}
            card={card}
            size="medium"
          />
        ))}
      </div>
    </div>
  );
}

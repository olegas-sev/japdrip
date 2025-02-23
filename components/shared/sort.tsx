import { cn } from '@/lib/utils';
import { ArrowDownWideNarrow, Settings2 } from 'lucide-react';
import React from 'react';

interface Props {
  className?: string;
}

export const Sort: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer',
        className
      )}
    >
      <Settings2 size={16} />
      <b>Sortera:</b>
      <b className="text-primary">Mest populära</b>
    </div>
  );
};

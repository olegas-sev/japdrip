'use client';

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import React from 'react';

interface Props {
  className?: string;
}

// ['Kimono', 'Yukata', 'Hakama', 'Suteteko']
const categories = [
  {
    id: 1,
    name: 'Kimono',
  },
  {
    id: 2,
    name: 'Yukata',
  },
  {
    id: 3,
    name: 'Hakama',
  },
  {
    id: 4,
    name: 'Suteteko',
  },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const currentCategoryId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
    >
      {categories.map(({ name, id }, i) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            currentCategoryId == id &&
              'bg-white shadow-md shadow-gray-200 text-primary'
          )}
          key={i}
          href={`#${name}`}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};

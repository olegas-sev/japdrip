import { cn } from '@/lib/utils';
import React from 'react';
import { Sort } from './sort';
import { Categories } from './categories';
import { Container } from './container';

interface Props {
  className?: string;
}

export const CategoriesBar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        'sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10',
        className
      )}
    >
      <Container className="flex items-center justify-between">
        <Categories />
        <Sort />
      </Container>
    </div>
  );
};

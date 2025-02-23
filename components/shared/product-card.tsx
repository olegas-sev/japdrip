import Link from 'next/link';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-64">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p>
          Very cool very stylish, its a traditional kimono from the south japan
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-2">
            från <b>{price} SEK</b>
          </span>

          <Button>
            <Plus className="w-5 h-5 mr-1" />
            Lägga till
          </Button>
        </div>
      </Link>
    </div>
  );
};

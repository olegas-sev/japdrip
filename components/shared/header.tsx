import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '../ui';
import { Container } from './container';
import { CircleUserRound, CornerRightDown, ShoppingCart } from 'lucide-react';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Left Side Header */}
        <div className="flex gap-4 items-center">
          <Image src="/logo.png" alt="Logo" width={50} height={50}></Image>
          <h1 className="text-2xl uppercase font-black">JapDrip</h1>
        </div>
        {/* Right Side Header */}

        <div className="flex gap-4 items-center">
          <Button variant="outline" className="flex items-center gap-1">
            <CircleUserRound size={16} />
            Logga in
          </Button>

          <div>
            <Button className="group relative">
              <b>230 SEK</b>
              <span className="h-full w-[1px] bg-white/60 mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart
                  className="h-4 w-4 relative"
                  strokeWidth={2}
                ></ShoppingCart>
                <b>2</b>
              </div>
              <CornerRightDown className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

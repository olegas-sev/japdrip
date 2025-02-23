import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { PriceSlider } from '../ui/slider';
import { FilterCheckboxGroups } from './filter-checkbox-groups';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filtrera" size="sm" className="mb-5 font-bold" />
      {/* Checkboxes */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Tillgängligt" value="1" />
        <FilterCheckbox text="Slut i lager" value="2" />
      </div>

      {/* Price filter */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Pris</p>
        <div className="flex gap-3 mb-5">
          {/* Make sure to implement ISO 4217 */}
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={3000}
            defaultValue={0}
          />
          <Input
            type="number"
            placeholder="3000"
            min={100}
            max={3000}
            defaultValue={3000}
          />
        </div>
        <PriceSlider min={0} max={3000} step={10} value={[0, 3000]} />
      </div>
      <FilterCheckboxGroups
        title="Material"
        className="mt-5"
        limit={6}
        defaultItems={[
          {
            text: 'Satin',
            value: '1',
          },
          {
            text: 'Linne',
            value: '2',
          },
          {
            text: 'Bomull',
            value: '3',
          },
        ]}
        items={[
          {
            text: 'Satin',
            value: '1',
          },
          {
            text: 'Linne',
            value: '2',
          },
          {
            text: 'Bomull',
            value: '3',
          },
          {
            text: 'Kräp',
            value: '4',
          },
          {
            text: 'Läder',
            value: '5',
          },
          {
            text: 'Chiffong',
            value: '6',
          },
          {
            text: 'Denim',
            value: '7',
          },
          {
            text: 'Polyester',
            value: '8',
          },
          {
            text: 'Kanvas',
            value: '9',
          },
        ]}
      />
    </div>
  );
};

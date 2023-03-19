import { useState } from 'react';
import cn from 'classnames';

import css from './Filter.module.scss';

const Filter = () => {
  const fItemsTemp = [
    { label: 'Все', value: 'all', checked: true },
    { label: 'Без пересадок', value: '0', checked: true },
    { label: '1 пересадка', value: '1', checked: false },
    { label: '2 пересадки', value: '2', checked: true },
    { label: '3 пересадки', value: '3', checked: true },
  ];

  const fItems = fItemsTemp.map(({ label, value, checked }) => {
    return <FilterItem key={value} label={label} value={value} checked={checked} />;
  });

  return (
    <div className={cn(css.Filter, 'boxShadow', 'borderRadius')}>
      <span className={css.label}>Количество пересадок</span>
      {fItems}
    </div>
  );
};

const FilterItem = ({ value, label, checked }) => {
  const [ch, setChecked] = useState(checked);

  return (
    <label className={css.item}>
      <input
        type="checkbox"
        value={value}
        className={css.checkbox}
        checked={ch}
        onChange={() => {
          setChecked((s) => !s);
        }}
      />
      <span className={css.visualCheckBox}></span>
      {label}
    </label>
  );
};

export default Filter;

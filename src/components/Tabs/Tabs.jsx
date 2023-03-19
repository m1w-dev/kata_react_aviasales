import cn from 'classnames';

import css from './Tabs.module.scss';

const Tabs = () => {
  return (
    <div className={cn(css.Tabs, 'borderRadius')}>
      <div className={cn(css.tab, { [`${css.active}`]: true })}>Самый дешевый</div>
      <div className={cn(css.tab, { [`${css.active}`]: false })}>Самый быстрый</div>
    </div>
  );
};

export default Tabs;

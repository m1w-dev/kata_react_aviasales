import cn from 'classnames';

import css from './Button.module.scss';

const Button = () => {
  return <div className={cn(css.Button, 'borderRadius')}>Показать ещё 5 билетов</div>;
};

export default Button;

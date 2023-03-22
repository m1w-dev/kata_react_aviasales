import cn from 'classnames';
import propTypes from 'prop-types';

import css from './Button.module.scss';

const Button = () => {
  return <div className={cn(css.Button, 'borderRadius')}>Показать ещё 5 билетов</div>;
};

Button.defaultProps = {
  onclick: () => {},
};
Button.propTypes = {
  onclick: propTypes.func,
};

export default Button;

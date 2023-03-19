import cn from 'classnames';

import css from './Logo.module.scss';
import globe from './globe.svg';
import plane from './plane.svg';

const Logo = () => {
  const planeCSS = cn(css.planeImg, css.img, { [`${css.onLoad}`]: false });

  return (
    <div className={css.logo}>
      <div className={cn(css.plane)}>
        <img src={plane} alt="plane" className={planeCSS} />
      </div>
      <img src={globe} alt="globe" className={cn(css.globe, css.img)} />
    </div>
  );
};

export default Logo;

import Button from '../Button';
import Filter from '../Filter';
import Logo from '../Logo';
import Tabs from '../Tabs';
import Ticket from '../Ticket';

import css from './App.module.scss';

const App = () => {
  return (
    <div className={css.Aviasales}>
      <Logo />
      <div className={css.layout}>
        <div className={css.sidebar}>
          <Filter />
        </div>
        <div className={css.main}>
          <Tabs />
          <Ticket />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default App;

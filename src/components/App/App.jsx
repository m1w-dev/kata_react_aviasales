import Button from '../Button';
import Filter from '../Filter';
import Logo from '../Logo';
import Tabs from '../Tabs';
import Ticket from '../Ticket';

import './App.module.scss';

const App = () => {
  return (
    <div className="Aviasales">
      <Logo />
      <Tabs />
      <Filter />
      <Ticket />
      <Button />
    </div>
  );
};

export default App;

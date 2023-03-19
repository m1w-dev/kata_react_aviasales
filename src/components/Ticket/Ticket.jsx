import cn from 'classnames';

import css from './Ticket.module.scss';

const Ticket = () => {
  return (
    <div className={cn(css.Ticket, 'borderRadius', 'boxShadow')}>
      <div className={css.header}>
        <div className={css.price}>13 400 Р</div>
        <img src="" alt="" className={css.logo} />
      </div>
      <div className={css.sections}>
        <TicketSection />
        <TicketSection />
      </div>
    </div>
  );
};

const TicketSection = () => {
  return (
    <div className={css.section}>
      <div className={css.item}>
        <div className={css.label}>MOW - LED</div>
        <div className={css.value}>10:45 – 08:00</div>
      </div>
      <div className={css.item}>
        <div className={css.label}>В пути</div>
        <div className={css.value}>28ч 30м</div>
      </div>
      <div className={css.item}>
        <div className={css.label}>2 пересадки</div>
        <div className={css.value}>IST, HKG</div>
      </div>
    </div>
  );
};

export default Ticket;

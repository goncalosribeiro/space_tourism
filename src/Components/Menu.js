import React from 'react';
import css from './Menu.module.css';

const Menu = () => {
  return (
    <div className={css.menu}>
      <div className={css.logo}>
        <div className={css.logo_w}></div>
      </div>
      <div className={css.link_bar}>
        <div className={css.link}>
          <span>00</span>Home
        </div>
        <div className={css.link}>
          <span>01</span>Destination
        </div>
        <div className={css.link}>
          <span>02</span>Crew
        </div>
        <div className={css.link}>
          <span>03</span>Technology
        </div>
      </div>
    </div>
  );
};

export default Menu;

// src/components/Navigation/Navigation.jsx

import React from 'react';
import { NavLink } from 'react-router-dom'; // Используем NavLink для активных ссылок

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contacts" activeClassName="active">Contacts</NavLink>
        </li>
        {/* Добавьте другие ссылки по мере необходимости */}
      </ul>
    </nav>
  );
};

export default Navigation;

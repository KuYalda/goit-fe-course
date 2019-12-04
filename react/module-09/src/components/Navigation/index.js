import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => (
  <ul
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      listStyle: 'none',
      width: '500px',
      margin: '0px auto',
    }}
  >
    <li>
      <NavLink to={routes.HOME}>Home Page</NavLink>
    </li>
    <li>
      <NavLink to={routes.SHOWS}>Shows Page</NavLink>
    </li>
  </ul>
);

export default Navigation;

import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const PageNotFound = () => (
  <div>
    <h2>Page not Found</h2>
    <p>
      Our HomePage:
      <NavLink to={routes.HOME}>home</NavLink>
    </p>
  </div>
);

export default PageNotFound;

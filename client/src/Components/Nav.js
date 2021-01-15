import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles.scss';

const Nav = () => {
  return (
    <nav className="top-navigation">
      <Link to={'/'}>
        <h3>Marcus Freemon</h3>
      </Link>
      <ul>
        <li><NavLink activeClassName='active' to={'/about'}>About</NavLink></li>
        <li><NavLink activeClassName='active' to={'/work'}>Work</NavLink></li>
        <li><NavLink activeClassName='active' to={'/contact'}>Contact</NavLink></li>
      </ul>
    </nav>
  )
}
export default Nav;

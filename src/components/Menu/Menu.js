import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

export function Menu() {
  return (
    <ul className="Menu">
      <li><NavLink className="Menu__item" to="/">Home</NavLink></li>
      <li><NavLink className="Menu__item" to="/about-us">About us</NavLink></li>
      <li><NavLink className="Menu__item" to="/pricing">Prices</NavLink></li>
      <li><NavLink className="Menu__item" to="/create">Create</NavLink></li>
    </ul>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h3>React Redux demo</h3>
    <ul>
      <li>
        <Link to='/weather'>Weather</Link>
      </li>
      <li>
        <Link to='/click-count'>Click Count</Link>
      </li>
    </ul>
  </header>
);

export default Header;

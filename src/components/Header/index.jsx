import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Header = () => (
  <header>
    <div className="container">
      <h1 className="site-title">
        <Link to="/">LeviExpress</Link>
      </h1>
    </div>
  </header>
);

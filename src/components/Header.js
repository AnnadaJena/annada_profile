import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/header.scss';

export default function Header() {
  return (
    <header>
      <ul className="nav-bar">
        <li>
          <Link
            to={{
              pathname: '/profile'
            }}
          >
            PROFILE
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: '/projects'
            }}
          >
            PROJECTS
          </Link>
        </li>
      </ul>
    </header>
  );
}

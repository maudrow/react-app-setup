import * as React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css'

const NAV_SECTIONS = {
  HOME: 'home',
  ABOUT: 'about',
}

function Nav({ selected }: { selected: string }) {
  return (
    <div>
      <Link
        to='/'
        className={selected === NAV_SECTIONS.HOME ? 'active' : ""}
      >Home</Link>
      {' '}
      <Link
        to='/about'
        className={selected === NAV_SECTIONS.ABOUT ? 'active' : ""}
      >About</Link>
    </div>
  )
}

export default Nav;
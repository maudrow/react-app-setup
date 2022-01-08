import * as React from 'react';

import './Title.css'
import Nav from './Nav';

function Layout({ children, title, selected }: { children: React.ReactNode, title: string, selected: string }) {
  return (
    <div>
      <Nav selected={selected}/>
      <h1 className='title'>{title}</h1>
      {children}
    </div>
  )
}

export default Layout;
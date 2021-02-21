import {Card} from '../card';
import React, {useState} from 'react';
import {NavTabsProps} from './NavTabs.types';
export function NavTabs({tabs}: NavTabsProps) {
  const [active, setActive] = useState(0);

  if (tabs.length === 0) {
    throw new Error('You must have at least 1 tab');
  }

  function getHeader() {
    return (
      <ul className="nav nav-tabs">
        {tabs.map((tab, i) => (
          <li className="nav-item" key={i} style={{cursor: 'pointer'}}>
            <a
              className={`nav-link ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              {tab.text}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return <Card header={getHeader()}>{tabs[active].children}</Card>;
}

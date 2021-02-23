import React, {useContext} from 'react';
import {sessionContext} from '../../../context/session';
import {NavBarLink} from '../../generic/navbar/navbar-link';
import {UserDropdown} from '../../generic/navbar/user-dropdown';
export function NavBar() {
  const {user} = useContext(sessionContext);

  if (!user) {
    return null;
  }

  return (
    <nav className="navigation-container">
      <ul
        className="navigation-menu flex-container"
        style={{width: '100%', maxWidth: 1055, margin: '0 auto'}}
      >
        {!!user && (
          <>
            <NavBarLink to="/me">Home</NavBarLink>
            <NavBarLink to="/community/news">News</NavBarLink>
            <NavBarLink to="/community/staff">Staff Team</NavBarLink>
            <NavBarLink to="/community/games">High Scores</NavBarLink>
            <li className="navigation-item navigation-right-side-item has-items">
              <UserDropdown />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

import './Client.scss';
import React, {useContext} from 'react';
import {UserGuard} from '../../guard/user';
import {ClientActions} from './client-actions';
import {ClientContainer} from './client-container';
import {themeContext} from '../../../context/theme';

export function Client() {
  const {showClient} = useContext(themeContext);

  return (
    <UserGuard redirect={false}>
      <div
        className={`hotel-container ${showClient ? 'visible' : 'not-visible'}`}
      >
        <ClientActions />
        <ClientContainer />
      </div>
    </UserGuard>
  );
}

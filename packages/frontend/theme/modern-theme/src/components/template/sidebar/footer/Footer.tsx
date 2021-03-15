import {themeContext} from '@instinct-web/core';
import React, {useContext, useState} from 'react';
import {AboutModal} from './about-modal/AboutModal';

export function Footer() {
  const [showAbout, toggleAbout] = useState<boolean>(false);
  const {showFooter} = useContext(themeContext);

  if (!showFooter) {
    return null;
  }

  function toggleAboutModal(): void {
    toggleAbout(!showAbout);
  }
  return (
    <>
      <div
        style={{
          position: 'absolute',
          bottom: 10,
          left: 0,
          width: '100%',
          textAlign: 'center',
        }}
      >
        <img
          alt="instinct logo"
          src="https://i.imgur.com/Bi8D2aL.png"
          style={{cursor: 'pointer'}}
          onClick={toggleAboutModal}
        />
      </div>
      <AboutModal isOpen={showAbout} onToggle={toggleAboutModal} />
    </>
  );
}

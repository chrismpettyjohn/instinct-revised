import './Footer.scss';
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
      <footer className="footer-container">
        <div className="footer-social-buttons flex-container flex-horizontal-center">
          <img
            alt="instinct logo"
            src="https://i.imgur.com/Bi8D2aL.png"
            onClick={toggleAboutModal}
            style={{cursor: 'pointer'}}
          />
        </div>
        <div className="footer-copyright">
          <b onClick={toggleAboutModal}>Instinct</b>&nbsp;by&nbsp;<b>LeChris</b>
        </div>
      </footer>
      <AboutModal isOpen={showAbout} onToggle={toggleAboutModal} />
    </>
  );
}

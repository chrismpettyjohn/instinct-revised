import './LoadingScreen.scss';
import React, {useContext, useEffect} from 'react';
import {
  clientService,
  ClientEvent,
  sessionContext,
  clientContext,
  configContext,
} from '@instinct-web/core';

export function LoadingScreen() {
  const {config} = useContext(configContext);
  const {setOnline} = useContext(sessionContext);
  const {loadingProgress, setLoading} = useContext(clientContext);

  useEffect(() => {
    clientService.eventListener.on(ClientEvent.LOADING_PROGRESS, setLoading);
    clientService.eventListener.on(ClientEvent.ENTERED_HOTEL, () =>
      setOnline(true)
    );
  }, []);

  if (loadingProgress === 100) {
    return null;
  }

  return (
    <div id="loader-wrapper">
      <div className="loader">
        <div id="loader">
          <img src="/img/logo/regular.png" />
          <p>{config.loadingMessage}</p>
          <div className="loading_bar">
            <div
              className="percent"
              id="loader_bar"
              style={{width: `${loadingProgress}%`}}
            />
            {loadingProgress}%
          </div>
        </div>
        <div className="loader-section section-top" />
        <div className="loader-section section-bottom" />
      </div>
    </div>
  );
}

import './SocialMedia.scss';
import React, {useContext} from 'react';
import {configContext, Icon} from '@instinct-web/core';
import {Card} from '../../../../../components/card/Card';

export function SocialMedia() {
  const {config} = useContext(configContext);
  return (
    <Card className="mt-4" header="Social Media">
      <a className="social-media-row" href={config.discordURL} target="_blank">
        <div className="d-flex">
          <Icon className="fa-3x" family="fab" type="discord" />
          <div className="ml-4">
            <h4>Discord</h4>
            <p style={{marginTop: -5}}>Use dis to stay up 2 date</p>
          </div>
        </div>
      </a>
      <a className="social-media-row" href={config.twitterURL} target="_blank">
        <div className="d-flex">
          <Icon className="fa-3x" family="fab" type="twitter" />
          <div className="ml-4">
            <h4>Twitter</h4>
            <p style={{marginTop: -5}}>We tweet shit okrt</p>
          </div>
        </div>
      </a>
    </Card>
  );
}

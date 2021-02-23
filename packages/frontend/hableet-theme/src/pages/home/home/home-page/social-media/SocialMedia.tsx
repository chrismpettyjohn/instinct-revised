import React, {useContext} from 'react';
import {Card, configContext, Icon} from '@instinct-web/core';

export function SocialMedia() {
  const {config} = useContext(configContext);
  return (
    <Card className="mt-4" header="Social Media">
      <a href={config.discordURL} target="_blank">
        <Icon className="fa-3x" family="fab" type="discord" />
      </a>
    </Card>
  );
}

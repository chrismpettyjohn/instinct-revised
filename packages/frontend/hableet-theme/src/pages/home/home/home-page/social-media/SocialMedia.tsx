import React, {useContext} from 'react';
import {configContext, Icon} from '@instinct-web/core';
import {Card} from '../../../../../components/card/Card';

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

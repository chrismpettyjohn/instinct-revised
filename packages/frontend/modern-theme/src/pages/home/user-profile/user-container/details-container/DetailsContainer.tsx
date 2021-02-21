import React from 'react';
import {Icon} from '@instinct-prj/frontend';
import {DetailsContainerProps} from './index';

export function DetailsContainer({
  children,
  header,
  icon,
}: DetailsContainerProps) {
  return (
    <div className="details-container">
      <Icon type={icon} />
      {header} <b>{children}</b>
    </div>
  );
}

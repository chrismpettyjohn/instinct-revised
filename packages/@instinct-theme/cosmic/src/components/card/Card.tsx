import React from 'react';
import {CardProps} from './Card.types';
import {Icon} from '@instinct-web/core';

export function Card(props: CardProps) {
  const {className = '', children, header, icon} = props;
  return (
    <article
      className={`default-section ${className} img-overflow`}
      style={props.style}
    >
      {header && (
        <div className="aside-title">
          {icon && <Icon type={icon} />}
          <h3>{header}</h3>
        </div>
      )}
      {children && <div className="aside-content">{children}</div>}
    </article>
  );
}

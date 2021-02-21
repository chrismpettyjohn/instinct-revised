import React from 'react';
import './MiniJumbotron.scss';
import {ComponentProps} from '../../common.types';
import {MiniJumbotronProps} from './MiniJumbotron.types';

export function MiniJumbotron({
  children,
  className = '',
  style,
}: MiniJumbotronProps) {
  return (
    <div className={`mini-jumbotron ${className}`} style={style}>
      {children}
    </div>
  );
}

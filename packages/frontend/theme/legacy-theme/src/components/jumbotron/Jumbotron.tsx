import React from 'react';
import './Jumbotron.scss';
import {JumbotronProps} from './Jumbotron.types';

export function Jumbotron({
  className = '',
  children,
  style,
  title,
}: JumbotronProps) {
  return (
    <header
      className={`page-header flex-container flex-vertical-center ${className}`}
      style={style}
    >
      <div className="container" style={{maxWidth: 1055}}>
        <div className="page-header-content">
          {title && <h1>{title}</h1>}
          {children}
        </div>
      </div>
    </header>
  );
}

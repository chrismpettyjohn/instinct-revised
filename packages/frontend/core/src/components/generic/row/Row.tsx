import React from 'react';
import {RowProps} from './index';

export function Row({children, className = ''}: RowProps) {
  return <div className={`row ${className}`}>{children}</div>;
}

import React from 'react';
import {ColumnProps} from './index';

export function Column({children, side, style}: ColumnProps) {
  return (
    <div className={`${side}-side`} style={style}>
      {children}
    </div>
  );
}

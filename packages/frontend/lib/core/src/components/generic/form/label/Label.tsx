import React from 'react';
import {LabelProps} from './';

export function Label({children}: LabelProps) {
  return <label className="sr-only">{children}</label>;
}

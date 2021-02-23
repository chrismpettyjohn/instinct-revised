import React from 'react';
import {ButtonProps} from './index';

export function Button({
  color = 'light',
  className,
  children,
  onClick,
  style,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      className={`btn btn-${color} ${className} `}
      onClick={onClick}
      style={style}
      type={type}
    >
      {children}
    </button>
  );
}

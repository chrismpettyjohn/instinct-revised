import './Input.scss';
import {InputProps} from './';
import React, {ChangeEvent} from 'react';

export function Input(props: InputProps) {
  function onChange(event: ChangeEvent<HTMLInputElement>): void {
    if (props.onChange) {
      // @ts-ignore - value does indeed exist sir
      props.onChange(
        props.name,
        props.type === 'number'
          ? Number(event.target.value)
          : event.target.value
      );
    }
  }

  return (
    <input
      {...props}
      className={props.className ?? 'form-control'}
      onChange={onChange}
    />
  );
}

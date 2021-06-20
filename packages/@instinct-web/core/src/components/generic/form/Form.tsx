import {FormProps} from './';
import React, {SyntheticEvent} from 'react';

export function Form({
  children,
  className,
  disabled = false,
  onSubmit,
}: FormProps) {
  function handleOnSubmit(event: SyntheticEvent): void {
    event.preventDefault();
    if (onSubmit && !disabled) {
      onSubmit();
    }
  }

  return (
    <form className={className ?? 'form-control'} onSubmit={handleOnSubmit}>
      {children}
    </form>
  );
}

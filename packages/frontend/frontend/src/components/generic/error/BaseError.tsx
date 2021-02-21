import {Icon} from '../icon/Icon';
import React, {ReactNode} from 'react';

export interface BaseErrorProps {
  header: ReactNode;
  children: ReactNode;
}

export function BaseError({children, header}: BaseErrorProps) {
  return (
    <div className="text-center">
      <h2>
        <Icon type="exclamation-triangle" />
      </h2>
      <h4>{header}.</h4>
      <div>{children}</div>
    </div>
  );
}

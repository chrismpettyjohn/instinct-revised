import React from 'react';
import {Link} from 'wouter';
import {Icon} from '../icon/Icon';
import {BaseError} from './BaseError';

export function RenderError() {
  return (
    <BaseError header="There was a problem rendering this page">
      <Link to="/me">
        <Icon type="caret-left" />
        Back to Home
      </Link>
    </BaseError>
  );
}

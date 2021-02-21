import React from 'react';
import {BaseError} from './BaseError';

export function APIError() {
  return (
    <BaseError header="There was a problem with your request">
      We apologize for the inconvenience and our developers will be alerted.
    </BaseError>
  );
}

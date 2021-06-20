import React from 'react';
import './CheckoutSection.scss';
import {UserGuard} from '@instinct-web/core';
import {CardElement} from '@stripe/react-stripe-js';
import {StripeCardElementOptions} from '@stripe/stripe-js';

export function CheckoutSection() {
  const CARD_OPTIONS: StripeCardElementOptions = {
    iconStyle: 'solid',
    style: {
      base: {
        iconColor: '#c4f0ff',
        color: '#fff',
        fontWeight: 500,
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': {color: '#fce883'},
        '::placeholder': {color: '#87bbfd'},
      },
      invalid: {
        iconColor: '#ffc7ee',
        color: '#ffc7ee',
      },
    },
  };

  return (
    <UserGuard>
      <fieldset className="FormGroup">
        <div className="FormRow">
          <CardElement options={CARD_OPTIONS} />
        </div>
      </fieldset>
    </UserGuard>
  );
}

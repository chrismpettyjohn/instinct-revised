import React, {useContext} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import {configContext} from '../../../context/config';
import {StripeProviderProps} from './StripeProvider.types';

export function StripeProvider({children}: StripeProviderProps) {
  const {config} = useContext(configContext);

  if (!config.stripePublicKey) {
    return <>{children}</>;
  }

  const stripePromise = loadStripe(config.stripePublicKey);

  return (
    <Elements stripe={stripePromise}>
      <>{children}</>
    </Elements>
  );
}

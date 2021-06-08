import '@instinct-web/core';
import {useLocation} from 'wouter';
import './public/css/LegacyTheme.scss';
import React, {useEffect, useState} from 'react';
import {Client} from './components/client/Client';
import {Bootstrap, ContextProviders} from '@instinct-web/core';

export function BobbaTheme() {
  const location = useLocation();
  console.log(location);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      await import('./pages');
      setLoading(false);
    }

    load();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <ContextProviders>
      <Bootstrap />
      <Client />
    </ContextProviders>
  );
}

import '@instinct-web/core';
import React, {useEffect, useState} from 'react';
import {Bootstrap, ContextProviders} from '@instinct-web/core';
import {Client} from './components/client/Client';
import {useLocation} from 'wouter';

export function ModernTheme() {
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

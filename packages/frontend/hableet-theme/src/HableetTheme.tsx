import '@instinct-web/core';
import React, {useEffect, useState} from 'react';
import {Bootstrap, ContextProviders} from '@instinct-web/core';

export function HableetTheme() {
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
    </ContextProviders>
  );
}

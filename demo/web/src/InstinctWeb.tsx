import React from 'react';
import {AdminPanel} from '@instinct-web/admin';
import {ModernTheme} from '@instinct-theme/modern';

export function InstinctWeb() {
  return (
    <>
      <ModernTheme />
      <AdminPanel />
    </>
  );
}

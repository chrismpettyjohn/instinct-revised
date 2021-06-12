import React from 'react';
import {AdminPanel} from '@instinct-web/admin';
import { AresTheme } from '@instinct-theme/ares';
import { ClassicTheme } from '@instinct-theme/classic';

export function InstinctWeb() {
  return (
    <>
      <AresTheme />
      <AdminPanel />
    </>
  );
}

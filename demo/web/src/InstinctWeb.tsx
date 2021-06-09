import React from 'react';
import {AdminPanel} from '@instinct-web/admin';
import { BobbaTheme } from '@instinct-theme/bobba';

export function InstinctWeb() {
  return (
    <>
      <BobbaTheme />
      <AdminPanel />
    </>
  );
}

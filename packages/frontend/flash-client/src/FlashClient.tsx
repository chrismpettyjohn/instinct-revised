import React from 'react';
// @ts-ignore - Dependency doesn't have a good @types
import Flash from 'swfobject';
import {FlashDisabled} from './flash-disabled';
import {LoadingScreen} from './loading-screen';
import {ClientContainer} from './client-container';

export function FlashClient() {
  const flashEnabled: boolean = Flash.getFlashPlayerVersion().major > 0;

  return (
    <>
      {flashEnabled && (
        <>
          <LoadingScreen />
          <ClientContainer />
        </>
      )}
      {!flashEnabled && <FlashDisabled />}
    </>
  );
}

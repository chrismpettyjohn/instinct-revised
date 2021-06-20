import React from 'react';
import {safeUserLookup} from './safe-user-lookup';
import {UserProfile} from '@instinct-prj/interface';
import {AutoPopulateUsernameFieldProps} from './AutoPopulateUsernameField.types';
import {createOptionalFetchHook} from '@instinct-web/core';
import {UsernameField} from '../../../../components/username-field/UsernameField';

export function AutoPopulateUsernameField({
  username,
  onChange,
}: AutoPopulateUsernameFieldProps) {
  const user = createOptionalFetchHook<string, UserProfile>(
    () => safeUserLookup(username!) as any,
    username
  );

  return (
    <UsernameField
      onChange={onChange}
      username={username}
      figure={user?.user?.figure}
    />
  );
}

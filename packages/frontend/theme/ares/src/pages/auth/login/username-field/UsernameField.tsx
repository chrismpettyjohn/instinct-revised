import React from 'react';
import {UserProfile} from '@instinct-prj/interface';
import {UsernameFieldProps} from './UsernameField.types';
import DefaultUserImage from '../../../../public/images/habbo.gif';
import {createOptionalFetchHook, userService} from '@instinct-web/core';

export function UsernameField({username, onChange}: UsernameFieldProps) {
  const user = createOptionalFetchHook<string, UserProfile>(
    userService.getByUsername,
    username
  );

  return (
    <>
      <label className="form-label" htmlFor="username">
        Username
      </label>
      <div className="input-group" id="username-group">
        <img
          alt="Mannequin"
          className="d-xxl-block d-xl-block d-lg-block d-md-block d-none mannequin"
          src={user?.user?.figure ?? DefaultUserImage}
        />
        <input
          aria-describedby="usernameHelp"
          autoComplete="username"
          className="form-control p-4"
          id="username"
          required
          type="text"
          onChange={e => onChange(e.target.value)}
        />
      </div>
      <div className="form-text" id="usernameHelp">
        Type your username in the box above
      </div>
    </>
  );
}

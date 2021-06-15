import React from 'react';
import {UsernameFieldProps} from './UsernameField.types';
import DefaultUserImage from '../../public/images/habbo.gif';

export function UsernameField({
  figure,
  username,
  onChange,
}: UsernameFieldProps) {
  return (
    <>
      <label className="form-label" htmlFor="username">
        Username
      </label>
      <div className="input-group" id="username-group">
        <img
          alt="Mannequin"
          className="d-xxl-block d-xl-block d-lg-block d-md-block d-none mannequin"
          src={
            figure
              ? `https://www.habbo.com.br/habbo-imaging/avatarimage?figure=${figure}`
              : DefaultUserImage
          }
        />
        <input
          aria-describedby="usernameHelp"
          autoComplete="username"
          className="form-control p-4"
          id="username"
          required
          type="text"
          value={username}
          onChange={e => onChange(e.target.value)}
        />
      </div>
      <div className="form-text" id="usernameHelp">
        Type your username in the box above
      </div>
    </>
  );
}

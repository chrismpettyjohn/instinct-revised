import React from 'react';
import {AvatarProps} from './';

export function Avatar({
  className = 'pixelated',
  action,
  direction,
  gesture,
  headDirection,
  headOnly,
  size,
  look,
  onClick,
}: AvatarProps) {
  if (look === undefined) {
    return <i className="fa fa-spinner fa-spin" />;
  }

  let source = `https://www.habbo.com.br/habbo-imaging/avatarimage?figure=${look}`;

  if (action) {
    source += `&action=${action}`;
  }

  if (direction) {
    source += `&direction=${direction}`;
  }

  if (gesture) {
    source += `&gesture=${gesture}`;
  }

  if (headDirection) {
    source += `&head_direction=${headDirection}`;
  }

  if (size) {
    source += `&size=${size}`;
  }

  if (headOnly) {
    source += '&headonly=true';
  }

  return (
    <img
      alt="player avatar"
      src={source}
      className={className}
      onClick={onClick}
    />
  );
}

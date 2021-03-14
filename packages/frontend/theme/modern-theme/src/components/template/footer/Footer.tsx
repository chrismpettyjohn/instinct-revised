import React from 'react';
import {Typography} from '@material-ui/core';

export function Footer() {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          bottom: 10,
          left: 0,
          width: '100%',
          textAlign: 'center',
        }}
      >
        <img alt="instinct logo" src="https://i.imgur.com/Bi8D2aL.png" />
        <br />
        <Typography variant="gutterBottom">
          <b>Instinct</b> by <b>LeChris</b>
        </Typography>
      </div>
    </>
  );
}

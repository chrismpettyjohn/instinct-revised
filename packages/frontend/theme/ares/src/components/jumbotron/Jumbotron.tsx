import React from 'react';
import {JumbotronProps} from './Jumbotron.types';

export function Jumbotron({children}: JumbotronProps) {
  return (
    <>
      <div className="bg-overlay" />
      <div className="container">
        <div className="row justify-content-xl-center justify-content-lg-center align-items-lg-center align-items-md-start h-100">
          <div className="col-xl-8 col-lg-8 col-md-12">{children}</div>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import './ShopPackage.scss';
import {ShopPackageProps} from './ShopPackage.types';

export function ShopPackage({children, icon, title}: ShopPackageProps) {
  return (
    <div className="shop-package">
      <div className="d-flex">
        <div>
          <div style={{fontSize: 22, fontWeight: 500}}>{title}</div>
          <div>{children}</div>
          <button className="btn btn-block btn-outline-success">
            Purchase {title}
          </button>
        </div>
      </div>
    </div>
  );
}

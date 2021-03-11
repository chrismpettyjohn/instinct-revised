import React from 'react';
import './ShopPackage.scss';
import {Link} from 'wouter';
import {ShopPackageProps} from './ShopPackage.types';

export function ShopPackage({children, icon, title}: ShopPackageProps) {
  return (
    <div className="shop-package">
      <div className="d-flex">
        <div>
          <div style={{fontSize: 22, fontWeight: 500}}>{title}</div>
          <div>{children}</div>
          <Link to={'/shop/packages/1'}>
            <button className="btn btn-block btn-outline-success">
              Purchase {title}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

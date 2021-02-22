import {Link, useLocation} from 'wouter';
import React, {useContext} from 'react';
import {Icon} from '../../generic/icon';
import {PermissionGuard} from '../permission';
import {configContext} from '../../../context/config';
import {sessionContext} from '../../../context/session';
import {ServerMaintenanceGuardProps} from './ServerMaintenanceGuard.types';

export function ServerMaintenanceGuard({
  children,
}: ServerMaintenanceGuardProps) {
  const [location, setLocation] = useLocation();
  const {user} = useContext(sessionContext);
  const {config} = useContext(configContext);

  if (
    config.maintenanceEnabled &&
    !user?.rank?.permissions.websiteShowAdminPanel
  ) {
    setLocation('/maintenance');
  }

  return (
    <>
      {config.maintenanceEnabled && (
        <PermissionGuard permission="websiteShowAdminPanel">
          <div className="alert-danger p-2 mb-4">
            <div className="row">
              <div className="col">
                <div className="mt-2">
                  <Icon type="exclamation-triangle" />
                  <b>
                    The hotel is under maintenance and is not accessible to
                    users.
                  </b>
                </div>
              </div>
              <div className="col text-right">
                <Link href="/admin/website">
                  <button className="btn btn-dark">Site Settings</button>
                </Link>
              </div>
            </div>
          </div>
        </PermissionGuard>
      )}
      {children}
    </>
  );
}

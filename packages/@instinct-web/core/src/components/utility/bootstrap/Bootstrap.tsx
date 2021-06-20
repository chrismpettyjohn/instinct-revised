import {Router} from '../router';
import {DataPolling} from '../data-polling';
import {ToastContainer} from 'react-toastify';
import {BannedGuard} from '../../guard/banned';
import {useBanListener} from '../../../hooks/user';
import {SkeletonTheme} from 'react-loading-skeleton';
import {configContext} from '../../../context/config';
import {healthContext} from '../../../context/health';
import {configService} from '../../../services/config';
import {sessionContext} from '../../../context/session';
import {sessionService} from '../../../services/session';
import {RenderError} from '../../generic/error/RenderError';
import React, {useContext, useEffect, useState} from 'react';
import {StripeProvider} from '../stripe-provider/StripeProvider';
import {ServerMaintenanceGuard} from '../../guard/server-maintenance';

export function Bootstrap() {
  useBanListener();
  const [ready, setReady] = useState(false);
  const {setConfig} = useContext(configContext);
  const {setHealth} = useContext(healthContext);
  const {setUser} = useContext(sessionContext);

  useEffect(() => {
    async function init() {
      const [user, config, health] = await Promise.all([
        sessionService.init(),
        configService.getConfig(),
        configService.getHealth(),
      ]);

      setUser(user);
      setConfig(config);
      setHealth(health);
      setReady(true);
    }

    init();
  }, []);

  if (!ready) {
    return <i className="fa fa-spin fa-spinner" />;
  }

  try {
    return (
      <React.StrictMode>
        <SkeletonTheme color="#0f416d" highlightColor="#1a4d6e">
          <ToastContainer />
          <ServerMaintenanceGuard>
            <BannedGuard>
              <StripeProvider>
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    minHeight: '100%',
                    minWidth: '100%',
                  }}
                >
                  <Router />
                  <DataPolling />
                </div>
              </StripeProvider>
            </BannedGuard>
          </ServerMaintenanceGuard>
        </SkeletonTheme>
      </React.StrictMode>
    );
  } catch {
    return <RenderError />;
  }
}

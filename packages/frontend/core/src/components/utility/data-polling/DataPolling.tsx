import {useContext, useEffect} from 'react';
import {configContext} from '../../../context/config';
import {healthContext} from '../../../context/health';
import {configService} from '../../../services/config';
import {sessionContext} from '../../../context/session';
import {sessionService} from '../../../services/session';

const FIVE_MINUTE_IN_MS = 300000000;
const THIRTY_SECONDS_IN_MS = 30000;

export function DataPolling() {
  const {setConfig} = useContext(configContext);
  const {setHealth} = useContext(healthContext);
  const {setUser} = useContext(sessionContext);

  async function refresh(): Promise<void> {
    const [user, config, health] = await Promise.all([
      sessionService.init(),
      configService.getConfig(),
      configService.getHealth(),
    ]);

    setUser(user);
    setConfig(config);
    setHealth(health);
  }

  async function refreshHealth() {
    const health = await configService.getHealth();
    setHealth(health);
  }

  useEffect(() => {
    setInterval(refresh, FIVE_MINUTE_IN_MS);
    setInterval(refreshHealth, THIRTY_SECONDS_IN_MS);
  }, []);

  return null;
}

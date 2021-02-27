import {useContext, useEffect} from 'react';
import {themeContext} from '../../context/theme';
import {sessionContext} from '../../context/session';
import {sessionService} from '../../services/session';

export function useRenewSessionSSO() {
  const {clientType} = useContext(themeContext);
  const {user, setSSO} = useContext(sessionContext);
  useEffect(() => {
    async function fetchSSO() {
      const sso = await sessionService.createSSO();
      setSSO(sso);
    }

    fetchSSO();
  }, [clientType, user]);
}

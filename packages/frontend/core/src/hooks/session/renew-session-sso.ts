import {useContext, useEffect} from 'react';
import {sessionContext} from '../../context/session';
import {sessionService} from '../../services/session';

export function useRenewSessionSSO() {
  const {setSSO} = useContext(sessionContext);
  useEffect(() => {
    async function fetchSSO() {
      const sso = await sessionService.createSSO();
      setSSO(sso);
    }

    fetchSSO();
  }, []);
}

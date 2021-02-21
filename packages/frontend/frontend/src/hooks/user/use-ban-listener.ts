import {backendAPI} from '../../api';
import {useContext, useEffect} from 'react';
import {sessionContext} from '../../context/session';

export function useBanListener() {
  const {banned, setBanned} = useContext(sessionContext);

  useEffect(() => {
    backendAPI.interceptors.response.use(
      res => res,
      error => {
        if (error.response.status === 403 && !banned) {
          setBanned(true);
        }

        throw error;
      }
    );
  }, []);
}

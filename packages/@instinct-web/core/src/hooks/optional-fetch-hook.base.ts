import {useEffect, useState} from 'react';

export function createOptionalFetchHook<Dependencies, Response>(
  promise: (...args: Array<Dependencies>) => Promise<Response>,
  dependencies?: Dependencies,
  refresh: number | string = 0
): Response | undefined {
  const [state, setState] = useState<Response>();

  useEffect(() => {
    setState(undefined);
    async function fetchData() {
      const data = await promise();
      setState(data);
    }

    if (dependencies) {
      fetchData();
    }
  }, [dependencies, refresh]);

  return state;
}

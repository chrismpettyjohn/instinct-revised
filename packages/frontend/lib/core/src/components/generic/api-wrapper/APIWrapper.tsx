import {Icon} from '../icon';
import {APIError} from '../error/APIError';
import React, {useEffect, useState} from 'react';
import {RenderError} from '../error/RenderError';
import {APIWrapperProps} from './APIWrapper.types';

export function APIWrapper<I, O>(props: APIWrapperProps<I, O>): any {
  const [state, setState] = useState<O>();
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setState(undefined);
        const data = await props.promise(props.params);
        setState(data);
      } catch (e) {
        setError(true);
      }
    }
    fetchData();
  }, [props.params]);

  if (error) {
    return <APIError />;
  }

  if (!state) {
    return <Icon className="fa-spin" type="spinner" />;
  }

  try {
    return props.children(state!);
  } catch {
    return <RenderError />;
  }
}

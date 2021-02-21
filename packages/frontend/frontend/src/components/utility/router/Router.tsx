import React, {ReactNode} from 'react';
import {Switch, Route, RouteProps} from 'wouter';
import {RenderError} from '../../generic/error';

const routes: RouteProps[] = [];

export function Router() {
  try {
    return (
      <Switch>
        {routes.map((route: RouteProps, index: number) => (
          <Route key={index} {...route} />
        ))}
      </Switch>
    );
  } catch {
    return <RenderError />;
  }
}

export function setURL(url: string, component: ReactNode): void {
  routes.push({
    path: `/${url}`,
    children: <div>{component}</div>,
  });
}

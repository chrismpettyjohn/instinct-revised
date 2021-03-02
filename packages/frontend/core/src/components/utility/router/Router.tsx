import React, {ReactNode} from 'react';
import {Switch, Route, RouteProps} from 'wouter';
import {RenderError} from '../../generic/error';

const routes: RouteProps[] = [];
let notFound: ReactNode;

export function Router() {
  try {
    return (
      <Switch>
        {routes.map((route: RouteProps, index: number) => (
          <Route key={index} {...route} />
        ))}
        <Route>{notFound ?? '404'}</Route>
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

export function setNotFound(component: ReactNode) {
  notFound = component;
}

import * as React from 'react';
import { Route } from 'react-router-dom';

import { IRoute } from 'types/';

export const RouteWithSubRoutes = (route: IRoute) => {
    console.log(route, "subroute")
    return (
        <Route
            exact={true}
            path={route.path}
            render={props => (<route.component {...route.routeProps} routes={route.routes} />)} />
    )
}
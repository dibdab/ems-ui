import * as React from 'react';
import { Route } from 'react-router-dom';

import { IRoute } from 'types';

export const RouteWithSubRoutes = (route: IRoute) => {
    return (
        <Route
            exact={true}
            path={route.path}
            // tslint:disable
            render={props => (<route.component {...route.routeProps} routes={route.routes} />)}
        />
    );
};

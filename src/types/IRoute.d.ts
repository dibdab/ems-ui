import { RouteComponentProps } from "react-router";

export interface IRoute {
    path?: string;
    routeProps?: any;
    routes?: IRoute[];
    component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any> | JSX.Element | any;
}
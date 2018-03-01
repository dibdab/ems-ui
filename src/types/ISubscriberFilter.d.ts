import { IFilter, IFilterObject, IId, IRESTConnector, IJMSConnector, IOptions, INegativeFilter } from './SharedEMSTypes';


export interface ISubscriberFilter {
    [key: string]: string | IFilter | INegativeFilter<IFilter> | IRESTConnector | IJMSConnector | IOptions | INegativeFilter<string> | INegativeFilter<IOptions> | INegativeFilter<IRESTConnector> | INegativeFilter<IJMSConnector> | undefined;
    event: string | INegativeFilter<string> | undefined;
    listenerSystem: string | INegativeFilter<string>;
    options: IOptions | INegativeFilter<IOptions>;
    filter: IFilter | INegativeFilter<IFilter>;
    connector: IRESTConnector | IJMSConnector | INegativeFilter<IJMSConnector> | INegativeFilter<IRESTConnector>;
}

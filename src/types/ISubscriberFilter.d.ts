
interface ISubscriberFilterOptions {
    payloadcontent: string[];
}

interface ISubscriberFilterFilter {
    name: string;
    value: string | boolean | ISubscriberFilterFilterObject;
}

interface ISubscriberFilterFilterObject {
    [key: string]: any[];
}

interface ISubscriberFilterConnector {
    host: string;
    port: string;
}

interface ISubscriberFilterREST extends ISubscriberFilterConnector {
    path: string;
    method: string;
}

interface ISubscriberFilterJMS extends ISubscriberFilterConnector {
    queue: string;
}

interface ISubscriberFilterRESTConnector {
    REST: ISubscriberFilterREST;
}

interface ISubscriberFilterJMSConnector {
    JMS: ISubscriberFilterJMS;
}

interface INegativeFilter<T> {
    $ne: T
}

export interface ISubscriberFilter {
    [key: string]: string | ISubscriberFilterFilter | INegativeFilter<ISubscriberFilterFilter> | ISubscriberFilterRESTConnector | ISubscriberFilterJMSConnector | ISubscriberFilterOptions | INegativeFilter<string> | INegativeFilter<ISubscriberFilterOptions> | INegativeFilter<ISubscriberFilterRESTConnector> | INegativeFilter<ISubscriberFilterJMSConnector>;
    event: string | INegativeFilter<string>;
    listenerSystem: string | INegativeFilter<string>;
    options: ISubscriberFilterOptions | INegativeFilter<ISubscriberFilterOptions>;
    filter: ISubscriberFilterFilter | INegativeFilter<ISubscriberFilterFilter>;
    connector: ISubscriberFilterRESTConnector | ISubscriberFilterJMSConnector | INegativeFilter<ISubscriberFilterJMSConnector> | INegativeFilter<ISubscriberFilterRESTConnector>;
}

export interface IId {
    timestamp: number;
    machineIdentifier: number;
    processIdentifier: number;
    counter: number;
    time: number;
    date: number;
    timeSecond: number;
}

export interface IConnector {
    host: string;
    port: string;
}

interface REST extends IConnector {
    path: string;
    method: string;
}

interface JMS extends IConnector {
    queue: string;
}

export interface IRESTConnector {
    REST: REST;
}

export interface IJMSConnector {
    JMS: JMS;
}

export interface IFilter {
    name: string;
    value: string | boolean | IFilterObject;
}

export interface IFilterObject {
    [key: string]: any[];
}

export interface INegativeFilter<T> {
    $ne: T
}

export interface IOptions {
    payloadcontent: string[];
}
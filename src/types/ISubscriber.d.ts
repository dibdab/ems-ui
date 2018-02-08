interface IId {
  timestamp: number;
  machineIdentifier: number;
  processIdentifier: number;
  counter: number;
  time: number;
  date: number;
  timeSecond: number;
}

interface IOptions {
  payloadcontent: string[];
}

export interface IFilter {
  name: string;
  value: string | boolean | IFilterObject;
}

interface IFilterObject {
  [key: string]: any[];
}

interface IConnector {
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


export interface ISubscriber {
  [key: string]: string | IFilter[] | IRESTConnector | IJMSConnector | IId | IOptions
  _id: IId;
  event: string;
  listenerSystem: string;
  options: IOptions;
  filter: IFilter[];
  connector: IRESTConnector | IJMSConnector;
}

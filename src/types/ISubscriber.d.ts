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

interface filter {
  name: string;
  value: string | boolean | filterArray;
}

interface filterArray {
  [key: string]: string[];
}

interface connector {
  host: string;
  port: string;
}

interface REST extends connector {
  path: string;
  method: string;
}

interface JMS extends connector {
  queue: string;
}

export interface IRESTConnector {
  REST: REST;
}

export interface IJMSConnector {
  JMS: JMS;
}


export interface ISubscriber {
  [key: string]: string | filter[] | IRESTConnector | IJMSConnector | IId | IOptions
  _id: IId;
  event: string;
  listenerSystem: string;
  options: IOptions;
  filter: filter[];
  connector: IRESTConnector | IJMSConnector;
}

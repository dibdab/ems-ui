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
  _id: {
    timestamp: number;
    machineIdentifier: number;
    processIdentifier: number;
    counter: number;
    time: number;
    date: number;
    timeSecond: number;
  };
  event: string;
  listenerSystem: string;
  options: {
    payloadcontent: string[];
  };
  filter: filter[];
  connector: IRESTConnector | IJMSConnector;
}

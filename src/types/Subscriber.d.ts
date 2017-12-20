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

export interface RESTConnector {
  REST: REST;
}

export interface JMSConnector {
  JMS: JMS;
}

export interface Subscriber {
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
  connector: RESTConnector | JMSConnector;
}

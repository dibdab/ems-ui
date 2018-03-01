import { IFilter, IFilterObject, IId, IRESTConnector, IJMSConnector, IOptions } from './SharedEMSTypes';

export interface ISubscriber {
  [key: string]: string | IFilter[] | IRESTConnector | IJMSConnector | IId | IOptions
  _id: IId;
  event: string;
  listenerSystem: string;
  options: IOptions;
  filter: IFilter[];
  connector: IRESTConnector | IJMSConnector;
}

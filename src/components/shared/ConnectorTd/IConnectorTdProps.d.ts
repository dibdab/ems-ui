import { IJMSConnector, IRESTConnector } from 'types';

export default interface IConnectorTdProps {
    connector: IRESTConnector | IJMSConnector;
}
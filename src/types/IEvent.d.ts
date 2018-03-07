import { IFilter, IFilterObject, IId, } from './SharedEMSTypes';

export interface IEvent {
    [key: string]: string | IFilter[] | Object | IId
    _id: IId;
    receivedDate: string;
    eventSequence: number;
    event: string;
    sourceSystem: string;
    filter: IFilter[];
    payload: Object;
}

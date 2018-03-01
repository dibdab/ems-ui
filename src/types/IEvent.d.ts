import { IFilter, IFilterObject, IId, } from './SharedEMSTypes';

export interface IEvent {
    [key: string]: string | IFilter[] | Object | IId
    _id: IId;
    event: string;
    sourceSystem: string;
    filter: IFilter[];
    payload: Object;
}

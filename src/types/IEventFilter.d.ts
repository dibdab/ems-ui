import { IFilter, INegativeFilter, IIdFilter } from './SharedEMSTypes';

export interface IEventFilter {
    [key: string]: string | IFilter | INegativeFilter<IFilter> | INegativeFilter<string> | undefined | number | IIdFilter | { $gte: { $date: string }, $lte: { $date: string } };
    _id?: IIdFilter;
    messageID?: string | undefined;
    timeStamp: { $gte: { $date: string }, $lte: { $date: string } };
    receivedDate?: string | undefined;
    eventSequence?: number | undefined;
    event: string | undefined;
    sourceSystem?: string | INegativeFilter<string>;
    filter?: IFilter | INegativeFilter<IFilter>;
}
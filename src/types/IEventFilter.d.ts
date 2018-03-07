import { IFilter, INegativeFilter } from './SharedEMSTypes';

export interface IEventFilter {
    [key: string]: string | IFilter | INegativeFilter<IFilter> | INegativeFilter<string> | undefined | number;
    receivedDate: string | undefined;
    eventSequence: number | undefined;
    event: string | INegativeFilter<string> | undefined;
    sourceSystem: string | INegativeFilter<string>;
    filter: IFilter | INegativeFilter<IFilter>;
}

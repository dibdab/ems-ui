import { IFilter, INegativeFilter } from './SharedEMSTypes';

export interface IEventFilter {
    [key: string]: string | IFilter | INegativeFilter<IFilter> | INegativeFilter<string> | undefined;
    event: string | INegativeFilter<string> | undefined;
    sourceSystem: string | INegativeFilter<string>;
    filter: IFilter | INegativeFilter<IFilter>;
}

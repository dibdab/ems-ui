import { ISubscriberFilter, IEventNames, IEventFilter } from "types";

export default interface ITableSearchFormProps {
    tableName: string;
    filter: ISubscriberFilter | IEventFilter;
    eventNames: IEventNames;
    eventNamesIsLoading: boolean;
}

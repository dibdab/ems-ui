import { ISubscriberFilter, IEventNames, IEventFilter } from "types";

export default interface IDashboardTableSearchFormProps {
    tableName: string;
    filter: ISubscriberFilter | IEventFilter;
    eventNames: IEventNames;
    eventNamesIsLoading: boolean;
}

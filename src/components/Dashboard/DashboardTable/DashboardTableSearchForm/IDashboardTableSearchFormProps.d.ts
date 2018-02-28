import { ISubscriberFilter, IEventNames } from "types";

export default interface IDashboardTableSearchFormProps {
    tableName: string;
    filter: ISubscriberFilter;
    eventNames: IEventNames;
    eventNamesIsLoading: boolean;
}

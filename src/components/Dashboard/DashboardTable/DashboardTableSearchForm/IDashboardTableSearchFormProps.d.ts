import { ISubscriberFilter } from "types";

export default interface IDashboardTableSearchFormProps {
    tableName: string;
    filter: ISubscriberFilter;
    resultsCount: number;
}

import { ISubscriberFilter, IEventNames, IEventFilter } from "types";

export default interface IDateRangeInputProps {
    selectedFromDate: string;
    selectedToDate: string;
    onSelectDateRange: (fromDate: string, toDate: string) => void;
}

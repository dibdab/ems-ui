import { ISubscriberFilter } from 'types';

export default interface IDashboardTableSearchFormProps {
    filter: string;
    limit: string;
    isFilterInvalid: boolean;
}

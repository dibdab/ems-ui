import { ISubscriberFilter } from 'types';

export default interface ITableSearchFormProps {
    filter: string;
    limit: string;
    isFilterInvalid: boolean;
}

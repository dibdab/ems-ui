import { IGenericResponse } from 'types';

export default interface IEventReplayProps {
    response: IGenericResponse;
    isLoading: boolean;
    hasErrored: boolean;
    messageID: string;
}
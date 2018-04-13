import { IGenericResponse } from 'types';

export interface IDashboardProps {
    isSidebarOpen: boolean;
    eventReplayResponse: IGenericResponse;
    eventReplayIsLoading: boolean;
    eventReplayHasErrored: boolean;
    eventReplayMessageID: string;
}

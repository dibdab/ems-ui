import store from 'store';

import { appendAuthHeader } from './serviceHelpers';
import { EventReplayActionCreators } from 'redux_';
import { IGenericResponse } from 'types';
import Config from 'config';

export function replayEvent(messageID: string): void {
    store.dispatch(EventReplayActionCreators.eventReplaySetMessageID(messageID));
    setErrored(false);
    setLoading(true);
    const headers = appendAuthHeader(new Headers());
    fetch(Config.EVENT_REPLAY_API_URL + `?messageID=${messageID}`, {
        method: 'GET',
        headers: headers,
        cache: 'reload',
    })
        .then(response => response.json())
        .then((responseMessage: IGenericResponse) => {
            SetResponse(responseMessage);
            setLoading(false);
        });
}

function SetResponse(data: IGenericResponse) {
    store.dispatch(EventReplayActionCreators.eventReplayResponse(data));
}

function setLoading(isLoading: boolean) {
    store.dispatch(EventReplayActionCreators.eventReplayIsLoading(isLoading));
}

function setErrored(hasErrored: boolean) {
    store.dispatch(EventReplayActionCreators.eventReplayHasErrored(hasErrored));
}

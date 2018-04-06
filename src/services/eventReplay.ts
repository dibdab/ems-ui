import store from 'store';

import { appendAuthHeader } from './serviceHelpers';
import { EventReplayActionCreators } from 'redux_';
import { IEventNames } from 'types';
import Config from 'config';

export function getAllEventNames(cacheControl: RequestCache): void {
    setErrored(false);
    setLoading(true);
    const headers = appendAuthHeader(new Headers());
    fetch(Config.ALL_EVENT_NAMES_API_URL, {
        method: 'GET',
        headers: headers,
        cache: cacheControl,
    })
        .then(response => response.json())
        .then((responseData: IEventNames) => {
            SetResponseSuccess(responseData);
            setLoading(false);
        })
        .catch(() => {
            setErrored(true);
            setLoading(false);
        },
    );
}

function SetResponseSuccess(data: IEventNames) {
    store.dispatch(EventReplayActionCreators.getAllEventNamesFetchSuccess(data));
}

function setLoading(isLoading: boolean) {
    store.dispatch(EventReplayActionCreators.getAllEventNamesIsLoading(isLoading));
}

function setErrored(hasErrored: boolean) {
    store.dispatch(EventReplayActionCreators.getAllEventNamesHasErrored(hasErrored));
}
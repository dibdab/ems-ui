import store from 'store';

import { appendAuthHeader, caseInsensitiveStringSort } from './serviceHelpers';
import { EventNameCreators } from 'redux_';
import { IEventNames } from 'types';
import Config from 'config';

export function getAllEventNames(cacheControl: RequestCache): void {
    setErrored(false);
    setLoading(true);
    const headers = appendAuthHeader(new Headers());
    fetch(Config.EVENT_NAMES_API_URL, {
        method: 'GET',
        headers: headers,
        cache: cacheControl,
    })
        .then(response => response.json())
        .then((responseData: IEventNames) => {
            // Sort Event names regardless of first char case
            responseData.events = caseInsensitiveStringSort(responseData.events);
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
    store.dispatch(EventNameCreators.getAllEventNamesFetchSuccess(data));
}

function setLoading(isLoading: boolean) {
    store.dispatch(EventNameCreators.getAllEventNamesIsLoading(isLoading));
}

function setErrored(hasErrored: boolean) {
    store.dispatch(EventNameCreators.getAllEventNamesHasErrored(hasErrored));
}

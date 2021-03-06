import store from 'store';

import { appendAuthHeader, caseInsensitiveStringSort } from 'functions/serviceHelpers';
import { EventNameActionCreators } from 'redux_';
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
    store.dispatch(EventNameActionCreators.getAllEventNamesFetchSuccess(data));
}

function setLoading(isLoading: boolean) {
    store.dispatch(EventNameActionCreators.getAllEventNamesIsLoading(isLoading));
}

function setErrored(hasErrored: boolean) {
    store.dispatch(EventNameActionCreators.getAllEventNamesHasErrored(hasErrored));
}

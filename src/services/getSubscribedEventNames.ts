import store from 'store';

import { appendAuthHeader, caseInsensitiveStringSort } from './serviceHelpers';
import { EventNameCreators } from 'redux_';
import { IEventNames } from 'types';
import Config from 'config';

export function getSubscribedEventNames(cacheControl: RequestCache): void {
    setErrored(false);
    setLoading(true);
    const headers = appendAuthHeader(new Headers());
    fetch(Config.SUBSCRIBED_EVENT_NAMES_API_URL, {
        method: 'GET',
        headers: headers,
        cache: cacheControl,
    })
        .then(response => response.json())
        .then((responseData: IEventNames) => {
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
    store.dispatch(EventNameCreators.getSubscribedEventNamesFetchSuccess(data));
}

function setLoading(isLoading: boolean) {
    store.dispatch(EventNameCreators.getSubscribedEventNamesIsLoading(isLoading));
}

function setErrored(hasErrored: boolean) {
    store.dispatch(EventNameCreators.getSubscribedEventNamesHasErrored(hasErrored));
}

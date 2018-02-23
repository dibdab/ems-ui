import store from 'store';

import { appendAuthHeader } from './serviceHelpers';
import { TableDataActionCreators } from 'redux_';
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
        .then((responseData: any) => {
            SetResponseSuccess(responseData);
            setLoading(false);
        })
        .catch(() => {
            setErrored(true);
            setLoading(false);
        },
    );
}

function SetResponseSuccess(data: any) {
    store.dispatch(TableDataActionCreators.tableDataFetchSuccess(data));
}

function setLoading(isLoading: boolean) {
    store.dispatch(TableDataActionCreators.tableDataIsLoading(isLoading));
}

function setErrored(hasErrored: boolean) {
    store.dispatch(TableDataActionCreators.tableDataHasErrored(hasErrored));
}

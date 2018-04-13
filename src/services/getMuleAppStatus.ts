import store from 'store';

import { appendAuthHeader } from './serviceHelpers';
import { MuleAppStatusActionCreators } from 'redux_';
import { IMuleAppStatus } from 'types';
import Config from 'config';

export function getMuleAppStatus(): void {
    setErrored(false);
    setLoading(true);
    const headers = appendAuthHeader(new Headers());
    fetch(Config.MULE_APP_STATUS_API_URL + '8560/json', {
        method: 'GET',
        headers: headers,
        cache: 'default',
    })
        .then(response => response.json())
        .then((responseData: IMuleAppStatus) => {
            SetResponseSuccess(responseData);
            setLoading(false);
        })
        .catch(() => {
            setErrored(true);
            setLoading(false);
        },
    );
}

function SetResponseSuccess(data: IMuleAppStatus) {
    store.dispatch(MuleAppStatusActionCreators.getMuleAppStatusFetchSuccess(data));
}

function setLoading(isLoading: boolean) {
    store.dispatch(MuleAppStatusActionCreators.getMuleAppStatusIsLoading(isLoading));
}

function setErrored(hasErrored: boolean) {
    store.dispatch(MuleAppStatusActionCreators.getMuleAppStatusHasErrored(hasErrored));
}

import store from 'store';

import { appendAuthHeader } from './serviceHelpers';
import { TableDataActionCreators } from 'redux_';
import { ISubscriber, IEvent } from 'types';
import { tableTypes } from 'enums';
import Config from 'config';

export function getSubscribers(
  dataType: string,
  endpoint: string,
  messageBody?: string,
  responseLimit?: number,
  skip?: number,
): void {
  setErrored(false);
  setLoading(true);
  let fullEndpoint: string;
  const headers = appendAuthHeader(new Headers());
  if (skip) {
    fullEndpoint = `${endpoint}?limit=${responseLimit}&skip=${skip}`;
  } else {
    fullEndpoint = `${endpoint}?limit=${responseLimit}`;
  }
  fetch(fullEndpoint, {
    method: 'POST',
    headers: headers,
    body: messageBody,
  })
    .then(response => response.json())
    .then((responseData: ISubscriber[]) => {
      SetResponseSuccess(responseData);
      setLoading(false);
    })
    .catch(() => {
      setErrored(true);
      setLoading(false);
    },
  );
}

export function getEvents(
  dataType: string,
  endpoint: string,
  messageBody?: string,
  responseLimit?: number,
  skip?: number,
): void {
  setErrored(false);
  setLoading(true);
  let fullEndpoint: string;
  const headers = appendAuthHeader(new Headers());
  if (skip) {
    fullEndpoint = `${endpoint}?limit=${responseLimit}&skip=${skip}`;
  } else {
    fullEndpoint = `${endpoint}?limit=${responseLimit}`;
  }
  fetch(fullEndpoint, {
    method: 'POST',
    headers: headers,
    body: messageBody,
  })
    .then(response => response.json())
    .then((responseData: IEvent[]) => {
      SetResponseSuccess(responseData);
      setLoading(false);
    })
    .catch(() => {
      setErrored(true);
      setLoading(false);
    },
  );
}

export function getTableData(
  tableName: string,
  messageBody: string,
  responseLimit?: number,
) {
  switch (tableName) {
    case (tableTypes.Subscribers):
      getSubscribers(tableName, Config.SUBSCRIBER_API_URL, messageBody, !responseLimit ? 10 : responseLimit);
      break;
    case (tableTypes.Events):
      getEvents(tableName, Config.EVENTS_API_URL, messageBody, !responseLimit ? 10 : responseLimit);
      break;
    default:
      break;
  }
}

function SetResponseSuccess(data: ISubscriber[] | IEvent[]) {
  store.dispatch(TableDataActionCreators.tableDataFetchSuccess(data));
}

function setLoading(isLoading: boolean) {
  store.dispatch(TableDataActionCreators.tableDataIsLoading(isLoading));
}

function setErrored(hasErrored: boolean) {
  store.dispatch(TableDataActionCreators.tableDataHasErrored(hasErrored));
}

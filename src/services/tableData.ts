import store from 'store';

import { appendAuthHeader } from './serviceHelpers';
import { TableDataActionCreators } from 'redux_';
import { ISubscriber } from 'types';
import { tableDataTypes } from 'enums';

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

export function getTableData(
  tableName: string,
  dataType: string,
  endpoint: string,
  messageBody: string,
  responseLimit?: number,
) {
  switch (tableName) {
    case (tableDataTypes.Subscribers):
      getSubscribers(dataType, endpoint, messageBody, !responseLimit ? 10 : responseLimit);
      break;
    default:
      break;
  }
}

function SetResponseSuccess(data: ISubscriber[]) {
  store.dispatch(TableDataActionCreators.tableDataFetchSuccess(data));
}

function setLoading(isLoading: boolean) {
  store.dispatch(TableDataActionCreators.tableDataIsLoading(isLoading));
}

function setErrored(hasErrored: boolean) {
  store.dispatch(TableDataActionCreators.tableDataHasErrored(hasErrored));
}

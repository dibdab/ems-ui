import store from 'store';
import { SubscriberActionCreators } from 'redux_';
import { ISubscriber } from 'types';
import { tableDataTypes } from 'enums';

export function getSubscribers(
  dataType: string,
  endpoint: string,
  messageBody?: string,
  responseLimit?: number,
  skip?: number,
): void {
  setErrored(dataType, false);
  setLoading(dataType, true);
  let fullEndpoint: string;
  const headers = new Headers();
  headers.append(
    'Ocp-Apim-Subscription-Key',
    'c91b8409ed674a5eaf84ca423cd072c3',
  );

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
      SetResponseSuccess(dataType, responseData);
      setLoading(dataType, false);
    })
    .catch(() => {
      setErrored(dataType, true);
      setLoading(dataType, false);
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

function SetResponseSuccess(dataType: string, data: ISubscriber[]) {
  switch (dataType) {
    case tableDataTypes.Subscribers:
      store.dispatch(SubscriberActionCreators.subscribersFetchSuccess(data));
  }
}

function setLoading(dataType: string, isLoading: boolean) {
  switch (dataType) {
    case tableDataTypes.Subscribers:
      store.dispatch(SubscriberActionCreators.subscribersIsLoading(isLoading));
  }
}

function setErrored(dataType: string, hasErrored: boolean) {
  switch (dataType) {
    case tableDataTypes.Subscribers:
      store.dispatch(SubscriberActionCreators.subscribersHasErrored(hasErrored));
  }
}

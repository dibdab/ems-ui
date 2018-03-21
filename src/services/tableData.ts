import store from 'store';

import { appendAuthHeader } from './serviceHelpers';
import { EventsActionCreators, SubscribersActionCreators } from 'redux_';
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
  setErrored(false, dataType);
  setLoading(true, dataType);
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
      SetResponseSuccess(responseData, dataType);
      setLoading(false, dataType);
    })
    .catch(() => {
      setErrored(true, dataType);
      setLoading(false, dataType);
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
  setErrored(false, dataType);
  setLoading(true, dataType);
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
      SetResponseSuccess(responseData, dataType);
      setLoading(false, dataType);
    })
    .catch(() => {
      setErrored(true, dataType);
      setLoading(false, dataType);
    },
  );
}

export function getTableData(
  dataType: string,
  messageBody: string,
  responseLimit?: number,
) {
  switch (dataType) {
    case (tableTypes.Subscribers):
      getSubscribers(dataType, Config.SUBSCRIBER_API_URL, messageBody, !responseLimit ? 10 : responseLimit);
      break;
    case (tableTypes.Events):
      getEvents(dataType, Config.EVENTS_API_URL, messageBody, !responseLimit ? 10 : responseLimit);
      break;
    default:
      break;
  }
}

function SetResponseSuccess(data: ISubscriber[] | IEvent[], dataType: string) {
  switch (dataType) {
    case (tableTypes.Subscribers):
      store.dispatch(SubscribersActionCreators.subscribersFetchSuccess(data as ISubscriber[]));
      break;
    case (tableTypes.Events):
      store.dispatch(EventsActionCreators.eventsFetchSuccess(data as IEvent[]));
      break;
    default:
      break;
  }
}

function setLoading(isLoading: boolean, dataType: string) {
  switch (dataType) {
    case (tableTypes.Subscribers):
      store.dispatch(SubscribersActionCreators.subscribersIsLoading(isLoading));
      break;
    case (tableTypes.Events):
      store.dispatch(EventsActionCreators.eventsIsLoading(isLoading));
      break;
    default:
      break;
  }

}

function setErrored(hasErrored: boolean, dataType: string) {
  switch (dataType) {
    case (tableTypes.Subscribers):
      store.dispatch(SubscribersActionCreators.subscribersHasErrored(hasErrored));
      break;
    case (tableTypes.Events):
      store.dispatch(EventsActionCreators.eventsHasErrored(hasErrored));
      break;
    default:
      break;
  }
}

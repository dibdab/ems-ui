import store from 'store';
import { SubscriberActionCreators } from 'redux_';
import { ISubscriber } from 'types';
import { tableDataTypes } from 'enums';

function getAll(dataType: string, endpoint: string, messageBody?: string, responseLimit?: number): void {
  setErrored(dataType, false);
  setLoading(dataType, true);
  const headers = new Headers();
  headers.append(
    'Ocp-Apim-Subscription-Key',
    'c91b8409ed674a5eaf84ca423cd072c3',
  );
  fetch(`${endpoint}?limit=${responseLimit}`, {
    method: 'POST',
    headers: headers,
    body: messageBody !== '' ? `{${messageBody}}` : messageBody,
  })
    .then(response => response.json())
    .then((responseData: ISubscriber[]) => {
      SetResponseSuccess(dataType, responseData);
      setLoading(dataType, false);
    })
    .catch(() => {
      setErrored(dataType, true);
      setLoading(dataType, false);
    }
    );
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

interface ITableDataService {
  getAll(dataType: string, endpoint: string, messageBody: string, responseLimit?: number): void;
}

export const tableDataService: ITableDataService = {
  getAll: (dataType: string, endpoint: string, messageBody: string, responseLimit?: number) => getAll(dataType, endpoint, messageBody, responseLimit),
};

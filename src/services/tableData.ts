import store from 'store';
import { SubscriberActionCreators } from 'redux_';
import { ISubscriber } from 'types';
import { tableDataTypes } from 'enums';
import { isNullOrUndefined } from 'util';

function searchStringToJson(searchString: string) {
  console.log(searchString, 'searchString');
  let jsonSearchString = '';
  const searchStrings = searchString.split(',');
  if (searchStrings.length > 0) {
    searchStrings.forEach((splitSearchString, index) => {
      console.log(splitSearchString, 'string');
      const splitSearchStrings = splitSearchString.split(': ');
      console.log(splitSearchStrings, 'strings');
      if (splitSearchStrings.length > 1) {
        console.log(index, 'index');
        if (index > 0) {
          console.log(index, ' if');
          jsonSearchString += `,'${splitSearchStrings[0].trim()}':'${splitSearchStrings[1].trim()}'`;
          console.log(jsonSearchString);
        } else {
          console.log(index, 'else');
          jsonSearchString += `'${splitSearchStrings[0].trim()}':'${splitSearchStrings[1].trim()}'`;
          console.log(jsonSearchString);
        }
      }
    });
    console.log(`{${jsonSearchString}}`, 'jsonSearchString');
    return `{${jsonSearchString}}`;
  } else {
    return null;
  }
}

function getAll(dataType: string, endpoint: string, messageBody?: string, responseLimit?: number, skip?: number): void {
  setErrored(dataType, false);
  setLoading(dataType, true);
  let fullEndpoint: string;
  const headers = new Headers();
  headers.append(
    'Ocp-Apim-Subscription-Key',
    'c91b8409ed674a5eaf84ca423cd072c3',
  );
  const jsonMessageBody = messageBody !== '' ? searchStringToJson(messageBody as string) : messageBody;
  if (isNullOrUndefined(jsonMessageBody)) {
    setErrored(dataType, true);
    return;
  }
  if (skip) {
    fullEndpoint = `${endpoint}?limit=${responseLimit}&skip=${skip}`;
  } else {
    fullEndpoint = `${endpoint}?limit=${responseLimit}`;
  }
  fetch(fullEndpoint, {
    method: 'POST',
    headers: headers,
    body: jsonMessageBody,
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
  getAll: (dataType: string, endpoint: string, messageBody: string, responseLimit?: number) =>
    getAll(dataType, endpoint, messageBody, responseLimit),
};

import { Dispatch } from 'redux';
import config from '../config';
import { Subscriber } from '../types/Subscriber';
import { IRootState } from '../redux/';
import store from '../store';
import { actionCreators } from '../redux/subscribers/index';

export function getAllSubscribers() {
  store.dispatch(actionCreators.subscribersIsLoading(true));
  const headers = new Headers();
  headers.append(
    'Ocp-Apim-Subscription-Key',
    'c91b8409ed674a5eaf84ca423cd072c3',
  );
  fetch('https://canecsamapm01test.azure-api.net/ems/subscribers', {
    method: 'POST',
    headers: headers,
    body: '',
  })
    .then(response => response.json())
    .then(subscribers => {
      console.log(`fetchCallResult`, subscribers);
      store.dispatch(actionCreators.subscribersFetchSuccess(subscribers));
    })
    .catch(() => store.dispatch(actionCreators.subscribersHasErrored(true)));
}

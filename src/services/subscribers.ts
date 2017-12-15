import config from 'config';
import store from 'store';
import { actionCreators } from 'redux_/subscribers/index';

export function getAllSubscribers() {
  store.dispatch(actionCreators.subscribersIsLoading(true));
  const headers = new Headers();
  headers.append(
    'Ocp-Apim-Subscription-Key',
    'c91b8409ed674a5eaf84ca423cd072c3',
  );
  fetch(config.SUBSCRIBER_API_URL, {
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

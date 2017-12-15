import config from 'config';
import store from 'store';
import { SubscriberActionCreators } from 'redux_';

function getAll(): void {
  store.dispatch(SubscriberActionCreators.subscribersIsLoading(true));
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
      store.dispatch(
        SubscriberActionCreators.subscribersFetchSuccess(subscribers),
      );
    })
    .catch(() =>
      store.dispatch(SubscriberActionCreators.subscribersHasErrored(true)),
    );
}

interface ISubscriberService {
  getAll: void;
}

export const SubscriberService: ISubscriberService = {
  getAll: getAll(),
};

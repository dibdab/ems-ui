import { Dispatch } from 'redux';
import config from '../config'
import { Subscriber } from '../types/Subscriber'
import { State } from '../types/index';

export function getAllSubscribers () {
return (dispatch: Dispatch<State>) => {
    store.
    var response = fetch(config.SUBSCRIBER_API_URL, {
        method: 'post'
      })
      .then((response) => reponse.json());
}


    console.log('Subscribers request complete', response);
    return response;
}
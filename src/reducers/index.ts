import { Subscriber } from '../types/Subscriber';
import { State } from '../types/index'

export const initialState: State = {
    subscribers: [],
    subscribersIsLoading: false,
    subscribersHasErrored: false
}

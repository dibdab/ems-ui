import { Subscriber } from '../types/Subscriber';

// Define constants for actions names
export const SUBSCRIBERS_IS_LOADING = 'SUBSCRIBERS_IS_LOADING';
export const SUBSCRIBERS_HAS_ERRORED = 'SUBSCRIBERS_HAS_ERRORED';
export const SUBSCRIBERS_FETCH_SUCCESS = 'SUBSCRIBERS_FETCH_SUCCESS';

// Define types for actions
export type Actions = {
    SUBSCRIBERS_IS_LOADING: {
        type: typeof SUBSCRIBERS_IS_LOADING,
        isLoading: boolean
    },
    SUBSCRIBERS_HAS_ERRORED: {
        type: typeof SUBSCRIBERS_HAS_ERRORED,
        hasErrored: boolean
    },
    SUBSCRIBERS_FETCH_SUCCESS:{
        type: typeof SUBSCRIBERS_FETCH_SUCCESS,
        subscribers: Subscriber[]
    }
};

// Create the actions
export const actionCreators = {
    subscribersIsLoading: (isLoading: boolean): Actions[typeof SUBSCRIBERS_IS_LOADING] => ({
        type: SUBSCRIBERS_IS_LOADING,
        isLoading
    }),
    subscribersHasErrored: (hasErrored: boolean): Actions[typeof SUBSCRIBERS_HAS_ERRORED] => ({
        type: SUBSCRIBERS_HAS_ERRORED,
        hasErrored
    }),
    fetchAllSubscribers: (subscribers: Subscriber[]): Actions[typeof SUBSCRIBERS_FETCH_SUCCESS] => ({
        type: SUBSCRIBERS_FETCH_SUCCESS,
        subscribers
    }),
}
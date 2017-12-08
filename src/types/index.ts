import { Subscriber } from '../types/Subscriber';

// Set as Readonly to achieve immutability on nested types same with ReadonlyArray
export type State = Readonly<{
  subscribers: ReadonlyArray<Readonly<Subscriber[]>>, 
  subscribersIsLoading: boolean,
  subscribersHasErrored: boolean,
}>
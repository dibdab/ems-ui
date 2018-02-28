// Define constants for actions names
export const SIDEBAR_IS_OPEN = 'SIDEBAR_IS_OPEN';

// Define types for actions
export type Actions = {
  SIDEBAR_IS_OPEN: {
    type: typeof SIDEBAR_IS_OPEN;
    payload: boolean;
  };
};

// Create the actions
export const actionCreators = {
  isOpen: (
    payload: boolean,
  ): Actions[typeof SIDEBAR_IS_OPEN] => ({
    type: SIDEBAR_IS_OPEN,
    payload,
  }),
};

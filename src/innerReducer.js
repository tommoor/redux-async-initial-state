import * as actions from './actionTypes';

const initialState = {
  loading: false,
  loaded: false,
  error: false,
};

export default function innerReducer(state = initialState, action) {
  switch (action.type) {
    case actions.STATE_LOADING_START:
      return {
        loaded: false,
        error: false,
        loading: true,
      };
    case actions.STATE_LOADING_DONE:
      return {
        loaded: true,
        error: false,
        loading: false,
      };
    case actions.STATE_LOADING_FAILED:
      return {
        loaded: false,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}

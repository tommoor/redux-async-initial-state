import * as actions from './actionTypes';

export default function outerReducer(appReducer) {
  return function (state, action) {
    if (action.type === actions.STATE_LOADING_DONE) {
      return appReducer(action.payload.state, action);
    }
    return appReducer(state, action);
  };
}

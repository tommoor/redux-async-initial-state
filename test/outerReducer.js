import * as actionTypes from '../src/actionTypes';
import outerReducer from '../src/outerReducer';

describe('outerReducer', () => {
  let appReducer = spy(() => {});
  let reducer = outerReducer(appReducer);

  it('calls appReducer for state loaded action', () => {
    reducer(undefined, {
      type: actionTypes.STATE_LOADING_DONE,
      payload: {
        state: {},
      },
    });
    expect(appReducer).to.have.been.called();
  });

  it('calls appReducer for app action', () => {
    reducer(undefined, { type: 'SOME_APP_ACTION' });
    expect(appReducer).to.have.been.called();
  });

  it('returns passed state', () => {
    appReducer = (state) => state;
    reducer = outerReducer(appReducer);
    const passedState = {};
    let state = reducer(undefined, {
      type: actionTypes.STATE_LOADING_DONE,
      payload: {
        state: passedState,
      },
    });
    expect(state).to.eq(passedState);
  });
});

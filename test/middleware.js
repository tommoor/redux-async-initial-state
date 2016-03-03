import { STATE_LOADING_START, STATE_LOADING_DONE, STATE_LOADING_FAILED } from '../src/actionTypes';
import middleware from '../src/middleware';

describe('middleware', () => {
  const dispatch = spy(() => {});
  const store = { dispatch };

  it('dispatches start action immediately', () => {
    const load = () => Promise.resolve({});
    middleware(load)(store);
    expect(dispatch).to.have.been.called.with({
      type: STATE_LOADING_START,
    });
  });

  it('dispatches failed action when promise rejected', () => {
    const load = () => new Promise((resolve, reject) => {
      reject();
      expect(dispatch).to.have.been.called.with({
        type: STATE_LOADING_FAILED,
      });
    });
    middleware(load)(store);
  });

  it('dispatches done action when promise resolved', () => {
    const loadedState = {};
    const load = () => new Promise(resolve => {
      resolve(loadedState);
      expect(dispatch).to.have.been.called.with({
        type: STATE_LOADING_DONE,
        state: loadedState,
      });
    });

    middleware(load)(store);
  });

});

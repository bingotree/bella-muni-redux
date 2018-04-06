/*
The Store is the object that brings them together. The store has the following responsibilities:

 * Holds application state;
   
 * Allows access to state via getState();
   
 * Allows state to be updated via dispatch(action);
   
 * Registers listeners via subscribe(listener);
   
 * Handles unregistering of listeners via the function returned by subscribe(listener).

https://redux.js.org/basics/store
*/
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import BellaMuniApp from './reducers';
import {
  // sync
  setRouteFilter,

  // async
  fetchRoutes,
  fetchRouteDirections,
  fetchRouteDirectionStops
} from './actions';

import assert from 'assert';

const store = createStore(BellaMuniApp, applyMiddleware(thunkMiddleware));

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

describe('Synchronous Dispatch tests', () => {
  it('Should set the routeFilter state using a string.', () => {
    store.dispatch(setRouteFilter('test'));
    assert.deepStrictEqual(store.getState().routeFilter, 'test');
  });
});

// TODO handle bad connections, etc
describe('Asynchronous dispatch tests', () => {
  it('Routes fetch successfully.', function() {
    store.dispatch(fetchRoutes())
      .then(function(res) {
        assert.strictEqual(store.getState().routes.length > 1, true);
      })
  });
  it('RouteDirections fetch successfully.', function() {
    store.dispatch(fetchRouteDirections('23'))
      .then(function(res) {
        assert.strictEqual(store.getState().routeDirections.length > 1, true);
      })
  });
  it('RouteDirectionStops fetch successfully.', function() {
    store.dispatch(fetchRouteDirectionStops('23','23___O_F10'))
      .then(function(res) {
        assert.strictEqual(store.getState().routeDirectionStops.length > 1, true);
      })
  });
});

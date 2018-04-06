// What's the minimal representation of your app's state as an object?
// https://redux.js.org/basics/reducers
/* IMPORT ALL ACTION TYPES */
import {
  // async
  FETCH_ROUTES,
  FETCH_ROUTE_DIRECTIONS,
  FETCH_ROUTE_DIRECTION_STOPS,
  FETCH_STOPS,

  // sync
  SET_ROUTE_FILTER,

  // other constants

} from './actions';

const initialState = {
  routes: [],
  routeDirections: [],
  routeDirectionStops: [],
  stops: [],
  favorites: [],
  routeFilter: ''
};
const BellaMuniApp = function(state = initialState, action) {
  switch(action.type) {
    // sync
    case SET_ROUTE_FILTER: 
      return Object.assign({}, state, {
        routeFilter: action.filter
      });
    break;
    // TODO policy for wiping out routes, routeDirections, routeDirectionStops ...
    // handled in reducer or on client side?
    // also, lifetime of error messages ...
    case FETCH_ROUTES:
      if ('status' in action) {
        let { routes } = state;
        let error = '';
        let isFetchingRoutes = false;
        if (action.status === 'error') {
          error = action.error;
          routes = [];
        } else if (action.status === 'success') {
          routes = action.response;
        }
        return Object.assign({}, state, {
          isFetchingRoutes: isFetchingRoutes,
          routes: routes,
          error: error
        });
      } else {
        return Object.assign({}, state, {
          isFetchingRoutes: true,
          routes: [] // policy-point: wipe out routes?
        });
      }
    break;
    case FETCH_ROUTE_DIRECTIONS:
      if ('status' in action) {
        let { routeDirections } = state;
        let error = '';
        let isFetchingRouteDirections = false;
        if (action.status === 'error') {
          error = action.error;
          routeDirections = [];
        } else if (action.status === 'success') {
          routeDirections = action.response;
        }
        return Object.assign({}, state, {
          isFetchingRouteDirections: isFetchingRouteDirections,
          routeDirections: routeDirections,
          error: error
        });
      } else {
        return Object.assign({}, state, {
          isFetchingRouteDirections: true,
          routeDirections: []
        });
      }
    break;
    case FETCH_ROUTE_DIRECTION_STOPS:
      if ('status' in action) {
        let { routeDirectionStops } = state;
        let error = '';
        let isFetchingRouteDirectionStops = false;
        if (action.status === 'error') {
          error = action.error;
          routeDirectionStops = [];
        } else if (action.status === 'success') {
          routeDirectionStops = action.response;
        }
        return Object.assign({}, state, {
          isFetchingRouteDirectionStops: isFetchingRouteDirectionStops,
          routeDirectionStops: routeDirectionStops,
          error: error
        });
      } else {
        return Object.assign({}, state, {
          isFetchingRouteDirectionStops: true,
          routeDirectionStops: []
        });
      }
    break;
  }
};

export default BellaMuniApp;

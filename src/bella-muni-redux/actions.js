import Routes from './models/Routes';
import RouteDirections from './models/RouteDirections';
import RouteDirectionStops from './models/RouteDirectionStops';

// Async actions use one action constant and status flags where applicable.
// for example

// processing
// { REQUEST_ROUTES } // fetching, reducer should set isFetching flag.

// resolved
// { FETCH_ROUTES, status: 'success', result: {...} } // success
// { FETCH_ROUTES, status: 'error', result: {...} } // error

// status flags
// isFetching flag for state


// async actions that comply with interface above:
// async resources
// each has an associated data model which handles the data store retreival details.
/*
ROUTES
ROUTE_DIRECTIONS
ROUTE_DIRECTION_STOPS
STOPS
FAVORITES
*/

// sync
export const SET_ROUTE_FILTER = 'SET_ROUTE_FILTER';

// async
export const FETCH_ROUTES = 'FETCH_ROUTES';
export const FETCH_ROUTE_DIRECTIONS = 'FETCH_ROUTE_DIRECTIONS';
export const FETCH_ROUTE_DIRECTION_STOPS = 'FETCH_ROUTE_DIRECTION_STOPS';
export const FETCH_STOPS = 'FETCH_STOPS';
export const FETCH_FAVORITES = 'FETCH_FAVORITES';

// Sync action creators
export function setRouteFilter(filter) {
  return { type: SET_ROUTE_FILTER, filter };
}

// Async action creators
// routes
export const requestRoutes = () => ({ type: FETCH_ROUTES });
export const receiveRoutesError = error => ({ type: FETCH_ROUTES, status: 'error', error });
export const receiveRoutes = routes => ({ type: FETCH_ROUTES, status: 'success', response: routes });

// routeDirections
export const requestRouteDirections = () => ({ type: FETCH_ROUTE_DIRECTIONS });
export const receiveRouteDirectionsError = error => ({ type: FETCH_ROUTE_DIRECTIONS, status: 'error', error });
export const receiveRouteDirections = directions => ({ type: FETCH_ROUTE_DIRECTIONS, status: 'success', response: directions });

// routeDirectionStops
export const requestRouteDirectionStops = () => ({ type: FETCH_ROUTE_DIRECTION_STOPS });
export const receiveRouteDirectionStopsError = error => ({ type: FETCH_ROUTE_DIRECTION_STOPS, status: 'error', error });
export const receiveRouteDirectionStops = stops => ({ type: FETCH_ROUTE_DIRECTION_STOPS, status: 'success', response: stops });

// Thunks for async actions -- thunks return funcs
export function fetchRoutes() {
  return (dispatch) => {
    dispatch(requestRoutes());
    return (Routes.fetch()
      .then(
        response => dispatch(receiveRoutes(response)),
        error => dispatch(receiveRoutesError(error)),
      )
    );
  };
}
export function fetchRouteDirections(route) {
  return (dispatch) => {
    dispatch(requestRouteDirections());
    return (RouteDirections.fetch(route)
      .then(
        response => dispatch(receiveRouteDirections(response)),
        error => dispatch(receiveRouteDirectionsError(error)),
      )
    );
  };
}
export function fetchRouteDirectionStops(route, direction) {
  return (dispatch) => {
    dispatch(requestRouteDirectionStops());
    return (RouteDirectionStops.fetch(route, direction)
      .then(
        response => dispatch(receiveRouteDirectionStops(response)),
        error => dispatch(receiveRouteDirectionStopsError(error)),
      )
    );
  };
}

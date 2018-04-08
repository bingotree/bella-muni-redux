/*
The Store is the object that brings them together. The store has the following responsibilities:

 * Holds application state;

 * Allows access to state via getState();

 * Allows state to be updated via dispatch(action);

 * Registers listeners via subscribe(listener);

 * Handles unregistering of listeners via the function returned by subscribe(listener).

https://redux.js.org/basics/store
*/
import readline from 'readline';
import { chalk, chalkAnimation } from 'chalk';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import BellaMuniApp from './reducers';
import {
  // sync
  setRouteFilter,

  // async
  fetchRoutes,
  fetchRouteDirections,
  fetchRouteDirectionStops,
} from './actions';

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    console.log(`You pressed the "${str}" key`);
    console.log();
    console.log(key);
    console.log();
  }
});
console.log('Press any key...');

const store = createStore(BellaMuniApp, applyMiddleware(thunkMiddleware));

// const unsubscribe = store.subscribe(() => console.log(store.getState()));
/*
const menus = {
  'default': {
    SHOW_FAVORITES: 'Show Favorites',
    SELECT_ROUTES: 'Select a Route',
    SEARCH: 'Search',
  },
  'route': {
    SELECT_DIRECTION: 'Select Direction'
  }
  'routeDirection': {
    ADD_TO_FAVORITES: 'Select Direction'
  }
}
*/

const clearScreen = () => process.stdout.write(parseInt('033c',8));
const rainbow = chalkAnimation.rainbow('Bella Muni'); // Animation starts

setTimeout(() => {
    rainbow.stop(); // Animation stops
    showMenu();
}, 1000);
function showMenu() {
  clearScreen();
  switch(menu) {
    case 'default':
    default:
      
    break;
  }
}

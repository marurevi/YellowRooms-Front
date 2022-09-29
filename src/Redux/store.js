import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import roomsReducer from './Rooms/rooms';
import reservationsReducer from './Reservations/Reservations';
import userReducer from './Authenticate/authentication';

const reducers = combineReducers({
  rooms: roomsReducer,
  reservations: reservationsReducer,
  user: userReducer,
});

const store = createStore(reducers, applyMiddleware(thunk, logger));
export default store;

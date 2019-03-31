import { createStore } from 'redux';
import rootReducer from '../reducers/index';

// create the store
const store = createStore(rootReducer);

export default store;

// Set up your root reducer here...
import { combineReducers } from 'redux';

import walletReducer from './walletReducer';

let reducers = combineReducers({
  walletState: walletReducer
})

export default reducers;

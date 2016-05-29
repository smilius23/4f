import { combineReducers } from 'redux';

import transactions from '../modules/transactions/reducer';
import settings from '../containers/reducer';
import user from './user'

const rootReducer = combineReducers({
  transactions,
  settings,
  user
});

export default rootReducer;

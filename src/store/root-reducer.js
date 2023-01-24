import { combineReducers } from 'redux';
import { contactReducer } from './contacts/contact-reducer';

export const rootReducer = combineReducers({
  contacts: contactReducer,
});

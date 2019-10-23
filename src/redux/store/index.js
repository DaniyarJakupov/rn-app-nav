import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

export const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(thunk)),
);

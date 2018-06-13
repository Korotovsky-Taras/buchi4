import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import allRedusers from '../reducers';

const beforeAction = store => next => action => {
	return next(action);
};

const store = createStore(
		allRedusers,
		composeWithDevTools(applyMiddleware(thunk, beforeAction)));

export default store;
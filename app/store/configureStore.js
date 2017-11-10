import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = (preloadedState) => {
	const middleware = [thunk];

	// TODO remettre la condition une fois le fichier .env créé
	// if (process.env.NODE_ENV === 'dev') {
		const { logger } = require('redux-logger');
		middleware.push(logger);
	//}

	const store = createStore(
		rootReducer,
		preloadedState,
		compose(applyMiddleware(...middleware))
	);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			store.replaceReducer(rootReducer);
		});
	}

	return store;
};

export default configureStore;

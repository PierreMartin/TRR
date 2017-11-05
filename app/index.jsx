import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import './css/main.scss'; // load here but can be loaded in 'webpack.config.js' -> 'entry.app'
// import AppDemo from './demo/App';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';

const store = createStore(todoApp);

// Without routing :
/*
ReactDOM.render(
  <AppDemo />,
  document.getElementById('root')
);
*/

// With routing :
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);


registerServiceWorker();

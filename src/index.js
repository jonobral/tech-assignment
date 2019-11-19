import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App/App';
import reducerWrapper from './reducers/index';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducerWrapper);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();

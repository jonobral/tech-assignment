import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers/index';
import App from '../components/App/App';

let store;

function setupStore() {
  return createStore(reducers);
}

beforeEach(() => {
  store = setupStore();
});

it('renders main App wrapper', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

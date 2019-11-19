import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import reducers from '../reducers/index';
import Highlighter from '../components/Highlighter/Highlighter';

let store;

function setupStore() {
  return createStore(reducers);
}

beforeEach(() => {
  store = setupStore();
});

describe('Highlighter Component', () => {

  it('renders Selected Button component', () => {
    const displayedText = "Description to indicate user what to do";
    const colors = ['red', 'yellow', 'green', 'gray'];
    const wrapper = rtl.render(
      <Provider store={store}>
        <Highlighter text={displayedText} />
      </Provider>
    );

    const filter = wrapper.getByText(displayedText);
    expect(filter).toBeTruthy();
    const buttons = wrapper.getAllByRole('button');
    expect(buttons).toBeTruthy();
    buttons.forEach((button, index) => {
      expect(button).toHaveStyle(`background-color: ${colors[index]}`);
    });
  });

});
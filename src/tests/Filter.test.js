import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import reducers from '../reducers/index';
import Filter from '../components/Filter/Filter';

let store;

function setupStore() {
  return createStore(reducers);
}

beforeEach(() => {
  store = setupStore();
});

describe('Filter Component', () => {

  it('renders Filter component', () => {
    const displayedText = "This text goes next to buttons";
    const colors = ['red', 'yellow', 'green', 'gray'];
    const wrapper = rtl.render(
      <Provider store={store}>
        <Filter text={displayedText} />
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
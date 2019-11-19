import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import reducers from '../reducers/index';
import * as inputBox from '../actions/inputBox';
import InputBox from '../components/InputBox/InputBox';

let store;
let wrapper;

function setupStore() {
  return createStore(reducers);
}

beforeEach(() => {
  store = setupStore();
  wrapper = rtl.render(
    <Provider store={store}>
      <InputBox inputContent={''} />
    </Provider>
  );
});

describe('InputBox Component', () => {

  it('renders elements', async () => {
    // Just a simple check of initial rendering
    const resultBox = wrapper.getByTestId("highlightsId");
    expect(resultBox).toBeTruthy();
    expect(resultBox).toHaveClass('InputBox-highlights');
  });

  it('selects a portion of text with red color', async () => {
    const displayedText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
    // Populate textarea with initial text
    store.dispatch(inputBox.setInputContent(displayedText));
    const filter = wrapper.getByText(displayedText);
    expect(filter).toBeTruthy();

    // Setting a selection within displayed text
    const colorToMark = 'red';
    store.dispatch(inputBox.setSelections(colorToMark, 1, 3));

    // Check how text is rendered after making a selection
    const highlights = await rtl.waitForElement(() => wrapper.getByTestId("highlightsId"));
    expect(highlights).toBeTruthy();
    expect(highlights).toHaveClass('InputBox-highlights');
    expect(highlights).toContainHTML(`<span class="InputBox-${colorToMark}">`);
  });

});
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import reducers from '../reducers/index';
import * as resultBox from '../actions/resultBox';
import * as inputBox from '../actions/inputBox';
import ResultBox from '../components/ResultBox/ResultBox';

let store;
let wrapper;

function setupStore() {
  return createStore(reducers);
}

beforeEach(() => {
  store = setupStore();
  wrapper = rtl.render(
    <Provider store={store}>
      <ResultBox inputContent={''} />
    </Provider>
  );
});

describe('ResultBox Component', () => {

  it('renders element', async () => {
    // Just a simple check of initial rendering
    const resultBox = wrapper.getByTestId("resultBoxId");
    expect(resultBox).toBeTruthy();
    expect(resultBox).toHaveClass('ResultBox-highlights');
  });

  it('filters text by color', async () => {
    const displayedText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
    // Populate textarea with initial text
    // InputBox should be populated first, since we cannot inject text directly to ResultBox
    store.dispatch(inputBox.setInputContent(displayedText));
    // Setting a selection within displayed text
    const colorToMark = 'red';
    store.dispatch(inputBox.setSelections(colorToMark, 1, 3));

    // Show all text with color red highlighted
    store.dispatch(resultBox.showSelections(colorToMark));

    // Check how text is rendered after making a selection
    const resultText = await rtl.waitForElement(() => wrapper.getByTestId("resultBoxId"));
    expect(resultText).toBeTruthy();
    expect(resultText).toHaveClass('ResultBox-highlights');
    expect(resultText).toContainHTML(`<span class="ResultBox-highlighted ResultBox-${colorToMark}">`);
  });

});
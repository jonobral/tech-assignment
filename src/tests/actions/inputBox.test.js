import * as actions from '../../actions/inputBox'
import * as types from '../../actions/types'

describe('InputBox Actions', () => {
  it('should set input content', () => {
    const content = 'this is my test content';
    const expectedAction = {
      type: types.SET_INPUT_CONTENT,
      content
    }
    expect(actions.setInputContent(content)).toEqual(expectedAction);
  })

  it('should set input ref', () => {
    const inputRef = 'ref';
    const expectedAction = {
      type: types.SET_INPUT_REF,
      inputRef
    }
    expect(actions.setInputRef(inputRef)).toEqual(expectedAction);
  })

  it('should set selections', () => {
    const content = {
      color: 'red',
      colorSeq: 1,
      start: 10,
      end: 20
    }
    const expectedAction = {
      type: types.SET_INPUT_SELECTIONS,
      ...content
    }
    expect(actions.setSelections(content.color, content.colorSeq, content.start, content.end)).toEqual(expectedAction);
  })
})
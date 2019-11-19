import reducer from '../../reducers/inputBox';
import * as types from '../../actions/types';

describe('InputBox Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        content: '',
	      selections: []
      }
    )
  })

  it('should handle SET_INPUT_CONTENT', () => {
    expect(
      reducer([], {
        type: types.SET_INPUT_CONTENT,
        content: 'testing'
      })
    ).toEqual({
      content: 'testing'
    });
  });
})
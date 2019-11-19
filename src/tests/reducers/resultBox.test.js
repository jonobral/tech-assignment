import reducer from '../../reducers/resultBox';
import * as types from '../../actions/types';

describe('ResultBox Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        colors: [],
	      sortByColors: false
      }
    )
  })

  it('should handle SHOW_SELECTIONS', () => {
    expect(
      reducer({colors: []}, {
        type: types.SHOW_SELECTIONS,
        color: 'red'
      })
    ).toEqual({
     colors: ['red']
    });
  });
})
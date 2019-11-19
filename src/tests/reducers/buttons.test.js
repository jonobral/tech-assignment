import reducer from '../../reducers/buttons';
import * as types from '../../actions/types';

describe('Buttons Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        highlighter: {
          isRedSelected: false,
          isYellowSelected: false,
          isGreenSelected: false
        },
        filter: {
          isRedSelected: false,
          isYellowSelected: false,
          isGreenSelected: false
        }
      }
    )
  })

  it('should handle SET_RED_SELECTED', () => {
    expect(
      reducer([], {
        type: types.SET_RED_SELECTED,
        isRedSelected: true,
        componentType: 'highlighter'
      })
    ).toEqual({
      highlighter: {
        isRedSelected: true,
        isYellowSelected: false,
        isGreenSelected: false
      }
    });
  });
})
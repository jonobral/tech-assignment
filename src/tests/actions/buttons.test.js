import * as actions from '../../actions/buttons'
import * as types from '../../actions/types'

describe('Button Actions', () => {
  it('should select red button', () => {
    const expectedAction = {
      type: types.SET_RED_SELECTED,
      componentType: 'highlighter',
      isRedSelected: true
    }
    expect(actions.setRedSelected('highlighter', true)).toEqual(expectedAction);
  })
})
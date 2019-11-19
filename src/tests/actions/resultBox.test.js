import * as actions from '../../actions/resultBox'
import * as types from '../../actions/types'

describe('ResultBox Actions', () => {
  it('should set input content', () => {
    const expectedAction = {
      type: types.SHOW_SELECTIONS,
      color: 'red'
    }
    expect(actions.showSelections('red')).toEqual(expectedAction);
  })

  it('should set input ref', () => {
    const expectedAction = {
      type: types.DELETE_SELECTION,
      color: 'red'
    }
    expect(actions.deleteSelection('red')).toEqual(expectedAction);
  })
})
import { combineReducers } from 'redux';

import buttons from './buttons';
import inputBox from './inputBox';
import resultBox from './resultBox';

const reducerWrapper = combineReducers({
	buttons,
	inputBox,
	resultBox
});

export default reducerWrapper;
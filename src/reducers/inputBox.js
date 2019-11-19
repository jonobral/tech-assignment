import {
	SET_INPUT_CONTENT,
	SET_INPUT_REF,
	SET_INPUT_SELECTIONS,
	CLEAR_TEXT_AND_SELECTIONS
} from '../actions/types';

const initialState = {
	content: '',
	selections: []
};

export default function inputBox(state = initialState, action) {

	switch (action.type) {
		case SET_INPUT_CONTENT:
			return {
				...state,
				content: action.content
			};
		case SET_INPUT_REF:
			return {
				...state,
				inputRef: action.inputRef
			};
		case SET_INPUT_SELECTIONS:
			return {
				...state,
				selections: [
					...state.selections,
					{
						color: action.color,
						colorSeq: action.colorSeq,
						start: action.start, 
						end: action.end
					}
				],
				inputRef: null
			};
		case CLEAR_TEXT_AND_SELECTIONS:
			return {
				...state,
				content: '',
				selections: []
			};
		default:
				return state;
	}

};

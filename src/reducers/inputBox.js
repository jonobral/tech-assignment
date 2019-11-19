import {
	SET_INPUT_CONTENT,
	SET_INPUT_REF,
	SET_INPUT_SELECTIONS
} from '../actions/types';

const initialState = {
	content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially',
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
						start: action.start, 
						end: action.end
					}
				],
				inputRef: null
			};
		default:
				return state;
	}

};

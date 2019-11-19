import {
	DELETE_SELECTION,
	SHOW_SELECTIONS
} from '../actions/types';

const initialState = {
	colors: []
};

export default function resultBox(state = initialState, action) {

	switch (action.type) {
		case SHOW_SELECTIONS:
			return {
				...state,
				colors: [
					...state.colors,
					action.color
				]
			};
		case DELETE_SELECTION:
			return {
				colors: [
					...state.colors.filter(color => color !== action.color).map(color => color)
				]
			};
		default:
				return state;
	}

};

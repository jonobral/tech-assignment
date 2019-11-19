import {
	SET_RED_SELECTED,
	SET_YELLOW_SELECTED,
	SET_GREEN_SELECTED
} from '../actions/types';

const initialState = {
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
};

export default function buttons(state = initialState, action) {
	if (action.componentType === 'highlighter')
		/* Hightlighter Actions */
		switch (action.type) {
			case SET_RED_SELECTED:
				return {
					...state,
					highlighter: {
						isRedSelected: action.isRedSelected,
						isYellowSelected: false,
						isGreenSelected: false
					}
				};
			case SET_YELLOW_SELECTED:
				return {
					...state,
					highlighter: {
						isRedSelected: false,
						isYellowSelected: action.isYellowSelected,
						isGreenSelected: false
					}
				};
			case SET_GREEN_SELECTED:
				return {
					...state,
					highlighter: {
						isRedSelected: false,
						isYellowSelected: false,
						isGreenSelected: action.isGreenSelected
					}
				};
			default:
					return state;
	} else {
		/* Filter Actions */
		switch (action.type) {
			case SET_RED_SELECTED:
				return {
					...state,
					filter: {
						...state.filter,
						isRedSelected: action.isRedSelected
					}
				};
			case SET_YELLOW_SELECTED:
				return {
					...state,
					filter: {
						...state.filter,
						isYellowSelected: action.isYellowSelected
					}
				};
			case SET_GREEN_SELECTED:
				return {
					...state,
					filter: {
						...state.filter,
						isGreenSelected: action.isGreenSelected
					}
				};
			default:
					return state;
			}
		}
};

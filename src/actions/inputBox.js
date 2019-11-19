import { 
	SET_INPUT_CONTENT,
	SET_INPUT_REF,
	SET_INPUT_SELECTIONS,
	CLEAR_TEXT_AND_SELECTIONS
} from './types';

export const setInputContent = (content) => ({
	type: SET_INPUT_CONTENT,
	content
});

export const setInputRef = (inputRef) => ({
	type: SET_INPUT_REF,
	inputRef
});

export const setSelections = (color, colorSeq, start, end) => ({
	type: SET_INPUT_SELECTIONS,
	color,
	colorSeq,
	start,
	end
});

export const clearTextAndSelections = () => ({
	type: CLEAR_TEXT_AND_SELECTIONS
})

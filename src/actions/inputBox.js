import { 
    SET_INPUT_CONTENT,
    SET_INPUT_REF,
    SET_INPUT_SELECTIONS
} from './types';

export const setInputContent = (content) => ({
    type: SET_INPUT_CONTENT,
    content
});

export const setInputRef = (inputRef) => ({
    type: SET_INPUT_REF,
    inputRef
});

export const setSelections = (color, start, end) => ({
    type: SET_INPUT_SELECTIONS,
    color,
    start,
    end
});

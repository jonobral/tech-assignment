import { 
    DELETE_SELECTION,
    SHOW_SELECTIONS
} from './types';

export const showSelections = (color) => ({
    type: SHOW_SELECTIONS,
    color
});

export const deleteSelection = (color) => ({
    type: DELETE_SELECTION,
    color
});


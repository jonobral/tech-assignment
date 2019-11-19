import { 
    DELETE_SELECTION,
    SHOW_SELECTIONS,
    SORT_SELECTIONS
} from './types';

export const showSelections = (color) => ({
    type: SHOW_SELECTIONS,
    color
});

export const deleteSelection = (color) => ({
    type: DELETE_SELECTION,
    color
});

export const sortSelections = () => ({
    type: SORT_SELECTIONS
});

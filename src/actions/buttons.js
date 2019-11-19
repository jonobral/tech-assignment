import { 
    SET_RED_SELECTED,
    SET_YELLOW_SELECTED,
    SET_GREEN_SELECTED
} from './types';

export const setRedSelected = (componentType, isRedSelected) => ({
    type: SET_RED_SELECTED,
    componentType,
    isRedSelected
});

export const setYellowSelected = (componentType, isYellowSelected) => ({
    type: SET_YELLOW_SELECTED,
    componentType,
    isYellowSelected
});

export const setGreenSelected = (componentType, isGreenSelected) => ({
    type: SET_GREEN_SELECTED,
    componentType,
    isGreenSelected
});

import { NavigationActionTypes }      from './navigation.types';
import { toggleNavigationVisibility } from '../libs/navigation.utils';

const INITIAL_STATE = {
  hidden: true,
};

const NavigationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NavigationActionTypes.TOGGLE_NAVIGATION_HIDDEN:
      return {
        ...state,
        hidden: toggleNavigationVisibility(!state.hidden),
      };
    default:
      return state;
  }
};

export default NavigationReducer;

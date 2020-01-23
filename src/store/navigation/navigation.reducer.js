import { toggleNavigationVisibility } from '../libs/navigation.utils';
import { NavigationActionTypes }      from './navigation.types';

const INITIAL_STATE = {
  hidden: true,
};

const NavigationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NavigationActionTypes.TOGGLE_NAVIGATION:
      return {
        ...state,
        hidden: toggleNavigationVisibility(!state),
      };
    default:
      return state;
  }
};

export default NavigationReducer;

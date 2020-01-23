import { createSelector } from 'reselect';

const selectNavigation = (state) => state.navigation;

export const selectNavigationToggle = createSelector(
  [selectNavigation],
  (navigation) => navigation.hidden,
);

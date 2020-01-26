export const toggleNavigationVisibility = (state) => {
  state
    ? document.body.classList.add('navigation__open')
    : document.body.classList.remove('navigation__open');

  return state;
};

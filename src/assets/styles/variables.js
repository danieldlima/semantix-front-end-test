export const Colors = {
  primary:     '#001B36',
  white:       '#ffffff',
  black:       '#000000',
  blackMedium: '#B5B5B5',
};

export const Transition = (type = 'all', velocity = '.4s') => ({
  default: `${type} ${velocity} ease-in-out`,
});

export const Padding = {
  page:    '0 15%',
  default: 1.5,
};

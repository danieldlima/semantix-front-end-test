export const Colors = {
  primary: '#72bf44',
  primaryDark: '#158110',
  yellowOffer: '#fae800',
  greyLight: '#f8f8f8',
  greyLight2: '#ececec',
  greyLight3: '#f7f7f7',
  greyMedium: '#878787',
  greyMedium2: '#5a5a4b',
  white: '#ffffff',
  black: '#000000',
  red: '#ed1c24'
};

export const Media = {
  phone: '37.5rem'
};

export const Transition = (type = 'all', velocity = '.4s') => {
  return {
    default: `${type} ${velocity} ease-in-out`
  };
};

export const Padding = {
  page: '0 15%',
  productItem: '1rem'
};

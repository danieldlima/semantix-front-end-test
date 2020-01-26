import { css } from 'styled-components';

const screens = {
  sm:  { min: 640, max: 639, custom: 0 },
  md:  { min: 768, max: 767, custom: 0 },
  lg:  { min: 1024, max: 1023, custom: 0 },
  xl:  { min: 1280, max: 1279, custom: 0 },
  xxl: { min: 1800, max: 1799, custom: 0 },
};

export const screenMin = Object.keys(screens).reduce((acc, label) => {
  acc[label] = (...args) => css`
      @media (min-width: ${screens[label].min}px) {
         ${css(...args)};
      }
   `;
  return acc;
}, {});

export const screenMax = Object.keys(screens).reduce((acc, label) => {
  acc[label] = (...args) => css`
      @media (max-width: ${screens[label].max}px) {
         ${css(...args)};
      }
   `;
  return acc;
}, {});

export const screenCustom = (type, value) => Object.keys(screens).reduce((acc, label) => {
  screens[label].custom = value;
  acc[label] = (...args) => css`
      @media (${type}-width: ${screens[label].custom}px) {
         ${css(...args)};
      }
   `;
  return acc;
}, {});

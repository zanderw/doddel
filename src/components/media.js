import { css } from "styled-components";

export const breakpoints = {
    phablet: '414px',
    tablet: '768px',
    laptop: '992px',
    desktop: '1200px',
};

export default Object.keys(breakpoints).reduce(
    (accumulator, key) => {
        accumulator[key] = (...args) => css`
      @media (max-width: ${breakpoints[key]}) {
        ${css(...args)}
      }`;
        return accumulator;
    },
    {}
);
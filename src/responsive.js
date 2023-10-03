import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};

export const px2vw = (size, width = 1440) => `${(size / width) * 150}vw`;

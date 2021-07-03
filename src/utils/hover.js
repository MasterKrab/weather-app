import { css } from 'styled-components';

const hover = css`
  @media screen and (min-width: 768px) {
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.15);
    }
  }
`;

export default hover;

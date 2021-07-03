import { keyframes } from 'styled-components';

const alert = keyframes`
0%{
    transform: translateX(150%);
  }
  20%{
    transform: translateX(0);
  }
  80%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(150%);
  }
`;

export default alert;

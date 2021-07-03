import styled from 'styled-components';
import alert from '../../utils/alert';

const Alert = styled.p`
  position: fixed;
  top: 0;
  right: 1rem;
  background-color: #dd3c3f;
  max-width: 300px;
  padding: 1rem;
  border-radius: 0.5rem;
  animation: ${alert} 3s ease-in-out;
`;

export default Alert;

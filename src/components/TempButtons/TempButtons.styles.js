import styled from 'styled-components';
import hover from '../../utils/hover';

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  width: 100%;
  margin-bottom: 4.125rem;
  max-width: 704px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Button = styled.button`
  background-color: ${({ light, theme }) => (light ? theme.buttonColor3 : theme.buttonColor2)};
  color: ${({ light, theme }) => (light ? theme.primaryColor : theme.textColor)};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.25rem;
  font-weight: bold;
  ${hover};
`;

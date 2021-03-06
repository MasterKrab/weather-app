import styled from 'styled-components';

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.elementColor};
  height: 177px;
  text-align: center;
  padding: 1.125rem 1.375rem;
`;

export const Title = styled.h2`
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 0;
`;

export const Image = styled.img`
  width: 56.44px;
  margin-top: auto;
  margin-bottom: auto;
`;

export const Temp = styled.p`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  margin-bottom: 0;
`;

export const Min = styled.span`
  color: ${({ theme }) => theme.textColor2};
`;

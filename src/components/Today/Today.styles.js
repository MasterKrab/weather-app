import styled from 'styled-components';

export const Content = styled.section`
  width: 100%;

  @media screen and (min-width: 1300px) {
    max-width: 704px;
  }
`;

export const SubTitle = styled.h2`
  text-align: start;
  margin-top: 72px;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 328px));
  grid-template-rows: repeat(2, 204px) repeat(2, 159px);
  justify-content: center;
  gap: 3rem;

  @media screen and (min-width: 1300px) {
    grid-template-rows: 204px 159px;
    max-width: 704px;
  }
`;

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.elementColor};
  text-align: center;
  padding: 1.375rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  margin-top: 0;
`;

export const CardTitle = styled.h3`
  font-size: 4rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
`;

export const Unit = styled.span`
  font-size: 40%;
  font-weight: normal;
  margin-left: ${({ space }) => (space ? '1rem' : '0')};
`;

export const Status = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: 0;

  &::before {
    content: '';
    background-image: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 30px;
    height: 30px;
    margin-right: 0.5rem;
  }
`;

export const Progress = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.textColor2};
  width: min(229px, 85%);
  height: 8px;
  border-radius: 80px;
  margin: auto auto 1rem;
  font-size: 0.8rem;

  &::before,
  &::after {
    position: absolute;
    top: -18px;
  }

  &::before {
    content: '0';
    left: 0;
  }

  &::after {
    content: '100';
    right: 0;
  }
`;

export const Bar = styled.div`
  background-color: #ffec65;
  width: ${({ progress }) => progress};
  height: 100%;
  border-radius: 80px;

  &::before,
  &::after {
    position: absolute;
    top: -18px;
  }

  &::before {
    content: '50';
    left: 50%;
    transform: translateX(-50%);
  }

  &::after {
    content: '%';
    top: 13px;
    right: 0;
  }
`;

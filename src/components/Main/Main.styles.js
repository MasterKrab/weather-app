import styled from 'styled-components';

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.25rem 3.375rem;

  @media screen and (min-width: 768px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media screen and (min-width: 1200px) {
    padding-top: 2.625rem;
    padding-bottom: 9.25rem;
  }
`;

export const CardsDays = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 120px);
  justify-content: center;
  gap: 1.625rem;
  width: 100%;

  @media screen and (min-width: 1300px) {
    max-width: 704px;
  }
`;

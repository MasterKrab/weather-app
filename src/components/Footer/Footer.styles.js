import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`;

export const Link = styled.a`
  color: inherit;

  @media screen and (min-width: 768px) {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

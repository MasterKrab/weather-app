import styled from 'styled-components';
import hover from '../../utils/hover';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.elementColor};
  position: relative;
  min-height: 100vh;
  padding: 1.125rem 0.688rem;
  text-align: center;
  grid-row: span 2;
  z-index: 1;

  @media screen and (min-width: 768px) {
    padding: 2.625rem 2.875rem;
  }

  &::before {
    content: '';
    background-image: url(${({ image }) => image});
    width: 100%;
    height: 100%;
    background-position: center 103px;
    background-repeat: no-repeat;
    background-size: 150%;
    position: absolute;
    top: 0;
    left: 0;
    filter: brightness(0) saturate(100%) invert(13%) sepia(5%) saturate(5211%) hue-rotate(196deg)
      brightness(94%) contrast(86%);
    z-index: -1;
  }
`;

export const Buttons = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.buttonColor};
  color: ${({ theme }) => theme.textColor};
  width: ${({ widthEl }) => widthEl};
  height: ${({ heightEl }) => heightEl};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  ${hover};
`;

export const CurrentLocation = styled(SearchButton)`
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 60%;
  border-radius: 50%;
  ${hover};
`;

export const Content = styled.section`
  margin: auto;
  color: ${({ theme }) => theme.textColor2};
`;

export const Image = styled.img`
  margin-top: 2.5rem;
  width: 150px;

  @media screen and (min-width: 768px) {
    width: 202px;
  }
`;

export const Title = styled.h1`
  margin-top: 2.5rem;
  font-size: 6.5rem;
  color: ${({ theme }) => theme.textColor};
`;

export const TemperatureUnit = styled.span`
  font-size: 40%;
  color: ${({ theme }) => theme.textColor2};
`;

export const SubTitle = styled.h2`
  font-size: 2rem;
  margin-top: 6.5rem;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1rem;
  list-style: none;
  padding-left: 0;
`;

export const ListItem = styled.li`
  list-style: ${({ circle }) => circle && 'inside'};
`;

export const Location = styled.p`
  display: flex;
  justify-content: center;

  &::before {
    content: url(${({ image }) => image});
    display: inline-block;
    width: 12px;
    margin-right: 0.5rem;
  }
`;

export const Bottom = styled.div`
  margin-top: auto;
`;

export const SearchForm = styled.form`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: inherit;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: opacity 0.2s, visibility 0.2s;
  padding: 60px 12px;

  @media screen and (min-width: 768px) {
    padding: 82px 46px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 53px;
  background-image: url(${({ image }) => image});
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  width: 18px;
  height: 18px;
  ${hover};
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 58px;
`;

export const InputContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 252px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    z-index: 100;
    background-image: url(${({ image }) => image});
    background-size: contain;
    background-repeat: no-repeat;
    width: 17px;
    height: 17px;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.textColor};
  width: 100%;
  height: 48px;
  padding-left: 3rem;
  padding-right: 1rem;
  color: inherit;
`;

export const Submit = styled.button`
  background-color: ${({ theme }) => theme.submit};
  width: 86px;
  height: 48px;
  color: inherit;
`;

export const City = styled.button`
  position: relative;
  display: block;
  color: inherit;
  width: 367px;
  height: 64px;
  border: 1px solid transparent;
  background-color: transparent;
  margin-bottom: 45px;
  padding: 1rem;
  text-align: start;
  transition: border-color 0.2s;
  --opacity: 0;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    background-image: url(${({ image }) => image});
    background-color: transparent;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 18px;
    height: 18px;
    opacity: var(--opacity);
    transition: opacity 0.2s;
  }

  &:hover,
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.textColor2};
    --opacity: 1;
  }
`;

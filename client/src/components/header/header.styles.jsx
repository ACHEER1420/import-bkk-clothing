import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  background-color: white;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin: 20px 0px;
  }
`;

export const LogoContainer = styled(Link)`
  width: 100px;
  height: 100%;
  padding-left: 25px;
  display: flex;
  align-items: center;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionContainerStyles = css`
  padding: 10px;
  cursor: pointer;
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;

import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  text-transform: uppercase;
  z-index: 5;
  background-color: white;
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
  padding-right: 30px;
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

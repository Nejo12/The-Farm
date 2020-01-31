import styled from "styled-components";
import { Link } from "react-router-dom";

export const NaviContainer = styled.div`
  background: green;
  width: 100%;
  height: 70px;
  color: #fff;
  padding: 0 10px;
  position: fixed;
  top: 0;
  z-index: 99;
`;

export const StyledNaviContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  color: #fff;

  img {
    width: 40px;
  }

  .capitalize {
    text-transform: capitalize;
  }

  @media screen and (max-width: 850px) {
    padding: 0;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 50px;
  padding-top: 10px;
  margin-right: 20px;
  margin-left: 50px;

  @media screen and (max-width: 450px) {
    margin-left: 10px;
  }

  @media screen and (max-width: 320px) {
    margin-right: unset;
  }
`;

export const BrandLogo = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 15px 50px;

  @media screen and (max-width: 850px) {
    width: 70%;
  }

  @media screen and (max-width: 450px) {
    padding: 10px;
    font-size: 10px;
  }
`;

export const OptionLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 0 10px;
  cursor: pointer;
`;

import styled from "styled-components";

export const StyledNavi = styled.div`
  background: green;
  width: 100%;
  height: 70px;
  color: #fff;
  padding: 10px;
  position: fixed;
  top: 0;
  z-index: 99;
`;

export const StyledNaviContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  color: #fff;

  .logo-container {
    height: 100%;
    width: 50px;
    padding-top: -10px;
    margin-right: 20px;
  }

  img {
    width: 40px;
  }

  .capitalize {
    text-transform: capitalize;
  }

  .options {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    height: 100%;
    padding: 15px 50px;
  }

  .option {
    text-decoration: none;
    color: #fff;
    padding: 0 20px;
    cursor: pointer;
  }

  .brang-logo {
    display: flex;
    justify-content: flex-start;
  }
`;

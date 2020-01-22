import styled from "styled-components";

export const StyledMenuItem = styled.div`
  flex: 1 1 auto;
  justify-content: center;
  min-width: 30%;
  height: 240px;
  display: flex;
  align-items: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  background-position: center;
  background-size: cover;

  &.large {
    height: 380px;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90px;
    padding: 0 25px;
    border: 1px solid black;

    .title {
      font-weight: bold;
      margin-bottom: 6px;
      font-size: 22px;
      color: #4a4a4a;
    }

    .subtitle {
      font-weight: lighter;
      font-size: 16px;
    }
  }
`;

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
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }

  &.large {
    height: 380px;
  }

  .background-image {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }

  .content {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90px;
    padding: 0 25px;
    border: 1px solid black;
    background: #fff;
    opacity: 0.7;

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

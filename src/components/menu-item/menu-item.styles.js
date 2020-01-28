import styled from "styled-components";

export const StyledMenuItem = styled.div`
  display: flex;
  justify-content: center;
  flex: 1 1 auto;
  min-width: 30%;
  height: 300px;
  align-items: center;
  border: 1px solid lightgreen;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }

  .background-image {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    z-index: 3;

    &:hover {
      z-index: 1;
    }
  }

  .content {
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    max-width: 28%;
    padding: 100px 15px 0;
    color: #fff;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) 70%,
      rgba(0, 0, 0, 0.5) 100%
    );
    z-index: 2;
    border-radius: 4px;

    &:hover {
      z-index: 4;
    }

    .title {
      font-weight: bold;
      margin-bottom: 6px;
      font-size: 22px;
    }

    .subtitle {
      font-size: 12px;
    }
  }
`;

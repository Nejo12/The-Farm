import styled from "styled-components";

export const SpinnerOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  height: 70px;
  width: 70px;
  border: 5px solid green;
  border-top: 5px solid transparent;

  border-radius: 50%;
  margin: 20px auto;
  animation: spin 1s linear infinite;
  -webkit-animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

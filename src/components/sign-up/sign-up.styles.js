import styled from "styled-components";
import image from "../../media/small-windmill.jpg";

export const StyledSignUp = styled.div`
  background: url(${image}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;

  .sign-up-card {
    background-color: rgba(0, 0, 0, 0.5);
    position: relative;
    top: 50px;
    margin: auto;
    max-width: 400px;
    height: 80vh;
    padding: 20px;
    text-align: center;
    box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.25);
    margin: auto;
  }

  .sign-up-content {
    color: #fff;
  }
`;

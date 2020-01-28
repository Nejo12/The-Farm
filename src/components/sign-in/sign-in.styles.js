import styled from "styled-components";

export const StyledSignIn = styled.div`
  background-color: lightgreen;
  background: url("https://i.ibb.co/ssgLXM3/small-windmill.jpg") no-repeat
    center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;

  .sign-in-content {
    position: relative;
    top: 50px;
    margin: auto;
    max-width: 400px;
    height: 70vh;
    padding: 20px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.25);
  }

  .content {
    color: #fff;
  }
`;

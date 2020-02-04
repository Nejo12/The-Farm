import styled from "styled-components";

export const HomeImageContainer = styled.div`
  background-color: lightgreen;
  background: url("https://i.ibb.co/WpX3Vzc/windmill.jpg");
  background-repeat: no-repeat;
  position: relative;
  background-size: 100%, cover;
  background-position: center, center;
  width: 100%;
  height: 600px;
  animation: animateHomeImage 1s;

  @keyframes animateHomeImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 900px) {
    height: 400px;
  }

  @media screen and (max-width: 600px) {
    background-image: none;
    background-color: darkgreen;
  }
`;

export const HomeImageContent = styled.div`
  padding: 20px;
`;

export const HomeImageText = styled.div`
  position: absolute;
  max-width: 500px;
  min-height: 100px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 80px;
  margin: 20px;
  padding: 10px 30px;
  border: 2px solid #fff;

  h1 {
    font-size: 2rem;
  }

  span {
    color: green;
    font-size: 3rem;
    text-shadow: 2px 2px #fff;
  }

  p {
    font-size: 1rem;
    line-height: 1.3rem;
  }

  @media screen and (max-width: 900px) {
    min-height: 20px;
    bottom: 20px;
    padding: 10px;

    span {
      color: lightgreen;
      font-size: 2rem;
    }
  }
`;

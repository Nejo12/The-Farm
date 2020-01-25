import styled from "styled-components";
import image from "../../media/big-windmill.jpg";

export const StyledHomeImage = styled.div`
  background: url(${image});
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
`;

export const StyledContent = styled.div`
  padding: 20px;

  .home-image-text {
    position: absolute;
    max-width: 500px;
    min-height: 100px;
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
      font-size: 42px;
      text-shadow: 2px 2px #fff;
      text-decoration: underline;
    }

    p {
      font-size: 1rem;
      line-height: 1.3rem;
    }
  }
`;

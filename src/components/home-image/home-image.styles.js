import styled from "styled-components";
import image from "../../media/three-baguettes.jpg";

export const StyledHomeImage = styled.div`
  background: url(${image});
  position: relative;
  background-size: 100%, cover;
  background-position: center, center;
  width: 100%;
  height: 600px;
  animation: animateHomeImage 1s;

  .home-image-content {
    padding: 20px;
  }

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

    p {
      font-size: 1rem;
      line-height: 1.3rem;
    }
  }

  @keyframes animateHomeImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

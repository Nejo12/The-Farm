import styled from "styled-components";

export const StyledFooter = styled.div`
  background: #292929;
  color: #fff;
  width: 100%;
  height: 20px;
  position: fixed;
  bottom: 0;
  z-index: 99;

  @keyframes blink {
    50% {
      color: transparent;
    }
  }
  .loader__dot {
    display: inline;
    animation: 1s blink infinite;
  }
  .loader__dot:nth-child(2) {
    animation-delay: 250ms;
  }
  .loader__dot:nth-child(3) {
    animation-delay: 500ms;
  }
`;

export const FooterNameStyles = styled.div`
  margin: 2px 48px 0 0;
  text-align: end;
  letter-spacing: 0.3em;
  font-size: 12px;
`;

import React from "react";

import { StyledFooter, FooterNameStyles } from "./footer.styles";

const Footer = () => (
  <StyledFooter>
    <FooterNameStyles>
      Gabriel Olaniyi 2020 {"  "}
      <span className="loader__dot">.</span>
      {"  "}
      <span className="loader__dot">.</span>
      {"  "}
      <span className="loader__dot">.</span>
    </FooterNameStyles>
  </StyledFooter>
);

export default Footer;

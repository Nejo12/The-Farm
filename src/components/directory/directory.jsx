import React from "react";
import { connect } from "react-redux";

import MenuItem from "../menu-item/menu-item";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import { StyledDirectory } from "./directory.styles";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => (
  <StyledDirectory className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </StyledDirectory>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);

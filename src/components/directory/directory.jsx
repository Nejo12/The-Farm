import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import MenuItem from "../menu-item/menu-item";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import { StyledDirectory } from "./directory.styles";

const Directory = ({ sections }) => (
  <StyledDirectory>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </StyledDirectory>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);

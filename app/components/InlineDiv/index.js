/**
*
* InlineDiv
*
*/

import React, {Children} from 'react';
// import styled from 'styled-components';


import StyledDiv from './StyledDiv';
import PropTypes from "prop-types";

function InlineDiv(props) {
  return (
    <StyledDiv>
      {Children.toArray(props.children)}
    </StyledDiv>
  );
}

InlineDiv.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InlineDiv;

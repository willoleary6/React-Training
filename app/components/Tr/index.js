/**
*
* Tr
*
*/

import React, {Children} from 'react';
// import styled from 'styled-components';
import StyledTr from './StyledTr';


import PropTypes from "prop-types";

function Tr(props) {
  return (
    <StyledTr>
      {Children.toArray(props.children)}
    </StyledTr>
  );
}

Tr.propTypes = {
  children: PropTypes.node,
};

export default Tr;

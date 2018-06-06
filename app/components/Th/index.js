/**
*
* Tr
*
*/

import React, {Children} from 'react';
// import styled from 'styled-components';
import StyledTh from './StyledTh';


import PropTypes from "prop-types";

function Th(props) {
  return (
    <StyledTh>
      {Children.toArray(props.children)}
    </StyledTh>
  );
}

Th.propTypes = {
  children: PropTypes.node,
};

export default Th;

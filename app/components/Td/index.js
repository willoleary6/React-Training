/**
*
* Tr
*
*/

import React, {Children} from 'react';
// import styled from 'styled-components';
import StyledTd from './StyledTd';


import PropTypes from "prop-types";

function Td(props) {
  return (
    <StyledTd>
      {Children.toArray(props.children)}
    </StyledTd>
  );
}

Td.propTypes = {
  children: PropTypes.node,
};

export default Td;

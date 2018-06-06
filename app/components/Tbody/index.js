/**
*
* Tr
*
*/

import React, {Children} from 'react';
// import styled from 'styled-components';
import StyledTbody from './StyledTbody';

import PropTypes from "prop-types";

function Tbody(props) {
  return (
    <StyledTbody>
        {Children.toArray(props.children)}
    </StyledTbody>
  );
}

Tbody.propTypes = {
  children: PropTypes.node,
};

export default Tbody;

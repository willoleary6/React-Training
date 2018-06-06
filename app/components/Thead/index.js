/**
*
* Tr
*
*/

import React, {Children} from 'react';
// import styled from 'styled-components';
import StyledThead from './StyledThead';
import Tr from '../Tr';

import PropTypes from "prop-types";

function Thead(props) {
  return (
    <StyledThead>
      <Tr>
        {Children.toArray(props.children)}
      </Tr>
    </StyledThead>
  );
}

Thead.propTypes = {
  children: PropTypes.node,
};

export default Thead;

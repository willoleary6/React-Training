/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';

import A from './A';
import StyledButton from './StyledButton';

function HomeworkButton(props) {
  // Render an anchor tag

  let button = (
    <StyledButton disabled={props.disabled} onClick={props.onClick} >
        {Children.toArray(props.children)}
        </StyledButton>
    );



  return (
    button
  );
}

HomeworkButton.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

export default HomeworkButton;

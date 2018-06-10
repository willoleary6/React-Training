import React, { Children } from 'react';
import PropTypes from 'prop-types';
function CheckBox(props){
  return(
    <input type="checkbox" id={props.id} onChange={props.onChange} />
  );
}
CheckBox.propTypes = {
  id: PropTypes.number,
  onChange: PropTypes.func,
};
export default CheckBox;

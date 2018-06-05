import React, { Children } from 'react';
import PropTypes from 'prop-types';
function CheckBox(props){
  return(
    <input type="checkbox" id={props.row} onChange={props.onChange}/>
  );
}
CheckBox.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
};
export default CheckBox;

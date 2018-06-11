import React from 'react';
import HomeworkButton from '../../components/HomeworkButton'
import InlineDiv from '../../components/InlineDiv';
import PropTypes from "prop-types";

function AddDelete(props){
  /* This component contains the two control buttons which
   * use redux to control the tables.*/
    return (
       <div>
         <InlineDiv>
          <HomeworkButton
            disabled={props.addButtonEnabled}
            onClick ={props.addButtonClicked}>
            add Quote
          </HomeworkButton>
         </InlineDiv>
         <InlineDiv>
           <HomeworkButton
             disabled={props.deleteButtonEnabled}
             onClick ={props.deleteButtonClicked}>
             Delete Selected
           </HomeworkButton>
          </InlineDiv>
       </div>
      )
}
AddDelete.propTypes = {
  addButtonEnabled: PropTypes.bool,
  deleteButtonEnabled:PropTypes.bool,
  addButtonClicked:PropTypes.func,
  deleteButtonClicked:PropTypes.func
};
export default AddDelete;

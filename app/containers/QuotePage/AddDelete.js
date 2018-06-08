import React from 'react';
import HomeworkButton from '../../components/HomeworkButton'
import {bindActionCreators} from 'redux';
import {fetchQuote,deleteQuote} from "./actions";
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import InlineDiv from '../../components/InlineDiv';
import {makeSelectData, makeAddToggle} from "./selectors";

function AddDelete(props){
  /* This component contains the two control buttons which
   * use redux to control the tables.*/
    return (
       <div>
         <InlineDiv>
          <HomeworkButton disabled={props.addButtonToggleValue} onClick ={props.fetchQuote} >add Quote</HomeworkButton>
         </InlineDiv>
         <InlineDiv>
           <HomeworkButton onClick ={props.deleteQuote}>Delete Selected</HomeworkButton>
          </InlineDiv>
       </div>
      )
}
//getting access to data in the store
const mapStateToProps = createStructuredSelector({
  addButtonToggleValue :makeAddToggle()
});
//getting access to functions in the store
const mapDispatchToProps = dispatch =>
  bindActionCreators({fetchQuote,deleteQuote}, dispatch);
//connect this component to redux
export default connect(mapStateToProps, mapDispatchToProps)(AddDelete);

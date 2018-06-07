import React from 'react';
import HomeworkButton from '../../components/HomeworkButton'
import {bindActionCreators} from 'redux';
import {fetchQuote,deleteQuote} from "./actions";
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

function AddDelete(props){
  /* This component contains the two control buttons which
   * use redux to control the tables.*/
    return (
       <div>
         <HomeworkButton onClick ={props.fetchQuote}>add Quote</HomeworkButton>
         <HomeworkButton onClick ={props.deleteQuote}>Delete Selected</HomeworkButton>
       </div>
      )
}
//getting access to data in the store
const mapStateToProps = createStructuredSelector({
});
//getting access to functions in the store
const mapDispatchToProps = dispatch =>
  bindActionCreators({fetchQuote,deleteQuote}, dispatch);
//connect this component to redux
export default connect(mapStateToProps, mapDispatchToProps)(AddDelete);

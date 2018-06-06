import React from 'react';
import {Component} from "react";
import Button2 from '../../components/HomeworkButton'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchQuote,deleteQuote} from "./actions";


class AddDelete extends Component{
  /* This component contains the two control buttons which
   * use redux to control the tables.*/
  render() {
    return (
       <div>
         {
           /*onClick ={this.props.fetchQuote}*/
           /*onClick={this.props.deleteQuote}*/
         }
         <Button2>add Quote</Button2>
         <Button2>Delete Selected</Button2>
       </div>
      )
  }
}
export default AddDelete;
/*0//getting access to data in the store
const mapStateToProps = state => (
  {data: state.data,
    deletedData: state.deletedData
  });
//getting access to functions in the store
const mapDispatchToProps = dispatch =>
  bindActionCreators({fetchQuote,deleteQuote}, dispatch);
//connect this component to redux
export default connect(mapStateToProps, mapDispatchToProps)(AddDelete);
*/

import React from 'react';
import {Component} from "react";
import Button from './Components/Button/index.js'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchQuote,deleteQuote} from "./actions";


class AddDelete extends Component{
  /* This component contains the two control buttons which
   * use redux to control the tables.*/
  render() {
    return (
       <div>
         <div>
           <Button onClick ={this.props.fetchQuote}>add Quote</Button>
           <Button onClick={this.props.deleteQuote}>Delete Selected</Button>
         </div>
       </div>
      )
  }
}
//getting access to data in the store
const mapStateToProps = state => (
  {data: state.data,
    deletedData: state.deletedData
  });
//getting access to functions in the store
const mapDispatchToProps = dispatch =>
  bindActionCreators({fetchQuote,deleteQuote}, dispatch);
//connect this component to redux
export default connect(mapStateToProps, mapDispatchToProps)(AddDelete);


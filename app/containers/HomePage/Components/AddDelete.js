import React from 'react';
import {Component} from "react";
import Button from './Button'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchQuote,deleteQuote} from "../actions";


class AddDelete extends Component{
  /* This component contains the two control buttons which
   * use redux to control the tables.*/

  constructor(props){
    super(props);

    //binding functions
    this.fetchQuote=this.fetchQuote.bind(this);
    this.deleteQuote=this.deleteQuote.bind(this);
  }
  fetchQuote(){
    //get a new quote from the server.
    this.props.fetchQuote();
  }
  deleteQuote(){
    //move the quote from the 'Add table' to the deleted table.
    this.props.deleteQuote();
  }
  render() {

    return (
       <div>
         <div>
         <Button title ={'Add'} action = {this.fetchQuote}/>
         <Button title ={'Delete'} action = {this.deleteQuote}/>
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


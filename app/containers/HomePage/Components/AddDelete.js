import React from 'react';
import {Component} from "react";
import Button from './Button'
import {connect, Provider} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchQuote} from "../actions";

class AddDelete extends Component{
  constructor(props){
    super(props);

    //binding functions
    this.fetchQuote=this.fetchQuote.bind(this);
  }
  fetchQuote(){
    this.props.fetchQuote();
  }
  render() {

    return (
       <div>
         <Button title ={'Add'} action = {this.fetchQuote}/>
         <Button title ={'Delete'}/>
       </div>
      )
  }

}
const mapStateToProps = state => ({data: state.data});
const mapDispatchToProps = dispatch =>
  bindActionCreators({fetchQuote}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddDelete);


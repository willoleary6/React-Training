import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import  {connect} from 'react-redux'
import {fetchQuote,deleteQuote} from "../actions";
import CheckBox from './checkBox';

import './component.css';
import Table from  './Table.js';
class Post extends Component{
  constructor(props){
    super(props);
    this.state = {
      //this is hard coded for convenience could easily change to dynamic using Object.key
      headers: ['Quote','Author','Show/Movie','Delete ?'],
    }

  }




  render(){
    {
      //calling the two tables we will be displaying information on
      return(
        <div>
          <div>
            <button >Click me</button>
            <CheckBox row = {'12'}/>
          </div>
          <div className={'inlineDiv'}>
            <Table
              title="Add Table"
              headers={this.state.headers}
              tableData={this.props.data}/>
          </div>
          <div className={'inlineDiv'}>
            <Table
              title="Delete Table"
              headers={this.state.headers}
              tableData={this.props.deletedData}/>
          </div>
        </div>
      )
      }
  }
}

//getting access to the items in the store
const mapStateToProps = state => (
  {data: state.data,
    deletedData: state.deletedData
  });
//getting access to functions in saga
const mapDispatchToProps = dispatch =>
  bindActionCreators({fetchQuote,deleteQuote}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Post);


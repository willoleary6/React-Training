import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import  {connect} from 'react-redux'
import {fetchQuote,deleteQuote} from "./actions";


import './HomePage.css';
import Table from './Components/Table';
class Post extends Component{
  constructor(props){
    super(props);
    this.state = {
      //this is hard coded for convenience could easily change to dynamic using Object.key
      headers: ['Quote','Author','Show/Movie','Delete ?'],
      deleteHeaders: ['Quote','Author','Show/Movie'],
    }
    this.sortHeaders=this.sortHeaders.bind(this);
    this.sortTableData=this.sortTableData.bind(this);
  }
  sortHeaders(add){
    if(add) {
      return this.state.headers.map(function (head, i) {
        return <th key={i + '-head'}>{head}</th>
      });
    }else{
      return this.state.deleteHeaders.map(function (head, i) {
        return <th key={i + '-head'}>{head}</th>
      });
    }
  }
  sortTableData(data){
    let arr = [];
    Object.keys(data).forEach(function (index) {
      arr.push(data[index]);
    });
    return arr;
  }

  render(){
    {
      //calling the two tables we will be displaying information on
      return(
        <div>

          <div className={'inlineDiv'}>
            <Table
              title="Add Table"
              headers={this.sortHeaders(true)}
              tableData={this.sortTableData(this.props.data)}/>
          </div>
          {
            <div className={'inlineDiv'}>
              <Table
                title="Delete Table"
                headers={this.sortHeaders(false)}
                tableData={this.sortTableData(this.props.deletedData)}/>
            </div>
          }
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


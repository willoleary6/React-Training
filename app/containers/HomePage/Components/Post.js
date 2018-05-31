import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import  {connect} from 'react-redux'
import {fetchQuote} from "../actions";
import Table from  './Table.js';
class Post extends Component{
  constructor(props){
    super(props);
    this.state = {
      headers: ['Quote','Author','Show/Movie'],
      tableData:[{quote: "'I dislike being outnumbered. It makes for too much stupid in the room.'", author: "Sherlock", movie: "Sherlock"}]
    }
  }
  render(){
    return this.props.data.quote
      ?  <Table
        title ="Add Table"
        headers = {this.state.headers}
        tableData={this.props.data}
      />
      : <Table
        title ="Add Table"
        headers = {this.state.headers}
        tableData={[]}
      />;
  }
}


const mapStateToProps = state => ({data: state.data});
const mapDispatchToProps = dispatch =>
  bindActionCreators({fetchQuote}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Post);


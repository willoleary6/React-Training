import React, {Component} from 'react';

import Th from '../../components/Th';
import Table from '../../components/Table';
import InlineDiv from '../../components/InlineDiv';

class ViewTables extends Component{
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
        return <Th key={i + '-head'}>{head}</Th>
      });
    }else{
      return this.state.deleteHeaders.map(function (head, i) {
        return <Th key={i + '-head'}>{head}</Th>
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
          <InlineDiv>
            <Table
              title="Add Table"
              headers={this.sortHeaders(true)}

              />
          </InlineDiv>
          {
            <InlineDiv>
              <Table
                title="Delete Table"
                headers={this.sortHeaders(false)}
               />
            </InlineDiv>
          }
        </div>
      )
      }
  }
}
export default ViewTables;



import React from 'react';

const Table = (props) => {

 //can only work with a single row
  let tableHeader = props.headers.map(function(head,i){
    return <th key={i+'-head'}>{head}</th>
  });

  let arr = [];
  let tableRowData;
  Object.keys(props.tableData).forEach(function (index) {
    arr.push(props.tableData[index]);
  });
  tableRowData = arr.map(function(index,j){
    return( <tr key={'row'+j}>
    {
      Object.values(index).map(function (Innerindex, i) {
        return <td key={'column'+i+Innerindex}>{Innerindex}</td>;
      })
    }
    </tr>
    )
    }
  )
  return (
    <table
      style={props.style}>
      <caption>{props.title}</caption>
      {
        //print out table headers
        tableHeader
      }
      {
        tableRowData
      }
    </table>
  )
}
export default Table;

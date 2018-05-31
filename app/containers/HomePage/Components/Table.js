import React from 'react';

const Table = (props) => {


 //can only work with a single row
  let arr = [];
  Object.keys(props.tableData).forEach(function (index) {
    arr.push(props.tableData[index]);
  });
  var tableRowData = <tr>{arr.map(function (name, i) {
    return <td key={i + '-column-' + {name}}>{name}</td>;
  })
  }
  </tr>

  return (
    <table
      style={props.style}>
      <caption>{props.title}</caption>
      {
        //print out table headers
        props.headers.map(function(head,i){
          return <th key={i+'-head'}>{head}</th>
        })
      }
      {
        tableRowData

        /*//now printing the data for the main table
        props.tableData.map(function(data,i){
          //convert data too array
          arr = [];
          Object.keys(data).forEach(function(index){
            arr.push(data[index])
          });
          //format array into html and store in variable
          var tableRowData = arr.map(function(name){
            return <td>{name}</td>;
          })
          //insert variable of columns in the current row.

        })*/

      }
    </table>
  )
}
export default Table;

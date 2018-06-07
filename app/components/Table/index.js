import React, { Children } from 'react';
import PropTypes from 'prop-types';
import StyledTable from './StyledTable';
import Thead from '../Thead';
import Tbody from '../Tbody';
import Tr from '../Tr';
import Td from '../Td';
import CheckBox from '../CheckBox';

function Table(props){
  var date = new Date();
  var TableData =undefined;
  if(props.tableData!==null) {




     //this level contains the collection of rows

         //go through each row
     TableData = Object.values(props.tableData).map(function(innerIndex,j){
          return (
          <Tr key={'row' + j + new Date().getTime()}>
            {
              //go through each Column
              Object.values(innerIndex).map(function (innerInnerIndex, k) {
                return <Td key={'column' + k + new Date().getTime()}>{innerInnerIndex}</Td>;
              })
            }
            {
              <Td><CheckBox id={'row'+innerIndex+'CheckBox'+new Date().getTime()}/></Td>
            }
          </Tr>
          )
        })
   }

  return(
    <StyledTable>
        <Thead>
        {
          //print out table headers
          props.headers
        }
        </Thead>
        <Tbody>
        {
          TableData
        }
      </Tbody>
    </StyledTable>
  );
}
Table.propTypes = {
  title: PropTypes.string,
  headers: PropTypes.array,
  tableData:PropTypes.array,
};
export default Table;

/*

TableData = arr.map(function (index, i) {
       return (
         //go through each row
         Object.values(index).map(function(innerIndex,j){
          return (
          <Tr key={'row' + j + new Date().getTime()}>
            {
              //go through each Column
              Object.values(innerIndex).map(function (innerInnerIndex, k) {
                return <Td key={'column' + k + new Date().getTime()}>{innerInnerIndex}</Td>;
              })
            }
          </Tr>
          )
        })
       )
     })
<StyledTable>
      <caption>{props.title}</caption>
      {
        <Thead>
            {
              //print out table headers
              props.headers
            }
        </Thead>
      }
      {
        <Tbody>
          {
            TableData
          }
          </Tbody>
      }
    </StyledTable>
 */

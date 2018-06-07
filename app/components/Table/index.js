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
  var id = '';
  if(props.tableData!==null) {
    TableData = props.tableData;
    //go through each row
     TableData = Object.values(TableData).map(function(innerIndex,j){
       id = innerIndex.id;
       return (
           <Tr key={'row '+j+':'+innerIndex.id}>
            {
              //go through each Column
              Object.values(innerIndex).map(function (innerInnerIndex, k) {
                //if its not equal to the id don't render
                if(innerInnerIndex != id) {
                  return <Td key={'column' + k}>{innerInnerIndex}</Td>;
                }
              })
            }
            {
              <Td><CheckBox id={id.toString()}/></Td>
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

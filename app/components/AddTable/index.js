import React, { Children } from 'react';
import PropTypes from 'prop-types';
import StyledTable from './StyledTable';
import Thead from '../Thead';
import Tbody from '../Tbody';
import Tr from '../Tr';
import Td from '../Td';
import CheckBox from '../CheckBox';

function AddTable(props){
  var TableData =undefined;
  var id = '';
  if(props.tableData!=[] && props.tableData!=undefined) {
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
                  return <Td key={'row:' +j+' column: '+k+' id: '+id}>{innerInnerIndex}</Td>;
                }
              })
            }
            {
              <Td><CheckBox id={id.toString()} onChange={() => props.onChecked(id)} /></Td>
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
AddTable.propTypes = {
  title: PropTypes.string,
  headers: PropTypes.array,
  tableData:PropTypes.array,
  onChecked: PropTypes.func,

};
export default AddTable;




import React, { Children } from 'react';
import PropTypes from 'prop-types';
import StyledTable from './StyledTable';
import Thead from '../Thead';
import Tbody from '../Tbody';


function Table(props){
  return(
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
            props.tableData
          }
        </Tbody>
      }
    </StyledTable>
  );
}
Table.propTypes = {
  title: PropTypes.string,
  headers: PropTypes.array,
  tableData:PropTypes.array,
};
export default Table;

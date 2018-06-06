import React, { Children } from 'react';
import PropTypes from 'prop-types';
import StyledTable from './StyledTable';
import Tr from '../Tr'
function Table(props){
  return(
    <StyledTable>
      <caption>{props.title}</caption>
      {
        <thead>
          <Tr>
            {
              //print out table headers
              props.headers
            }
          </Tr>
        </thead>
      }
      {
        <tbody>
          {
            props.tableData
          }
        </tbody>
      }
    </StyledTable>
  );
}
Table.propTypes = {
  title: PropTypes.string,
  headers: PropTypes.element,
  tableData:PropTypes.element,
};
export default Table;

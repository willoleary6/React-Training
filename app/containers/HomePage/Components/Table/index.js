import React from 'react';
import PropTypes from 'prop-types';
import StyledTable from './StyledTable';
import '../component.css';


function Table(props){


  return(
      <StyledTable>
        <caption>{props.title}</caption>
        {
          <thead>
            <tr>
              {
                //print out table headers
                props.headers
              }
            </tr>
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
  headers: PropTypes.array,
  tableData:PropTypes.array,
};
export default Table;

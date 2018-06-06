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
  var timestamp = date.getTime();
  var TableData =undefined;
  //if(props.tableData) {
   /* let arr = [
      {quote: "“You want weapons? We’re in a library! Books! The best weapons in the world!”", author: "The Doctor", movie: "Doctor Who"},
  {quote: "'Engineers like to solve problems. If there are no… available, they will create their own problems.'", author: "", movie: "Scott Adams"},
  {quote: "", author: "'You have to let it all go", movie: "The Matrix"}];*/
   if(props.tableData) {
     let arr = [];
     Object.keys(props.tableData).forEach(function (index) {
       arr.push(props.tableData);
     });
     TableData = arr.map(function (index, j) {
       return (
         <Tr key={'row' + j + new Date().getTime()}>
           {
             Object.values(index).map(function (Innerindex, i) {
               return <Td key={'column' + i + new Date().getTime()}>{Innerindex}</Td>;
             })
           }
           <Td>
             <CheckBox key={'Row ' + j + ' Deleter'}/>
           </Td>
         </Tr>
       )
     })
     console.log(TableData);
   }
    /*
    arr.map(function (index,j){
      return(
        <Tr key={'row' + j + new Date().getTime()}>
          {
            Object.values(index).map(function (Innerindex, i) {
              return <Td key={'column' + i + new Date().getTime()}>{Innerindex}</Td>;
            })
          }
        </Tr>
      )
    })*/
    /*TableData = arr.map(function (index, j) {
      return (
        <Tr key={'row' + j}>
          {
            console.log(index)
            /*Object.values(index).map(function (Innerindex, i) {
              return <Td key={'column' + i + Innerindex}>{Innerindex}</Td>;
            })*/
    /*      }
          {
            <Td>
              <CheckBox key={'Row ' + j + ' Deleter'}/>
            </Td>
          }
        </Tr>
      )
    })*/
  //}
  //console.log(TableData);
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

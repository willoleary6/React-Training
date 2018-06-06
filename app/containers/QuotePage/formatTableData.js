import React from 'react';
import CheckBox from '../../components/CheckBox';
import Tr from '../../components/Tr';
import Td from '../../components/Td';
export default function formatTableData(dataStore,add){
  let arr = [];
  Object.keys(dataStore).forEach(function (index) {
    arr.push(dataStore[index]);
  });
  if(add){
    return arr.map(function (index, j) {
        return (
          <Tr key={'row' + j}>
            {
              Object.values(index).map(function (Innerindex, i) {
                return <Td key={'column' + i + Innerindex}>{Innerindex}</Td>;
              })
            }
            {
              <Td>
                <CheckBox key={'Row '+j+' Deleter'}/>
              </Td>
            }
          </Tr>
        )
      }
    )
  }else{
    return arr.map(function (index, j) {
        return (
          <Tr key={'row' + j}>
            {
              Object.values(index).map(function (Innerindex, i) {
                return <Td key={'column' + i + Innerindex}>{Innerindex}</Td>;
              })
            }
          </Tr>
        )
      }
    )
  }
}




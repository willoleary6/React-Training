import React from 'react';
import CheckBox from '../Components/CheckBox';

export default function formatTableData(dataStore,add){
  let arr = [];
  Object.keys(dataStore).forEach(function (index) {
    arr.push(dataStore[index]);
  });

  if(add){
    return arr.map(function (index, j) {
        return (
          <tr key={'row' + j}>
            {
              Object.values(index).map(function (Innerindex, i) {
                return <td key={'column' + i + Innerindex}>{Innerindex}</td>;
              })
            }
            {
              <td>
                <CheckBox key={'Row '+j+' Deleter'}/>
              </td>
            }
          </tr>
        )
      }
    )
  }else{
    return arr.map(function (index, j) {
        return (
          <tr key={'row' + j}>
            {
              Object.values(index).map(function (Innerindex, i) {
                return <td key={'column' + i + Innerindex}>{Innerindex}</td>;
              })
            }
          </tr>
        )
      }
    )
  }
}




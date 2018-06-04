import React from 'react';
import CheckBox from '../Components/CheckBox';



export default function formatTableData(dataStore,add,markedForDelete){
  let arr = [];
  Object.keys(dataStore).forEach(function (index) {
    arr.push(dataStore[index]);
  });

  if(add) {
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
                <CheckBox onChange={() =>markForDelete(j,markedForDelete)}/>
              </td>
            }
          </tr>
        )
      }
    )
  }else {
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
function markForDelete(index,markedForDelete){
  while((index+1) > markedForDelete.length){
    markedForDelete.push(false);
  }
  if(markedForDelete[index] == true){
    markedForDelete[index] = false;
  }else{
    markedForDelete[index] = true;
  }
}



export default function addRowToSelected(currentID,selectedRows){

  if(selectedRows.length < 1){
    return [parseInt(currentID)];
  }else if(!selectedRows.includes(currentID)){
    selectedRows.push(parseInt(currentID));
    return selectedRows;
  }else{
    selectedRows.splice(selectedRows.indexOf(parseInt(currentID)),1);
    return selectedRows;
  }
}

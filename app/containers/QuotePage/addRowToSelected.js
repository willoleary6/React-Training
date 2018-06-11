export default function addRowToSelected(currentID,selectedRows){

  if(selectedRows.length < 1){
    return [currentID];
  }else if(!selectedRows.includes(currentID)){
    selectedRows.push(currentID);
    return selectedRows;
  }else{
    selectedRows.splice(selectedRows.indexOf(currentID),1);
    return selectedRows;
  }
}

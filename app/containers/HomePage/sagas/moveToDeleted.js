export default function moveToDeleted(markedForDelete,dataStore,deletedDataStore){
  var offset = 0;
  for(var i = 0; i < markedForDelete.length; i++) {
    if (markedForDelete[i]) {
      deletedDataStore.push(dataStore[i-offset]);
      dataStore.splice(i-offset, 1);
      offset++;
      markedForDelete[i] = false;
    }
  }
  markedForDelete = [];


}

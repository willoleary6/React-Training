import uncheckAll from './uncheckAll';
export default function moveToDeleted(dataStore,deletedDataStore){
  var offset = 0;
  var w = document.getElementsByTagName('input');
  for(var i = 0; i < w.length; i++){
    if(w[i].type=='checkbox' && w[i].checked){
      deletedDataStore.push(dataStore[i-offset]);
      dataStore.splice(i-offset, 1);
      offset++;
    }
  }
  uncheckAll();

}

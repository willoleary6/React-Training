export default function UncheckAll(){
  var w = document.getElementsByTagName('input');
  for(var i = 0; i < w.length; i++){
    if(w[i].type=='checkbox'){
      w[i].checked = false;
    }
  }
}


function calc() {
  var qty = parseInt(document.querySelector("#qty").value);
  var val1 = qty*120;
  var val2 = qty*300;
  var result;
  var detectClass;

  document.querySelector("#val1").innerHTML = val1,
  document.querySelector("#val2").innerHTML = val2;

  if(qty ==1){
    var div = document.querySelector('item');
    var detectClass = div.classList.contains('values');
    div.classList.add('changed')
  } else {
    div.classList.add('placeholder')
  }

}
function toggleClass(el) {
  var kids = document.getElementById("item").children;

  if (qty == 1) {
    var kids = document.getElementById("item").children;
    kids.classname = "placeholder";
  } else {
    kids.classname = "changed";
  }
}
// if (var qty > 1) {
//   var document.getElementById(item).children:
// }

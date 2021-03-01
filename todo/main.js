/*----------------------------------Trash Button Append Start-------------------------------------------*/
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
 
  span.className = "close";
  span.innerHTML = '<i class="fa fa-trash"></i>'
  myNodelist[i].appendChild(span);
}
/*----------------------------------Trash Button Append End-------------------------------------------*/


/*---------------------------------TrashButton Functionality Start-------------------------------------*/

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
/*---------------------------------TrashButton Functionality End-------------------------------------*/
/*---------------------------------Check When enter is pressed Start---------------------------------*/

var newList = document.querySelector('#InputText')
newList.addEventListener('keypress', function (e) {

  if (13 === e.keyCode) {
    let newItem = document.getElementById('InputText').value
    if (newItem) {
      newElement(newItem)
      document.getElementById('item').value = ''
    }
  }
})
/*---------------------------------Check When enter is pressed End---------------------------------*/


/*------------------------------------Addition of new Item start---------------------------------------*/
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("InputText").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("InputText").value = "";

  var span = document.createElement("SPAN");

  span.className = "close";

  span.innerHTML = '<i class="fa fa-trash"></i>'
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

/*------------------------------------Addition of new Item end---------------------------------------*/
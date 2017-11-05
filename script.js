function checkOnclickEvent (param) {
	console.log(param);
}


var listElem = document.getElementById("addElem");
var list = document.getElementById("list");


listElem.addEventListener("click", function(e) {
	var element = document.createElement("li");
	var item = document.getElementsByTagName("li");

	element.innerHTML = "Item " + item.length;
	list.appendChild(element);
});

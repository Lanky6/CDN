function show(id){
var divs = document.getElementsByName("box")
for (var i = 0 ; i < divs.length ; i++){
if (divs[i].id == "b"+id ){
divs[i].style.display=""
}else{
divs[i].style.display="none"
}
}
}

function show(id){
var divs = document.getElementsByName("nav")
for (var i = 0 ; i < divs.length ; i++){
if (divs[i].id == "n"+id ){
divs[i].style.display=""
}else{
divs[i].style.display="none"
}
}
}

function show(id){
var divs = document.getElementsByName("menu")
for (var i = 0 ; i < divs.length ; i++){
if (divs[i].id == "m"+id ){
divs[i].style.display=""
}else{
divs[i].style.display="none"
}
}
}
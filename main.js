function loadjson(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
  if(xhr.readyState ===4 && xhr.status == "200") {
  callback(xhr.responseText);
   }
 }
 xhr.send();
}
 // function calling
 loadjson("data.json",function (text){
   let data=JSON.parse(text);
   console.log(data);
   basics(data.left);
 })
 // for calling main div class
// var main=document.queryselector('.main');
// for calling main div
var main=document.getElementById('main');
// element creation
var left=document.createElement("div");
// add class name to element
left.classList.add("left");
// add id to element
left.setAttribute("id","left");
//adding text to div
left.textContent="Profile Details:"
left.appendChild(document.createElement("HR"));
// appending to main div
main.appendChild(left);


 function basics(leftside){
var image=document.createElement("img");
image.src=leftside.photo;
left.appendChild(image);
var name=document.createElement("h1");
name.textContent=leftside.name;
left.appendChild(name);
var email=document.createElement("h3");
email.textContent=leftside.email;
left.appendChild(email);
var phno=document.createElement("h3");
phno.textContent=leftside.phno;
left.appendChild(phno);
console.log(left);
 }






 

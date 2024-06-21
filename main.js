var language =['c++','java','c'];
var data="";
for(var i=0;i<3;i++){
data+=`<li>`+language[i]+`</li>`;
}
document.querySelector("ul").innerHTML =data;
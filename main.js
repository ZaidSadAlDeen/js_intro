var largerSize=document.querySelector(".bigger");
var smallerSize=document.querySelector(".smaller");
var para = document.querySelector(".size");
function largSize(){
 
 para.classList.remove("small");
 para.classList.add("big");
}
function smallSize(){
    para.classList.remove("big");
    para.classList.add("small");
}

smallerSize.onclick = smallSize;
largerSize.onclick = largSize;
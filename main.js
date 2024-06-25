var convert = document.querySelector(".exchangeForm");
var result;
convert.onsubmit =function(e){
    var type = document.querySelector(".exchange").value;
    e.preventDefault();
    var amount = e.target.elements;
    var type = amount[1].value;
    result =amount[0].value;
    if(type=="dollar"){
        result=result*3.5;
    }else if(type=="dinar"){
        result=result*5;
    }
   document.querySelector(".result").textContent=result;
}



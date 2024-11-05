
// function
var counter = 0;

function incNumber(){
    counter++;
    document.getElementById("demo").innerHTML = counter;
}

function decNumber(){
    counter--;
    document.getElementById("demo").innerHTML = counter;
}

// if condition

function amountDollar(){
    var dollar = document.getElementById("dollar").value;
    var result = document.getElementById("result");

    if(isNaN(dollar)){
        result.innerHTML = "Enter Number Not Text";
        result.style.color = "red";
        return false
    }else if (dollar<0){
        result.innerHTML = "Enter Postive Numder";
        result.style.color = "red";
        return false
    }else if (dollar==0){
        result.innerHTML = "Enter Number Rather Than Zero";
        result.style.color = "red";
        return false
    }else{
         result.innerHTML = dollar *50;
         result.style.color = "red";
         return false
        } 
    }
  
 
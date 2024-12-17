const display = document.getElementById("bar")
function calculate(input){
   display.value += input;
}
function clearOn(){
    display.value = "";
}

function result(){
    try {
        display.value = eval(display.value);
    } 
    catch (error) {
       display.value = "error";
    }
   
}



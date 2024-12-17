const inputElement = document.getElementById("myInput");
const listContiner  = document.getElementById("list-continer");
function display(){
    if (inputElement.value === ""){
        alert('write some thing');
    }else{
      let li =  document.createElement("li");
      li.innerHTML= inputElement.value;
     listContiner.appendChild(li);

         let butt = document.createElement('button');
        butt.innerHTML = "<i class='bx bxs-x-circle'></i>";
        li.appendChild(butt);

        
    }
    inputElement.value ="";
   
}

listContiner.addEventListener("click", function(e){
    if(e.target.tagName === "BUTT"){
        
    }
    
});

function createNote(){
 const inputBox = document.createElement('p');
 const img = document.createElement('img')
 inputBox.className = 'input-box'
 inputBox.setAttribute("contenteditable", "true");
 img.src = "images/delete.png";
 img. className = "delete-img"
  const noteContiner = document.querySelector('.note-container');
  noteContiner.appendChild(inputBox).appendChild(img);

  noteContiner.addEventListener("click", function(e){
   if(e.target.tagName === 'IMG'){
      e.target.parentElement.remove();
   }
  })

};


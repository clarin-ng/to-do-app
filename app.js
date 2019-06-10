function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    //get the text
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement('li');

    //create a new input
    let checkbox = document.createElement('input');

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    //delete
    let deleteBTN =document.createElement('button');
    deleteBTN.textContent="Delete";
    deleteBTN.addEventListener("click", function(event){
    toDoList.removeChild(this.parentElement);
    })
    //set the title
    newLi.textContent = title;

    //atach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach delete button
    newLi.appendChild(deleteBTN);
    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value ="";
  });
};
//completing the event handler
window.onload = function(){
  onReady();
};

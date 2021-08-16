import { addTodoItem,removeAllItems , doneTodoItem, unDoneTodoItem, gettodoLists, removeTodoItem , sortByDate} from './modules/todo.js';
import {handleDate} from './modules/date.js';


document.querySelector('form').addEventListener('submit', handleLists);
document.querySelector('ul').addEventListener('click', handleCheckingOrRemoving);
document.getElementById('upcoming').addEventListener('click', handleupcoming);
document.getElementById('sortDate').addEventListener('click', handlesortDate);
document.getElementById('clear').addEventListener('click', handleClear);
document.getElementById('dueDate').addEventListener('click', handledueDate);
document.getElementById('showList').addEventListener('click', handleshowList);


function handleLists(event){
    event.preventDefault();
    let SetDate = document.querySelector('#SetDate').value;
    let todoText = document.querySelector('#todoText').value;
 
    if (SetDate != '' && todoText != '' )
    addTodoItem(SetDate,todoText);
    resetTodo();
        showAll();
}
function handlesortDate(){
    let sortedArray = sortByDate();
    resetTodo();
    showAllDateSort(sortedArray);

}

function handledueDate(){
    resetTodo();
    titleLoader("dueDate Tasks");
    let todayDateTemp = handleDate('-');
    let todayDate=todayDateTemp.split("-");
    let object ={};

    let data = gettodoLists();
    //console.log(data);
    for (let key in data){

        let year=parseInt(data[key].dueDate[0]);
        let month=parseInt(data[key].dueDate[1]);
        let day=parseInt(data[key].dueDate[2]);

        let yy=parseInt(todayDate[0]);
        let mm=parseInt(todayDate[1]);
        let dd=parseInt(todayDate[2]);
        let tempObject=object;

    if (data[key].isComplete == false){
    if(year < yy){

        FilterDate(data[key]);

       
    }
    else if (year == yy && month < mm) {

        FilterDate(data[key]);
       
    }
    else if (year == yy && month == mm && day < dd){

        FilterDate(data[key]);
       
    }
}
}

}

function handleshowList(){
    resetTodo();
    showAll();
}


function FilterDate(dataLists){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `
<div class="input-group mb-3">
<div name = "dueDate" id="${dataLists.todoItem}"  class="w-100 p-2" style="background-color: #eee;"><b>Date:</b> ${dataLists.dueDate[0]} - ${dataLists.dueDate[1]} - ${dataLists.dueDate[2]}</div>
<div name = "todoItem" id="${dataLists.todoItem}" class="form-control" value ="${dataLists.todoItem}"><b>Task:</b> ${dataLists.todoItem}</div>
<button name="checkButton" id="${dataLists.todoItem}" class="btn btn-outline-secondary" type="done" >Done</button>
<button name="unDoneButton" id="${dataLists.todoItem}" class="btn btn-outline-secondary" type="unDone" >Undone</button>
<button name="deleteButton" id="${dataLists.todoItem}" class="btn btn-outline-secondary" type="delete" >Delete</button>
</div>`;
li.classList.add('todo-list-item');
ul.appendChild(li);
}

function handleupcoming(){
    
    resetTodo();
    titleLoader("upcoming Tasks (7 days to complete)");
    let todayDateTemp = handleDate('-');
    let todayDate=todayDateTemp.split("-");
    let object ={};


    let data = gettodoLists();
    for (let key in data){

        let year=parseInt(data[key].dueDate[0]);
        let month=parseInt(data[key].dueDate[1]);
        let day=parseInt(data[key].dueDate[2]);

        let yy=parseInt(todayDate[0]);
        let mm=parseInt(todayDate[1]);
        let dd=parseInt(todayDate[2]);
        let tempObject=object;

    if (data[key].isComplete == false){
  if (year == yy && month == mm && day < dd+7){
        FilterDate(data[key]);
       
    }
}
}
}


function Notify(){
    
    
    let todayDateTemp = handleDate('-');
    let todayDate=todayDateTemp.split("-");
    let object ={};

    let data = gettodoLists();

    for (let key in data){

        let year=parseInt(data[key].dueDate[0]);
        let month=parseInt(data[key].dueDate[1]);
        let day=parseInt(data[key].dueDate[2]);
        let yy=parseInt(todayDate[0]);
        let mm=parseInt(todayDate[1]);
        let dd=parseInt(todayDate[2]);
        let tempObject=object;
    if (data[key].isComplete == false){
        
  if (year == yy && month == mm && day == dd+1){
        
        window.alert('You have 1 day to complete the task '+ data[key].todoItem);
       
    }
}
}
}

Notify();



function showAll(){
    titleLoader("All Tasks");
    
    let todoLists=gettodoLists();

    for (let key in todoLists) {
     if (todoLists.hasOwnProperty(key)) {
         let todoTask=todoLists[key].todoItem;
     if (todoLists[key].isComplete == true){
        let test = todoLists[key].todoItem;
        todoTask = "<strike>" + test + "</strike>";

     }
     else{
         todoTask=todoLists[key].todoItem;
     }    
         let ul = document.querySelector('ul');
         let li = document.createElement('li');
        
         li.innerHTML = `
     <div class="input-group mb-3">
     <div name = "dueDate" id="${todoLists[key].todoItem}"  class="w-100 p-2" style="background-color: #eee;"><b>Date:</b> ${todoLists[key].dueDate[0]} - ${todoLists[key].dueDate[1]} - ${todoLists[key].dueDate[2]}</div>
     <div name = "todoItem" id="${todoLists[key].todoItem}" class="form-control" value ="${todoLists[key].todoItem}"><b>Task:</b> ${todoTask}</div>
     <button name="checkButton" id="${todoLists[key].todoItem}" class="btn btn-outline-secondary" type="done" >Done</button>
     <button name="unDoneButton" id="${todoLists[key].todoItem}" class="btn btn-outline-secondary" type="unDone" >Undone</button>
     <button name="deleteButton" id="${todoLists[key].todoItem}" class="btn btn-outline-secondary" type="delete" >Delete</button>
     </div>`;
     li.classList.add('todo-list-item');
     ul.appendChild(li);   
     }
 }

 
}

showAll();

function showAllDateSort(){
    titleLoader("Sorted by date");
    
    let todoLists=sortByDate();

    for (let key in todoLists) {

     if (todoLists.hasOwnProperty(key)) {
         let todoTask=todoLists[key][1].todoItem;

     if (todoLists[key][1].isComplete == true){
        let test = todoLists[key][1].todoItem;
        todoTask = "<strike>" + test + "</strike>";

     }
     else{
         todoTask=todoLists[key][1].todoItem;
     }    
         let ul = document.querySelector('ul');
         let li = document.createElement('li');
        
         li.innerHTML = `
     <div class="input-group mb-3">
     <div name = "dueDate" id="${todoLists[key][1].todoItem}"  class="w-100 p-2" style="background-color: #eee;"><b>Date:</b> ${todoLists[key][1].dueDate[0]} - ${todoLists[key][1].dueDate[1]} - ${todoLists[key][1].dueDate[2]}</div>
     <div name = "todoItem" id="${todoLists[key][1].todoItem}" class="form-control" value ="${todoLists[key][1].todoItem}"><b>Task:</b> ${todoTask}</div>
     <button name="checkButton" id="${todoLists[key][1].todoItem}" class="btn btn-outline-secondary" type="done" >Done</button>
     <button name="unDoneButton" id="${todoLists[key][1].todoItem}" class="btn btn-outline-secondary" type="unDone" >Undone</button>
     <button name="deleteButton" id="${todoLists[key][1].todoItem}" class="btn btn-outline-secondary" type="delete" >Delete</button>
     </div>`;
     li.classList.add('todo-list-item');
     ul.appendChild(li);   
     }
 }

}


function resetTodo() {
    let ul = document.querySelector('ul');

    ul.innerHTML='';

}



//clear all
function handleClear(event) {
    event.preventDefault();

    removeAllItems();
    document.querySelector('ul').innerHTML = '';
}

function handleCheckingOrRemoving(event){
    event.preventDefault();

    if (event.target.name == 'checkButton'){

    doneTodoItem(event.target.id);
    resetTodo();
    showAll();
    }
    if (event.target.name == 'unDoneButton'){
        unDoneTodoItem(event.target.id);
        resetTodo();
        showAll();
        }

    if (event.target.name == 'deleteButton'){
        removeTodoItem(event.target.id);
        resetTodo();
        showAll();
    }
    
}

function titleLoader(title){
    titleReset();
    let tag = document.createElement("div");
   let text = document.createTextNode(title);
   
   tag.appendChild(text);
   let element = document.getElementById("titleHere");
 
   let child = element.appendChild(tag);
   child.setAttribute("id", "titled");
   
   
}

function titleReset(){
    
   let element = document.getElementById("titled"); 
  element.remove();
   
}

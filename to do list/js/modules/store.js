export const addItem = (item) => {
    let todoLists = window.localStorage.getItem('todos');
    if(todoLists) {
        todoLists = JSON.parse(todoLists);
    } else {
        todoLists = [];
    }
    
    todoLists.push(item);
    

    window.localStorage.setItem('todos', JSON.stringify(todoLists));
}
export const getItems = () => {
    let todoLists = window.localStorage.getItem('todos');
    if(todoLists) {
        todoLists = JSON.parse(todoLists);
    } else {
        todoLists = [];
    }
    return todoLists;
}


export const removeItemById = (name) => {
    let todoLists = window.localStorage.getItem('todos');

    if(todoLists) {
        todoLists = JSON.parse(todoLists);
    } else {
        todoLists = [];
    }
    
    let todoListsByNameIndex = todoLists.findIndex((item) => {
        return item.todoItem.toLowerCase() == name.toLowerCase();
    })
    if(todoListsByNameIndex > -1) {
        todoLists.splice(todoListsByNameIndex, 1)
    }

    window.localStorage.setItem('todos', JSON.stringify(todoLists));
}

export const doneItemById = (name) => {
    let todoLists = window.localStorage.getItem('todos');
    if(todoLists) {
        todoLists = JSON.parse(todoLists);
    } else {
        todoLists = [];
    }
    let todoListsByNameIndex = todoLists.findIndex((item) => {
        return item.todoItem.toLowerCase() == name.toLowerCase();
    })

    if(todoListsByNameIndex > -1) {
     todoLists[todoListsByNameIndex].isComplete=true;
    }
    window.localStorage.setItem('todos', JSON.stringify(todoLists));


}

export const unDoneItemById = (name) => {
    let todoLists = window.localStorage.getItem('todos');
    if(todoLists) {
        todoLists = JSON.parse(todoLists);
    } else {
        todoLists = [];
    }
    let todoListsByNameIndex = todoLists.findIndex((item) => {
        return item.todoItem.toLowerCase() == name.toLowerCase();
    })
    if(todoListsByNameIndex > -1) {
     todoLists[todoListsByNameIndex].isComplete=false;
    }
    window.localStorage.setItem('todos', JSON.stringify(todoLists));


}


export const removeAll = () => {
   localStorage.removeItem('todos');
}
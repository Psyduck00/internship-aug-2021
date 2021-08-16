import { addItem, getItems, removeItemById, removeAll ,doneItemById, unDoneItemById} from './store.js'


export const addTodoItem = (SetDate,todoItem) => {
    if(!SetDate || !todoItem) {
        throw new Error('Field Empty')
    }

    const todoLists = getItems();

    for(let item of todoLists) {
        if(item.todoItem.toLowerCase() === todoItem.toLowerCase()) {
            throw new Error('Item already exists')
        }
    }
    let SetDate2 = SetDate.split("-")

    let newTodoItem = {
        id: Math.random(),
        todoItem: todoItem,
        dueDate: SetDate2,
        isComplete: false,
        completedDate: null
    }
    addItem(newTodoItem);
    return newTodoItem;
}

export const gettodoLists = () => {
    return getItems();
}

export const removeTodoItem = (todoItem) => {
    removeItemById(todoItem);
}

export const doneTodoItem = (todoItem) => {
    doneItemById(todoItem);
}

export const unDoneTodoItem = (todoItem) => {
    unDoneItemById(todoItem);
}

export const removeAllItems = () => {
    removeAll();
}   

export const sortByDate = () => {
    let todoLists = getItems();
    let SortedList = [];
for (let key in todoLists) {
    SortedList.push([key, todoLists[key]]);
}

SortedList.sort(function(a, b) {

    return new Date(a[1].dueDate) - new Date(b[1].dueDate);
});
return SortedList;
}
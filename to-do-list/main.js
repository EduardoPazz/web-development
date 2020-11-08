/* Handling Data Scripts */
    /* Creating the Class Todo */
class Todo {
    constructor(todo, checked=false) {
        this.todo = todo,
        this.checked = checked // this will be necessary to store if the to-do is checked or not
    }
}


/* getting previous to-dos and updating it in the meantime */

const UList = document.querySelector('div#list ul');

let todos = JSON.parse(localStorage.getItem('to-dos')) || []; // fetch from the localStorage the previous to-dos. If nothing stands there, a empty array is created

updateTodos(todos); // it does a first call from the previous to-dos stored

function updateTodos(todos) { /* beyond creating a list item, this function also include a way of excluding the respective item and a checkbox to it*/
    UList.textContent = ''; // empty the list

    for (let todo of todos) { // fetch all the todos 
        let checkBox = document.createElement('div');
        let listItem = document.createElement('li');
        let excludeButton = document.createElement('button');
        

        checkBox.setAttribute('id', 'checkbox'); // this is necessary for the CSS to identify it

        listItem.textContent = todo.todo; // it applies the to-do text to a <li> node
        excludeButton.textContent = '🗑️';

        if (todo.checked === true) { // the default behavior is todo.checked === false, but if it was checked before, this conditional keeps that information and the style correspondent
            checkBox.setAttribute('class', 'checked');
            listItem.setAttribute('class', 'checked')
        }

        checkBox.addEventListener('click', evt => { // this callback will toggle the todo.checked and class="checked" by the click of the user
            if (todo.checked === false) {
                todo.checked = true;

                evt.target.setAttribute('class', 'checked');
                listItem.setAttribute('class', 'checked');


                localStorage.setItem('to-dos', JSON.stringify(todos)) // it's necessary to store that change right here, because whether the page is reloaded, the checked information would be lost
            } else if (todo.checked === true) {
                todo.checked = false;
                
                evt.target.removeAttribute('class');
                listItem.removeAttribute('class');

                localStorage.setItem('to-dos', JSON.stringify(todos)) // it's necessary to store that change right here, because whether the page is reloaded, the checked information would be lost
            }
        })

        excludeButton.addEventListener('click', () => excludingTodo(todo));

        UList.appendChild(listItem);
        listItem.insertAdjacentElement('beforebegin', checkBox); // positionate the excludeButton right after de listItem
        listItem.insertAdjacentElement('afterend', excludeButton); // positionate the excludeButton right after de listItem
    }
}


/* testing writeInput and calling the storing*/

const mark = document.querySelector('form button');

mark.addEventListener('click', () => testing(writeInput.value))

function testing(todo) {
    if (todo.length === 0) {
        alert('Write something')
    } else {
        storingTodo(todo);
        writeInput.focus()
    }
}


/* storing to-dos */

function storingTodo(todo) {
    const todoObj = new Todo(todo);

    todos.push(todoObj);

    updateTodos(todos);

    localStorage.setItem('to-dos', JSON.stringify(todos))
}


/* Excluding to-dos */

function excludingTodo(todoObj) {
    const position = todos.indexOf(todoObj)

    todos.splice(position, 1); // exclude the object from the original array

    updateTodos(todos);

    localStorage.setItem('to-dos', JSON.stringify(todos)) // this brand new setItem overwrite the previous one
}


/* User-Interface Scripts */

/* Toggling form */

const form = document.querySelector('form');
const writeButton = document.querySelector('button#write');
const writeInput = document.querySelector('input[type=text]');


writeButton.addEventListener('click', () => {
    form.classList.toggle('hide');

    if (form.classList.value !== 'hide') {
        writeButton.textContent = 'Cancel';
        setTimeout(() => writeInput.focus(), 501) /* waits the transition ends to call the focus() method */
    } else {
        writeButton.textContent = 'Write new to-do';
    }
})


/* Toggling list */

const list = document.querySelector('div#list');
const showHide = document.querySelector('button#show-hide');

showHide.addEventListener('click', () => {
    list.classList.toggle('hide');

    list.classList.value === 'hide' ? showHide.textContent = 'Show list' : showHide.textContent = 'Hide List'
})
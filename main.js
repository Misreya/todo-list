const d = document;

const todoForm = d.querySelector('#todo-form');
const todoInput = d.querySelector('#todo-input');
const todoList = d.querySelector('#todo-list');

todoForm.addEventListener('submit', function(event){
    event.preventDefault();
    const newTask = todoInput.value;

    if  (newTask === '') {
        return;
    }

      // Additional code to add the task will go here

    todoInput.value = '';

    addTask(newTask);
});

function addTask(task) {
    const listItem = d.createElement('li');
    listItem.classList.add('task');

    const div1 = d.createElement('div');
    listItem.appendChild(div1);

    const checkbox = d.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    div1.appendChild(checkbox);

    const taskText = d.createElement('span');
    taskText.textContent = task;
    div1.appendChild(taskText);

    const div2 = d.createElement('div');
    listItem.appendChild(div2);

    // const editButton = d.createElement('button');
    // editButton.textContent = 'Edit';
    // editButton.classList.add('pointer');
    // div2.appendChild(editButton);

    const editButton = d.createElement('button');
    editButton.innerHTML = `<img src='icons/edit.png'>`;
    editButton.classList.add('pointer');
    div2.appendChild(editButton);

    // const deleteButton = d.createElement('button');
    // deleteButton.textContent = 'Delete';
    // deleteButton.classList.add('pointer');
    // div2.appendChild(deleteButton);

    const deleteButton = d.createElement('button');
    deleteButton.innerHTML = `<img src='icons/delete.png'>`;
    deleteButton.classList.add('pointer');
    div2.appendChild(deleteButton);

    todoList.appendChild(listItem);
    
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            taskText.style.textDecoration = 'line-through';
            taskText.style.color = '#B0909D';
        } else {
            taskText.style.textDecoration = 'none';
            taskText.style.color = '#3B051E';
        }
    });

    deleteButton.addEventListener('click', function() {
        todoList.removeChild(listItem);
    });

    editButton.addEventListener('click', function() {
        const isEditing = editButton.classList.contains('editing');
        editButton.classList.toggle('editing');

        if (isEditing) {
            editButton.innerHTML = `<img src='/icons/edit.png'>`;
            taskText.contentEditable = 'false';
            
        } else {
            editButton.innerHTML = `<img src='icons/check.png'>`;
            taskText.contentEditable = 'true';
        }
    });


}

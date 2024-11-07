const todos = [];

function renderTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.className = `todo-item ${todo.completed ? 'completed' : ''}`;

        const todoText = document.createElement('span');
        todoText.textContent = todo.text;
        todoText.addEventListener('click', () => toggleComplete(index));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () => deleteTodo(index));

        todoItem.appendChild(todoText);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
    });
}

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const text = todoInput.value.trim();

    if (text !== '') {
        todos.push({ text, completed: false });
        todoInput.value = '';
        renderTodos();
    }
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}

document.getElementById('add-btn').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    if (todoInput.value.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${todoInput.value}
            <button class="delete-btn">Delete</button>
        `;
        
        todoList.appendChild(listItem);
        todoInput.value = '';  // Clear input field

        // Add event listener to delete button
        listItem.querySelector('.delete-btn').addEventListener('click', function() {
            listItem.remove();
        });
    }
});

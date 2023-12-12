function addTask(event) {
    event.preventDefault();

    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== "") {
        const taskText = document.createTextNode(taskInput.value);
        const removeButton = createRemoveButton();

        const listItem = document.createElement('li');
        listItem.appendChild(taskText);
        listItem.appendChild(removeButton);

        taskList.appendChild(listItem);

        taskInput.value = "";
    }
}

function createRemoveButton() {
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    removeButton.onclick = function () {
        this.parentNode.remove();
    };
    return removeButton;
}

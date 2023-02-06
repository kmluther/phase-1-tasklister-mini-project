document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('create-task-form');
  todoForm.addEventListener('submit', handleSubmit)
});

function handleSubmit(event){
  event.preventDefault();

  const todoList = document.getElementById('tasks');
  const todo = document.createElement('li');
  todo.textContent = event.target['new-task-description'].value;
  todoList.append(todo);
}
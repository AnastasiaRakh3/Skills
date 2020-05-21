let list = document.querySelector('.todo-list');
let form = document.querySelector('.todo-form');
let field = document.querySelector('.input-field');
let priority = document.querySelector('.button-priority');

priority.onclick = function () {
  priority.classList.toggle('important');
  if (priority.classList.contains('important')) {
    priority.textContent = 'Очень важно';
  } else {
    priority.textContent = 'Не очень важно';
    
  }
};
form.onsubmit = function (evt) {
  evt.preventDefault();
  let li = document.createElement('li');
  
  if (priority.classList.contains('important')) {
    li.classList.add('item');
    li.classList.add('important');
  }
  else {
    li.classList.add('item');
  }
 
  li.textContent = field.value;
  field.value = '';
  list.append(li);
};

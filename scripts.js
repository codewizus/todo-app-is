const addButton = document.getElementById('add-button');
const inputField = document.getElementById('input-field');
const task = document.getElementById('task');


addButton.addEventListener('click', function(){
    
    const li = document.createElement('li');
    li.innerText = inputField.value;
    task.appendChild(li);
    inputField.value = '';
    
    li.addEventListener('click', function(){
        li.style.textDecoration = 'line-through';
    })
    li.addEventListener('dblclick', function () {
        task.removeChild(li);
    })
    
})
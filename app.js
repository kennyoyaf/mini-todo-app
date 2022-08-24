const input = document.querySelector('#list');
const form = document.querySelector('form');
const enteredList = document.querySelector('.entered-list');
const clearBtn = document.querySelector('.Clear-list')
console.log(clearBtn)



form.addEventListener('submit', (e) => {
    e.preventDefault();
    const toDo = input.value
    const newLi = document.createElement('li');
    newLi.innerText = toDo;
    enteredList.append(newLi);
    input.value = '';
})

clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    enteredList.innerHTML = '';
})
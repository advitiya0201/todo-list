const form = document.querySelector("form");
const ul = document.getElementById("todos");
const data = document.getElementById("task");
const button = document.getElementById("btn");

function update(data) {
    const newLi = document.createElement('li');
    newLi.innerHTML = data.value;
    ul.appendChild(newLi);
}

button.addEventListener('click', (event) => {
    event.preventDefault();
    update(data);
});




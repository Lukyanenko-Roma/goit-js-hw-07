

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

function changeName(event ) {
    output.textContent =
    event.target.value === '' ? 'незнакомец' : event.target.value;
}

input.addEventListener('input', changeName);
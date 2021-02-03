const inputRef = document.querySelector('#validation-input');

function inputVal(event) {
    event.target.value.length === Number(inputRef.getAttribute('data-length'))
        ? inputRef.classList.add('valid')
        : inputRef.classList.add('invalid');
    
}
function deleteClass() {
  if (inputRef.classList.contains('valid')) {
    inputRef.classList.remove('valid');
  }
  if (inputRef.classList.contains('invalid')) {
    inputRef.classList.remove('invalid');
  }
}

inputRef.addEventListener('blur', inputVal);
inputRef.addEventListener('focus', deleteClass);
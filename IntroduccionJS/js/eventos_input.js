// eventos del dom - inputs
const inputNombre = document.querySelector('#nombre');
const inputPassword = document.querySelector('#password');

inputNombre.addEventListener('input', (e) => {
    inputNombre.value = inputNombre.value.toUpperCase();
})
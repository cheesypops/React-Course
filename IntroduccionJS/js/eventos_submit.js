// eventos de submit en formularios

const form = document.querySelector('#formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = form.querySelector('#nombre');
    const pass = form.querySelector('#password');

    // prevenir nuevas alertas
    const alertaPrevia = document.querySelector('.alerta');
    alertaPrevia?.remove();

    // crear elementos html
    const alerta = document.createElement('DIV');
    alerta.classList.add('alerta', 'error', 'text-center', 'p-2', 'uppercase', 'font-bold', 'my-2', 'rounded-lg');

    if(nombre.value === '' || pass.value === ''){
        alerta.textContent = 'Todos los campos son obligatorios';
        alerta.classList.add('bg-red-500');
    }
    else{
        alerta.textContent = 'Sesió iniciada correctamente';
        alerta.classList.add('bg-green-500');
    }

    form.appendChild(alerta);

})
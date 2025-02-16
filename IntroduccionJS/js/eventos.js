// url con eveentos: https://developer.mozilla.org/es/docs/Web/API/Element

// eventos en el dom
const headin = document.querySelector('.heading');

// click
headin.addEventListener('click', () => {
    headin.textContent = 'Nuevo texto luego del click';
    headin.style.backgroundColor = 'red';
})

const enlaces = document.querySelectorAll('.navegacion a');

enlaces.forEach(enlace => {
    enlace.addEventListener('click', (evento) => {
        // prevenir el comportamiento por defecto
        evento.preventDefault();
        console.log('click en el enlace');
        evento.target.textContent = 'diste click';
    })
})
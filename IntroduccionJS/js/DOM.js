// selectores - trae solo el primero
const heading = document.querySelector('.heading');
console.log(heading);

// querySelectorAll - trae todos
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);

// manipulacion de elementos html con js
heading.textContent = 'Nuevo Heading';

enlaces.forEach(enlace => enlace.textContent = 'Nuevo Texto');
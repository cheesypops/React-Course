const alumno = {
    nombre: 'Juan',
    clase: 'programación',
    aprobado: true
};

// verifica si existe la propiedad antes de acceder a ella

console.log(alumno?.nombre); // Juan
console.log(alumno?.apellido); // undefined

// nullish coalescing operator (??)
// retorna el primer operando si es diferente de null o undefined, de lo contrario retorna el segundo operando
const page = null ?? 1;
console.log(page); // 1
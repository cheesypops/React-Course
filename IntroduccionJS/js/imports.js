import { add as sumar, subtract} from './funcs.js';

console.log(sumar(2, 2)); // 3
console.log(subtract(2, 1)); // 1

/*
Es necesario agregar el type="module" en el script de la página HTML para que funcione la importación de módulos.
<script type="module" src="js/imports.js"></script>
*/
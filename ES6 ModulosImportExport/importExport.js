/*
Los Módulos son trosos de código que podemos escribir en ficheros 
independientes.

Pueden tener clases, funciones, objetos, datos primitivos aunque 
se podía hacer previamente con transpiladores como Babel.

Para indeicar al navegador que un archivo Javascript utiliza módulos
necesitamos indicar

<script src="miscript.js" type="module"></script>

Para exportar una parte de in módulo utilizamos "export", de modo que le indicamos 
que se puede utiliar fuera. 

para importar algo exportado por un módulo utilizamos "import"

una de las diferencias de declarar un script como module es que, 
si no indicamos que es un modulo, se ejecuta tantas veces como lo 
indiquemos, mientras que al declarar como module solamente se ejecuta 
una vez aunque lo inquemos varias 
*/


/*import { cadenaMayuscula } from "./funciones.js"; 
const saludo = cadenaMayuscula('¡Hola Julieta!'); 
console.log(saludo); 

import {IVAGENERAL, IVAREDU, IVAMASREDU} from "./funciones.js";
console.log(`Los Diferentes IVA: 
IVA Normal: ${ IVAGENERAL }
IVA Reducido: ${ IVAREDU }
IVA Mas Reducido: ${ IVAMASREDU }`); */

// OTRA FORMA DE IMPORTAR TODO 

import * as todo from './funciones.js';

const saludo = todo.cadenaMayuscula('¡Hola Julieta!'); 
console.log(saludo);

console.log(`Los Diferentes IVA: 
IVA Normal: ${ todo.IVAGENERAL }
IVA Reducido: ${ todo.IVAREDU }
IVA Mas Reducido: ${ todo.IVAMASREDU }`);


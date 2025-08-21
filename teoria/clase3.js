/*usando backtiks $ y {}, dentro de las llaves podemos utilizar codigo directamente

documentacion de js mdm web docs
https://developer.mozilla.org/es/docs/Web/JavaScript
o https://www.w3schools.com/js/

En JavaScript:

Usa const cuando el valor no va a cambiar (constante). Ejemplo: números fijos, objetos o arrays que no vas a reasignar.
Usa let cuando el valor puede cambiar (variable). Ejemplo: contadores, resultados de cálculos, variables en bucles.
Siempre que puedas, prefiere const para mayor seguridad y claridad en tu código. Usa let solo si necesitas reasignar el valor.*/

/*funciones(expresada,declarada,flecha), estructura if, else if operador ternario, and y or , estructura for, metodos de arrays  / ejercicios con prompt sync */

// expresada

console.log(sumar(2,3))


function sumar(a,b) {
    return a+b
}

console.log(sumar(1,2))

//declarada
let restar = function(a,b){
    return a-b
}
restar(3,2)

//funciones flecha

let multiplicar = (a,b) => a*b
console.log(multiplicar(2,2))

let multiLinea = parametro => {
    console.log("Hola", parametro)
    return parametro
}

// callback

function ejecutarFuncion (c,d,funcion){
    return funcion(c,d)
}
console.log(ejecutarFuncion(2,10,sumar))


//no se puede hacer 10<a<20 >>> 10 < a && a < 20
// if
if(a>b && a<b)
    { 
        console.log(a," es mayor que ", b)
}  
else if (a==b)
    { //elif
        console.log(a,"es igual a ",b)
} 
else
    {
    console.log(a," es menor que ",b )
}

// if ternario

b > c ? "si" : "no"
let isMember = false
"La Cuota es de:  " + (isMember ? "$2.00" : "$10.00");

// comillas
"normal"
'habitual'
`back tick ${1+1}, ${sumar(a,b)}`


// for
// for ( variable iteradora, condicion, variacion)
for (let i = 0; i < 10 ; i++  ){
    console.log(i)
}
const EDADES = [1,2,3,4]
// len(EDADES)
for (let i = 0; i < EDADES.length ; i++){
    EDADES[i] += 1
}
console.log(EDADES)


const ESTUDIANTES = [
{nombre: "Manuel", edad: 22, genero: "M"},
{nombre: "Josefina", edad: 22, genero: "F"},
{nombre: "Javier", edad : 18, genero: "M"}
]

for(let i = 0 ; i < ESTUDIANTES.length ; i++){
    if ( ESUTIDANTES[i].genero === "M"){
    ESTUDIANTES[i].edad += 1
}
}
console.log(ESTUDIANTES)
//javascript: variables, tipos de datos (variable, constante, array, objeto),
// array de objetos, operadores logicos(&& ||), aritmeticos(()) y matematicos(+-*/),
// parseo de datos, thurty y flasy

//crear una variable, js no diferencia entre float y entero, es number
let nombre="Lucia";//string
let edad=20;//number
let = true; //boolean
console.log(nombre, edad); //printea

// + concatena como java, cuando el string es numerico te deja hacer operaciones atitmeticas con sts
console.log("11"+1);
console.log("esteban"+1);
console.log("11"-1);

// error en suma de decimales
console.log(0.7+0.1);

//constantes globales(?)
const EDAD = 32
EDAD = EDAD +1

//array = lista
let array1=[1,2,3]
console.log(array1[0])
//los array por conveccion se crean con const y el nombre se suele escribir en mayuscula
const ARRAY2=["esteban", 2, true]
ARRAY2.push("hola") //appendea, con const no se puede cambiar el contenido solo agregar
console.log(ARRAY2)

//objetos literales y atributos
let perro_lucia = {
    nombre: "toby",
    edad: 11,
    vivo: true,
    cumplir_años: function (){
        this.edad + 1
    },

}

console.log(perro_lucia.nombre) //printea toby

//clases (array de objetos literales)
let perro_maggie={
    nombre: "simon",
    edad: 6,
    vivo:true,
}
//clase PERROS
const PERROS = [
    perro_lucia,perro_maggie
]

console.log(PERROS[1].nombre)

//operadores matematicos y aritmeticos
console.log(1+2)
console.log(1-1)
console.log(2*2)
console.log(10/2)
console.log(2**3)
console.log(10%2) //resto

console.log(1<2)
console.log(2>2)
console.log(2==2)//igualdad debil
console.log("2"==2)//true
console.log("2"===2) //igualdad fuerte, compara el tipo de dato tambien, false
console.log("2"!=2) //false
console.log("2"!==2) //true

//casteo, cambio el tipo de dato
edad3 = "12"
let edad_numerica= parseInt(edad3) //cambio el tipo de dato a int
console.log(tipeof(edad_numerica))

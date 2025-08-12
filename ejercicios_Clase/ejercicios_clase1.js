//Ejercicios clase 

//1. Declara tres variables: una para almacenar tu ciudad, otra para almacenar tu país,
//  y otra para almacenar tu edad de nacimiento. Imprime los valores en la consola y después 
// intenta cambiar los valores y observa los resultados con let y const.
let ciudad="Tres Arroyos";
let pais="Argentina";
let edad = 20;

console.log(ciudad + pais + edad)

const ciudad2="Tres Arroyos";
const pais2="Argentina";
const edad2 = 20;

console.log(ciudad + pais + edad)

/*2. Declara tres variables numéricas. Calcula el promedio de las tres y encuentra el 
residuo de la división de la suma total entre 2. Imprime los resultados.*/
let num1=5;
let num2=12;
let num3=15;

let promedio=(num1+num2+num3)/3;
let resto=(num1+num2+num3)%2;
console.log(promedio);
console.log(resto);

/*3. Declara una variable para almacenar un objeto que represente un coche con propiedades como
marca, modelo y año. Imprime el tipo de cada propiedad con typeof.*/

let coche={
    marca:"Ford",
    modelo:"Fiesta",
    año:2015
}
console.log(typeof coche.marca);
console.log(typeof coche.año);

/*4. Crea un array con los nombres de 5 ciudades que te gustaría visitar. Reemplaza 
el tercer elemento por otra ciudad y luego imprime el array actualizado.*/

let ciudades=["Roma","Paris","Londres","Berlin","Madrid"];
ciudades[2]="New York";
console.log(ciudades);

/*5. Crea un array de 3 objetos que representen películas, cada una con título,
director y año de lanzamiento. Imprime el director de la última película.*/

let peliculas=[
    {titulo:"Pelicula 1", director:"Dir1", año:2010},
    {titulo:"Pelicula 2", director:"Dir2", año:1999},
    {titulo:"Pelicula 3", director:"Dir3", año:2014}
];
console.log(peliculas[2].director);

/*6. Declara tres variables booleanas y usa operadores lógicos para verificar si 
al menos dos son verdaderas. Imprime true o false en la consola dependiendo del resultado. */

let var1 = true;
let var2 = false;
let var3 = true;
let resultado = (var1 && var2) || (var1 && var3) || (var2 && var3);
console.log(resultado);

/*7. Declara tres variables numéricas. Compara si el primer número es mayor que el 
segundo y menor que el tercero. Luego, verifica si el segundo número es distinto al tercero.
Imprime los resultados de las comparaciones. */

let numero1= 10;
let numero2= 20;
let numero3= 30;
let result = numero1> numero2 && numero1 < numero3;
let result2 = numero2 !== numero3;
console.log(result);
console.log(result2);

/*8. Declara dos variables que almacenen strings (por ejemplo, tu nombre y tu apellido). Luego, 
crea una tercera variable que concatene las dos primeras y muestra el resultado en la consola.*/
let nombre = "lucia";
let apellido = "pesalaccia";
let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto); 

/*9. Declara una variable numérica y utiliza los operadores de incremento (++) y decremento 
(--) para modificar su valor. Imprime el valor de la variable después de cada operación.*/

let varNum = 10;
console.log(varNum);
varNum++;
console.log(varNum);
varNum--;
console.log(varNum);

/*10. Crea un objeto que represente un estudiante con propiedades como nombre, edad y 
carrera. Accede e imprime cada propiedad del objeto.*/
let estudiante = {
    nombre: "Lucia",
    edad: 20,
    carrera: "Ingeniería"
};
console.log(estudiante.nombre);
console.log(estudiante.edad);
console.log(estudiante.carrera);

/*11. Crea un array que contenga dos arrays internos, cada uno con 3 números. 
Accede al segundo elemento del primer array interno.*/
let numeros = [[1, 2, 3], [4, 5, 6]];
let elemento = numeros[0][1];

/*12. Declara dos variables numéricas y utiliza los operadores >, 
<, >=, <=, ===, !== para comparar sus valores. Imprime el resultado de cada comparación.*/
let numA = 15;
let numB = 25;
console.log(numA > numB);
console.log(numA < numB);
console.log(numA !== numB);
console.log(numA === numB);

/*13. Declara una variable sin asignarle un valor y otra variable con valor null. 
Utiliza typeof para imprimir el tipo de cada variable.*/
let variable1;
let variable2 = null;
console.log(typeof variable1);
console.log(typeof variable2);

/*14. Declara una variable que almacene un número como string (por ejemplo, "123").
Convierte este string a un número usando parseInt o Number y demuestra que ahora puedes 
realizar operaciones matemáticas con él.*/
let nro= "123";
let nro2 = parseInt(nro);
console.log(nro2+10);
console.log(nro2 **2);
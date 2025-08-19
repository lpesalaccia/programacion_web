/*e1: Escribe una función que tome tres números como
argumentos y retorne el mayor de ellos. Llama a la función con diferentes valores e imprime el resultado. */
function l1_mayor(a,b, c) {
    //let x = Math.max(a, b, c);
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
    //return x
}
console.log(l1_mayor(5, 10, 3));

/*e2: Crea una función expresada que reciba un array de strings y retorne un string que concatena todos los elementos 
del array separados por espacios.*/
/*function l2_concatenar(array) {
    return array.join(' ');
}*/
array = ["Hola", "mundo", "desde", "JavaScript"];
function l2_concatenar(array) {
    let resultado = "";
    for (let i = 0; i < array.length; i++) {
        resultado += array[i] + " ";
    }
    return resultado;
}
console.log(l2_concatenar(array));

/*ej3: Convierte la función del ejercicio anterior a una función de flecha. Además, 
agrega una validación para que, si el array está vacío, retorna un mensaje de advertencia.*/
let l3_concatenar = (array) => {
    if (array.length === 0) {
        return "El array está vacio";
    }
    resultado = "";
    for (let i = 0; i < array.length; i++) {
        resultado += array[i] + " ";
    }
    return resultado;
}
console.log(l3_concatenar(array));

/*ej4: Escribe una función que tome una temperatura en grados Celsius como argumento y devuelva
un mensaje que indique si hace frío (menor a 15 grados), templado (entre 15 y 25 grados) o calor (mayor a 25 grados).*/
function l4_temperatura(temperatura) {
    if (temperatura<15){
        return "Hace frío";
    }else if (temperatura>=15 && temperatura<=25){
        return "Esta templado";
    }
    else {
        return "Hace calor";
    }}
console.log(l4_temperatura(10));

/*ej5: Reescribe una función que tome una hora (formato 24 horas) y devuelva "Buenos días" si es antes de las 12, 
"Buenas tardes" si es entre las 12 y 18, o "Buenas noches" si es después de las 18, utilizando operadores ternarios.*/
function l5_saludo(hora) {
    if (hora < 0 || hora > 23) {
        return "Hora invalida";
    }else if (hora < 12) {
        return "Buenos días";
    }else if (hora >= 12 && hora < 18) {
        return "Buenas tardes";
    } else {
        return "Buenas noches";
    }
}
console.log(l5_saludo(10));

/*ej6: Escribe una función que reciba cuatro argumentos booleanos y retorne true si al 
menos uno de los dos primeros es verdadero y al menos uno de los dos últimos es falso.*/
function l6_bool(a, b, c, d) {
    return (a || b) && (!(c && d));
}
console.log(l6_bool(true, false, true, false));
console.log(l6_bool(false, false, true, true));

/*ej7: Escribe una función que tome un número como argumento y retorne su factorial. 
Utiliza una estructura if para manejar el caso base.*/
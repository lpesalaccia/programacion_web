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
array = ["Hola", "mundo", "desde", "JavaScript"];
let l2_concatenar = function(array) {
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
let hora = 10;
console.log("Saludo: " + (hora < 12 ? "Buenos días" : hora < 18 ? "Buenas tardes" : "Buenas noches"));

/*ej6: Escribe una función que reciba cuatro argumentos booleanos y retorne true si al 
menos uno de los dos primeros es verdadero y al menos uno de los dos últimos es falso.*/
function l6_bool(a, b, c, d) {
    return (a || b) && (!(c && d));
}
console.log(l6_bool(true, false, true, false));
console.log(l6_bool(false, false, true, true));

/*ej7: Escribe una función que tome un número como argumento y retorne su factorial. 
Utiliza una estructura if para manejar el caso base.*/
function l7_factorial(n) {
    if (n < 0) {
        return "El factorial debe ser cero o mayor";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = n; i >0; i--) {
            resultado *= i;
        }
        return resultado;
}}
console.log(l7_factorial(5));

/*ej8: Crea una función que salude a una persona. Si no se proporciona el nombre, debe saludar con "Hola, invitado".*/
function l8_saludar(nombre = "invitado") {
    return "Hola, " + (nombre);
}
console.log(l8_saludar("lucía"));
console.log(l8_saludar());

/*ej9: Escribe una función que tome un número y retorne true si es par o false si es impar. 
Utiliza el operador módulo (%) y un operador ternario.*/
numero=10;
function l9_parImpar(numero) {
    return ((numero % 2 === 0) ? true : false);
}
console.log(l9_parImpar(numero));

/*ej10: Escribe una función que reciba un día de la semana (en número) y retorne el nombre del día. Usa una estructura switch.*/
dia=3
function l10_diaSemana(dia) {
    switch (dia) {
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miércoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sábado";
        case 7:
            return "Domingo";
        default:
            return "Número de día inválido";
    }
}   

/*ej11: Crea una función recursiva que calcule la suma de los números de 1 hasta n.*/
function l11_sumaRecursiva(n) {
    if (n <= 1) {
        return n;
    } else {
        return n + l11_sumaRecursiva(n - 1);
    }
}   
console.log(l11_sumaRecursiva(5));

/*ej12: Escribe una función que verifique si una contraseña cumple con ciertos criterios: al menos 8 caracteres,
contiene un número y una letra mayúscula. Utiliza operadores lógicos para combinar las condiciones.*/
function l12_verificarContra(contra) {
    const tieneNumero = true;
    const tieneMayuscula = true;
    if (contra.length < 8) {
        return "Contraseña demasiado corta";
    }
    while (i<contra.length) {
        if (/[0-9]/.test(contra[i])) {   //uso isNaN? nose como testear bien si es un numero
            tieneNumero = True;
        }
        if (/[A-Z]/.test(contra[i])) {
            tieneMayuscula = true;
        }
        i++;
    }
    if (contra.length >= 8 && tieneNumero && tieneMayuscula) {
        return "Contraseña valida";       // mas verificado
    } }
    

console.log(l12_verificarContra("contra"));

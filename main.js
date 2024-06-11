import "./style.css";

/* 1. Declaración y Asignación: Declara una variable llamada nombre y asígnale tu nombre como valor. 

let nombre = "martina"; */

/* 2. Tipos de Datos: Crea variables para almacenar un número entero (edad), un número decimal (precio), una cadena de texto (ciudad) y un valor booleano (esEstudiante).

let numero=parseInt(prompt('Ingrese su edad'))

let precio=parseFloat(prompt('Ingrese el precio'))

let ciudad=prompt('En que ciudad vive?')

let estudiante=prompt('Usted es estudiante?')

 */

// 3. Concatenación: Declara dos variables (nombre, apellido) y muestra un mensaje que diga "Hola, [nombre] [apellido]".

/* let nombre = "Pedro";
let apellido = "Lopez";

alert(`Hola! ${nombre} ${apellido}`);
 */

//4. Operaciones Matemáticas: Declara dos variables numéricas (num1, num2) y realiza las operaciones básicas (suma, resta, multiplicación, división) con ellas.

/* const num1 = 4;
const num2 = 2;

//suma
let resultado = num1 + num2;
console.log("El resultado es " + resultado);

//suma
resultado = num1 - num2;
console.log("El resultado es " + resultado);

//multiplicacion
resultado = num1 * num2;
console.log("El resultado es " + resultado);

//diivsion
resultado = num1 / num2;
console.log("El resultado es " + resultado); */

/* 5. Incremento y Decremento: Declara una variable (contador) y utiliza los operadores de incremento (++) y decremento (--) para modificar su valor.

let pasajero = 1;
pasajero++;
console.log("Sigue el pasajero numero " + pasajero);

let caramelos = 3;
caramelos--;
console.log("Me quedan " + caramelos + " caramelos"); */

/* 6. Prompt y Alert: Pide al usuario que ingrese su nombre mediante prompt() y luego muestra un mensaje de bienvenida con alert().

let nombreEstudiante = prompt("Cual es su nombre?");
alert(`Bienvenido al colegio ${nombreEstudiante}!`);
 */

//7. Cálculo de Área: Pide al usuario el radio de un círculo y calcula su área (π * radio^2).

/* let radio = prompt("Cual es el radio de si circulo?");
let area = 3.14 * Math.pow(radio, 2);
alert(`El area de su circulo es ${area}`); */

//8. Conversión de Unidades: Pide al usuario una temperatura en grados Celsius y conviértela a Fahrenheit.

/* let gradoCelsius = prompt("Ingrese el numero de grados celsius");
alert("En grados Fahrenheit seria " + (gradoCelsius * 1.8 + 32)); */

/* 9. Cálculo de Promedio: Pide al usuario tres números y calcula su promedio. */

/* let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese otro numero"));
let num3 = parseInt(prompt("Ingrese un ultimo numero"));

let promedio = (num1 + num2 + num3) / 3;

console.log("El promedio de estos tres numeros es " + promedio); */

//10. Operador Ternario: Utiliza el operador ternario para determinar si un número es positivo o negativo.

/* let numeroEntero = prompt("Ingrese un numero entero");

let resultado =
  numeroEntero > 0 ? "El numero es positivo" : "El numero es negativo";
alert(resultado); */

//11. Condicional if-else: Pide al usuario su edad y determina si es mayor o menor de edad.

/* let edad = prompt("Ingrese su edad");
if (edad >= 18) {
  alert("Usted es mayor de edad");
} else {
  alert("Usted es menor de edad");
}
 */
//12. Condicional switch: Pide al usuario un número del 1 al 7 y muestra el día de la semana correspondiente.

/* let numeroDia = Number(prompt("Ingrese un numero del 1 al 7"));

switch (numeroDia) {
  case 1:
    alert("Le toco el dia Lunes");
    break;
  case 2:
    alert("Le toco el dia Martes");
    break;
  case 3:
    alert("Le toco el dia Miercoles");
    break;
  case 4:
    alert("Le toco el dia Jueves");
    break;
  case 5:
    alert("Le toco el dia Viernes");
    break;
  case 6:
    alert("Le toco el dia Sabado");
    break;
  case 7:
    alert("Le toco el dia Domingo");
    break;

  default:
    alert("Ese no es un numero del 1 al 7");
    break;
}
 */

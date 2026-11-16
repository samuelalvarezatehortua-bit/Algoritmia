// =====================================================================
// TANDA 1 - Ejercicios 1 a 4 en un solo archivo
// Cómo correrlo:  node tanda1.js
// Requiere Node.js 18 o superior. Los ejercicios 2, 3 y 4 piden datos
// por teclado: escribe el número y pulsa Enter.
// =====================================================================

const readline = require("readline/promises");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// Función auxiliar: imprime un título para separar los ejercicios en la consola
function titulo(texto) {
  console.log("\n==================== " + texto + " ====================");
}

// ---------------------------------------------------------------------
// EJERCICIO 1 · Instrucciones sin ambigüedad (reto desconectado)
// LÓGICA: un algoritmo claro tiene pasos que hacen UNA sola acción, con
// verbos precisos, medidas exactas y orden. Se guardan en un arreglo
// (lista) y se imprimen numerados con un ciclo.
// Ejemplo: dibujar un cuadrado de 5 cm.
// ---------------------------------------------------------------------
function ejercicio1() {
  titulo("EJERCICIO 1: Instrucciones sin ambigüedad");
  const pasos = [
    "Toma una hoja en posición horizontal y un lápiz.",
    "Coloca la punta del lápiz en el centro de la hoja.",
    "Traza una línea recta de 5 cm hacia la derecha.",
    "Gira 90° hacia abajo y traza una línea de 5 cm.",
    "Gira 90° hacia la izquierda y traza una línea de 5 cm.",
    "Gira 90° hacia arriba y traza una línea de 5 cm hasta llegar al punto de inicio."
  ];
  pasos.forEach((paso, i) => console.log((i + 1) + ". " + paso));
}

// ---------------------------------------------------------------------
// EJERCICIO 2 · Primer algoritmo: entrada, proceso y salida
// LÓGICA: todo algoritmo tiene tres partes:
//   ENTRADA: se piden los datos (base y altura)
//   PROCESO: se calcula (area = base * altura)
//   SALIDA:  se muestra el resultado
// ---------------------------------------------------------------------
async function ejercicio2() {
  titulo("EJERCICIO 2: Área de un rectángulo");

  // ENTRADA (parseFloat convierte el texto escrito en número decimal)
  const base = parseFloat(await rl.question("Ingrese la base: "));
  const altura = parseFloat(await rl.question("Ingrese la altura: "));

  // PROCESO
  const area = base * altura;

  // SALIDA
  console.log("El área es: " + area);
}

// ---------------------------------------------------------------------
// EJERCICIO 3 · Del pseudocódigo al diagrama de flujo
// LÓGICA: cada instrucción del pseudocódigo tiene un símbolo:
//   (Inicio) / (Fin) -> óvalo        / Leer, Escribir / -> paralelogramo
//   [ cálculo ]      -> rectángulo   < decisión >       -> rombo
//
// Diagrama de flujo de este ejercicio (perímetro de un rectángulo):
//   (Inicio)
//      |
//   / Leer base /
//      |
//   / Leer altura /
//      |
//   [ perimetro = 2 * (base + altura) ]
//      |
//   / Escribir perimetro /
//      |
//   (Fin)
//
// Cada línea de código lleva al lado el símbolo que le corresponde.
// ---------------------------------------------------------------------
async function ejercicio3() {
  titulo("EJERCICIO 3: Pseudocódigo -> diagrama de flujo");
  // (Inicio)
  const base = parseFloat(await rl.question("Base: "));        // / Leer base /
  const altura = parseFloat(await rl.question("Altura: "));    // / Leer altura /
  const perimetro = 2 * (base + altura);                       // [ perimetro = 2 * (base + altura) ]
  console.log("Perímetro: " + perimetro);                      // / Escribir perimetro /
  // (Fin)
}

// ---------------------------------------------------------------------
// EJERCICIO 4 · Calculadora de propinas y división de la cuenta
// LÓGICA:
//   propina    = cuenta * porcentaje / 100
//   total      = cuenta + propina
//   porPersona = total / personas
// Se valida con un "if" que personas sea mayor que 0, porque dividir
// entre cero daría un resultado inválido (Infinity).
// ---------------------------------------------------------------------
async function ejercicio4() {
  titulo("EJERCICIO 4: Calculadora de propinas");
  const cuenta = parseFloat(await rl.question("Valor de la cuenta: "));
  const porcentaje = parseFloat(await rl.question("Porcentaje de propina (%): "));
  const personas = parseInt(await rl.question("Número de personas: "));

  if (personas > 0) {
    const propina = cuenta * porcentaje / 100;
    const total = cuenta + propina;
    const porPersona = total / personas;

    console.log("Propina: " + propina);
    console.log("Total a pagar: " + total);
    console.log("Cada persona paga: " + porPersona);
  } else {
    console.log("El número de personas debe ser mayor que cero.");
  }
}

// ---------------------------------------------------------------------
// PROGRAMA PRINCIPAL: ejecuta los ejercicios en orden
// ---------------------------------------------------------------------
async function main() {
  ejercicio1();
  await ejercicio2();
  await ejercicio3();
  await ejercicio4();
  rl.close();
}

main();
// ejercicio3.js
const readline = require("readline/promises");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

async function main() {
  // (Inicio)
  const base = parseFloat(await rl.question("Base: "));      // / Leer base /
  const altura = parseFloat(await rl.question("Altura: "));  // / Leer altura /
  const area = base * altura;                                // [ area = base * altura ]
  console.log("Área: " + area);                              // / Escribir area /
  rl.close();
  // (Fin)
}

main();

//(Inicio)                       → óvalo
// Leer base /                   → paralelogramo
// Leer altura /                 → paralelogramo
// [ area = base * altura ]      → rectángulo
// / Escribir area /             → paralelogramo
// (Fin)                         → óvalo
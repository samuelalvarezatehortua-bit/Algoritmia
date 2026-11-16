const readline = require("readline/promises");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

async function main() {
  let total = 0;
  let contador = 0;

  let monto = parseFloat(await rl.question("Monto (0 para terminar): "));
  while (monto !== 0) {
    if (monto > 0) {
      total += monto;
      contador++;
    } else {
      console.log("Monto inválido, debe ser positivo.");
    }
    monto = parseFloat(await rl.question("Monto (0 para terminar): "));
  }

  console.log("Transacciones: " + contador);
  console.log("Total: " + total);
  if (contador > 0) console.log("Promedio: " + total / contador);
  rl.close();
}

main();
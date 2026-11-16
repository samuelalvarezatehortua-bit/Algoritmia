const readline = require("readline/promises");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

async function main() {
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
  rl.close();
}

main();
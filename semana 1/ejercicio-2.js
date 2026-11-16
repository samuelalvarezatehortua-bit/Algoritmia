const readline = require("readline/promises");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

async function main() {
  const base = parseFloat(await rl.question("Ingrese la base: "));
  const altura = parseFloat(await rl.question("Ingrese la altura: "));

  const area = base * altura;

  console.log("El área es: " + area);
  rl.close();
}

main();
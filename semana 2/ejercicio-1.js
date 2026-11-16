const valores = [false, true];

console.log("mayorEdad | tieneEntrada | puedeEntrar");
for (const mayorEdad of valores) {
  for (const tieneEntrada of valores) {
    const puedeEntrar = mayorEdad && tieneEntrada;
    console.log(`${mayorEdad}\t  | ${tieneEntrada}\t | ${puedeEntrar}`);
  }
}
const valores = [false, true];

for (const A of valores) {
  for (const B of valores) {
    const ley1 = !(A && B) === (!A || !B);
    const ley2 = !(A || B) === (!A && !B);
    console.log(`A=${A}, B=${B} -> ley1: ${ley1}, ley2: ${ley2}`);
  }
}

function esValida(clave) {
  return clave.length >= 8 && /\d/.test(clave);
}

function esInvalida(clave) {
  const largoOk = clave.length >= 8;
  const tieneNumero = /\d/.test(clave);
  return !largoOk || !tieneNumero;
}

for (const clave of ["abc", "abcdefgh", "abcdefg1", "clave1234"]) {
  console.log(`"${clave}" -> válida: ${esValida(clave)}, inválida: ${esInvalida(clave)}`);
}
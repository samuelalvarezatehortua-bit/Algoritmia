function semaforo(stock, minimo) {
  if (stock < 0 || minimo < 0) return "DATO INVÁLIDO";
  if (stock === 0) return "ROJO (agotado)";
  if (stock <= minimo) return "AMARILLO (reponer)";
  return "VERDE";
}

const minimo = 10;
for (const stock of [-1, 0, 1, 9, 10, 11, 100]) {
  console.log(`stock ${stock}, mínimo ${minimo} -> ${semaforo(stock, minimo)}`);
}

function esBisiesto(anio) {
  return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
}

for (const anio of [1900, 2000, 2023, 2024, 2100, 2400]) {
  console.log(`${anio} -> ${esBisiesto(anio) ? "bisiesto" : "no bisiesto"}`);
}
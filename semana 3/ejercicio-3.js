const filas = 5;

for (let i = 1; i <= filas; i++) {
  let linea = "";
  for (let e = 1; e <= filas - i; e++) linea += " ";       
  for (let a = 1; a <= 2 * i - 1; a++) linea += "*";       
  console.log(linea);
}
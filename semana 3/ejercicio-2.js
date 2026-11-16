const notas = [3.5, 4.2, 2.8, 5.0, 3.0, 1.9, 4.5];

let suma = 0;                 
let aprobados = 0;            
let mayor = notas[0];         
let menor = notas[0];         

for (const nota of notas) {
  suma += nota;
  if (nota >= 3.0) aprobados++;
  if (nota > mayor) mayor = nota;
  if (nota < menor) menor = nota;
}

console.log("Promedio: " + (suma / notas.length).toFixed(2));
console.log("Aprobados: " + aprobados + " de " + notas.length);
console.log("Nota mayor: " + mayor);
console.log("Nota menor: " + menor);
const pasos = [
  "Toma una hoja en posición horizontal y un lápiz.",
  "Coloca la punta del lápiz en el centro de la hoja.",
  "Traza una línea recta de 5 cm hacia la derecha.",
  "Gira 90° hacia abajo y traza una línea de 5 cm.",
  "Gira 90° hacia la izquierda y traza una línea de 5 cm.",
  "Gira 90° hacia arriba y traza una línea de 5 cm hasta llegar al punto de inicio."
];

pasos.forEach((paso, i) => console.log(`${i + 1}. ${paso}`));
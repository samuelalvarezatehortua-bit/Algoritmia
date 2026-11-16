const tarifas = {
  carro: { primera: 4000, adicional: 3000, maximo: 25000 },
  moto:  { primera: 2000, adicional: 1500, maximo: 12000 }
};

function calcularTarifa(tipo, horas) {
  const t = tarifas[tipo];
  if (!t) return "Tipo de vehículo no válido";
  if (horas <= 0) return "Las horas deben ser mayores que cero";

  const horasCobradas = Math.ceil(horas); 
  let total = t.primera + (horasCobradas - 1) * t.adicional;
  if (total > t.maximo) total = t.maximo;
  return total;
}

const casos = [["carro", 1], ["carro", 2.5], ["carro", 12], ["moto", 1], ["moto", 3], ["bus", 2], ["carro", 0]];
for (const [tipo, horas] of casos) {
  console.log(`${tipo}, ${horas} h -> ${calcularTarifa(tipo, horas)}`);
}
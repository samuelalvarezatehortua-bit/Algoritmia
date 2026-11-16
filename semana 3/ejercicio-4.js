const IVA = 0.19;
const PROPINA = 0.10;

function calcularSubtotal(items) {
  let subtotal = 0;
  for (const item of items) subtotal += item.precio * item.cantidad;
  return subtotal;
}

function calcularImpuesto(subtotal) {
  return subtotal * IVA;
}

function calcularPropina(subtotal) {
  return subtotal * PROPINA;
}

function imprimirFactura(items) {
  const subtotal = calcularSubtotal(items);
  const iva = calcularImpuesto(subtotal);
  const propina = calcularPropina(subtotal);
  const total = subtotal + iva + propina;

  console.log("===== FACTURA =====");
  for (const item of items) {
    console.log(`${item.cantidad} x ${item.nombre}: $${item.precio * item.cantidad}`);
  }
  console.log("Subtotal: $" + subtotal);
  console.log("IVA (19%): $" + iva.toFixed(0));
  console.log("Propina (10%): $" + propina.toFixed(0));
  console.log("TOTAL: $" + total.toFixed(0));
}

imprimirFactura([
  { nombre: "Bandeja paisa", precio: 28000, cantidad: 2 },
  { nombre: "Jugo natural", precio: 7000, cantidad: 3 },
  { nombre: "Postre", precio: 9000, cantidad: 1 }
]);
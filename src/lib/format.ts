/** Precio en soles: 95 -> "S/ 95.00" (formato fijo, idéntico en servidor y cliente). */
export function formatPrice(amount: number): string {
  return `S/ ${amount.toFixed(2)}`;
}

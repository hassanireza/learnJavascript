// Day 27 Project: formatter.js
// Default export for formatting numbers as currency

export default function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

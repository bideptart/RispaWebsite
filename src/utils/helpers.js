export function cx(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function formatPrice(value) {
  if (value === 0) return 'Custom'
  return `$${value}`
}

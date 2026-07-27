export function cx(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function formatPrice(value) {
  if (value === 0) return 'Custom'
  // Format number with commas for thousands
  return `$${value.toLocaleString('en-US')}`
}

export function removeAccentsAndToLowerCaseText(text: string) {
  const normalizedSearch = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")

  return normalizedSearch
}

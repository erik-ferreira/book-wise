export function cutFirstLetterOfFirstTwoNames(username: string) {
  return username
    .split(" ")
    .slice(0, 2)
    .map((name) => name[0])
    .join("")
}

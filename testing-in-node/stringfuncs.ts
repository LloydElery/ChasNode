export function removeNonAlphabeticFromString(input: string): any {
  return input.trim().replace(/[0-9]/g, "");
}
// Trim removes whitespaces

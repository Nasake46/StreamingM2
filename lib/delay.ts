// Fonction imposée par l’énoncé : elle simule une latence réseau.
export function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function circularRandom(min, max, mod) {
  return (Math.floor(Math.random() * (max - min)) + min) % mod;
}

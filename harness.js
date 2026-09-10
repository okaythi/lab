// Baseline benchmark harness
export function measure(fn, iterations = 1000) {
  const start = performance.now();
  for (let i = 0; i < iterations; i++) fn();
  return (performance.now() - start) / iterations;
}

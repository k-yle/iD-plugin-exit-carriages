export function omit<T extends object, K extends keyof T>(
  object: T,
  keys: K[],
) {
  return <Omit<T, K>>(
    Object.fromEntries(
      Object.entries(object).filter((kv) => !keys.includes(<K>kv[0])),
    )
  );
}

export const uuid = () => crypto.getRandomValues(new Uint32Array(2)).join('');

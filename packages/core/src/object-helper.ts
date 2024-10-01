export class ObjectHelper {
  static omitObjectKeys = <T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K[]) =>
    Object.keys(obj)
      .filter((key) => !keys.includes(key as K))
      .reduce((res, k) => Object.assign(res, { [k]: obj[k] }), {} as Omit<T, K>);
}

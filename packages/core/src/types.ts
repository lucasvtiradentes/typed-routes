export type NonUndefined<T> = T extends undefined ? never : T;

export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export type EmptyString<T> = T | '';

export type EmptyObject = Record<string, never>;

export type IntentionalAny = any; // eslint-disable-line

export type UnionFromObjectEnum<T> = T extends { [key: string]: infer U } ? U : never;

export type UnionFromAsConstArray<T> = T extends readonly [...infer U] ? U[number] : never;

declare const __brand: unique symbol;
type _Brand<B> = { [__brand]: B };
export type Brand<T, B> = T & _Brand<B>;

export type Neverfy<T> = {
  [P in keyof T]?: never;
};

export type RequireProps<TType extends Record<string, unknown>, TKeys extends keyof TType> = Omit<TType, TKeys> & Required<Pick<TType, TKeys>>;

export type BetterOmit<TType extends Record<string, unknown>, TKeys extends keyof TType> = Omit<TType, TKeys>;

export type NestedKeyofWithParent<T> = T extends object
  ? { [K in keyof T]: `${Exclude<K, symbol>}${'' | `.${NestedKeyofWithParent<T[K]>}`}` }[keyof T]
  : never;

export type NestedKeyof<T> = T extends object
  ? { [K in keyof T]: `${Exclude<K, symbol>}${NestedKeyof<T[K]> extends never ? '' : `.${NestedKeyof<T[K]>}`}` }[keyof T]
  : never;

export type RemoveUndefined<T> = T extends undefined ? never : T;

export type NonEmptyArray<T> = [T, ...T[]];

export type RemoveReadonly<T> = {
  -readonly [K in keyof T]: T[K];
};

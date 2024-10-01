export type IntentionalAny = any; // eslint-disable-line

export type BetterOmit<TType extends Record<string, unknown>, TKeys extends keyof TType> = Omit<TType, TKeys>;

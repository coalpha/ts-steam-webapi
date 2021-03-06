declare const unique_symbol: unique symbol;
declare type unique_object<T = unknown> = {
    [unique_symbol]: T;
};
declare type unwrap<T extends unique_object> = T extends infer val & T[typeof unique_symbol] ? val : never;
declare type unwrap_maybe<T> = T extends unique_object ? unwrap<T> : T;
/** unique symbol for the final purpose and usage of a newtype */
declare const final: unique symbol;
export type { unique_symbol, unwrap, unwrap_maybe, final };

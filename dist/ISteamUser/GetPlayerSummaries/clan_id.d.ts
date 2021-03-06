import { final, unique_symbol } from "../../core/newtype";
declare type clan_id_t = {
    [final]: "clan_id";
    [unique_symbol]: clan_id_t;
};
/**
 * String that when parsed, only the lowest 32 bits matter.
 * 103582791429521408 is returned for invalid
 */
export declare type clan_id = string & clan_id_t;
export {};

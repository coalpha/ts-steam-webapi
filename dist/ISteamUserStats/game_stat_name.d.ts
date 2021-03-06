import { final, unique_symbol } from "../core/newtype";
declare type game_stat_name_t = {
    [final]: "game_stat_name";
    [unique_symbol]: game_stat_name_t;
};
/** This is a game-local statistic name */
export declare type game_stat_name = string & game_stat_name_t;
export {};

import {steam_id} from "../api/steam_id";
import {o_game_name} from "./o_game_name";

// Ah, feels like C++...
// There truly is no place like<home>
export type o_player_stats_base<achievement_t> =
   & o_game_name
   & {steamID: steam_id; achievements: achievement_t[]};
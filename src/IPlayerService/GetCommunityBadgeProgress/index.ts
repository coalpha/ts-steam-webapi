import {isteam_session} from "../../shared/isteam_session";
import {steam_id} from "../../shared/steam_id";

import {IPlayerService} from "../interface";
import {api_method} from "../../api/api_method";
const method = "GetCommunityBadgeProgress" as api_method;

async function GetCommunityBadgeProgress(this: isteam_session, user: steam_id) {
   const params = `steamid=${user}`;

   const {response} = await this.api_call<import("./res")>(
      IPlayerService,
      method,
      "v1",
      params,
   );

   if (response === undefined) {
      throw new Error("GetCommunityBadgeProgress: response is undefined!");
   }

   return response.quests;
}

export {GetCommunityBadgeProgress};

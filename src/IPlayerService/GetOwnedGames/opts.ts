import {app_id} from "../../shared/app_id";

export type opts = {
   /** @default false */
   include_appinfo?: boolean;
   /** @default false */
   include_played_free_games?: boolean;
   /** @default [] */
   appids_filter?: app_id[];
   /** @default false */
   include_free_sub?: boolean;
   /** @default false */
   skip_unvetted_apps?: boolean;
};

/**
 * This is not actually used.
 * This is a representation of how what Steam will interpret missing parameters
 * as.
 */
export const opts_default: opts = {
   include_appinfo: false,
   include_played_free_games: false,
   appids_filter: [],
   include_free_sub: false,
   skip_unvetted_apps: false,
};

export function opts_to_params(opts: opts): string {
   var params = "";

   const {
      include_appinfo,
      include_played_free_games,
      appids_filter,
      include_free_sub,
      skip_unvetted_apps,
   } = opts;

   if (include_appinfo !== undefined) {
      params += `&include_appinfo=${include_appinfo}`;
   }

   if (include_played_free_games !== undefined) {
      params += `&include_played_free_games=${include_played_free_games}`;
   }

   if (appids_filter !== undefined) {
      params += `&appids_filter=${appids_filter.join(',')}`;
   }

   if (include_free_sub !== undefined) {
      params += `&include_free_sub=${include_free_sub}`;
   }

   if (skip_unvetted_apps !== undefined) {
      params += `&skip_unvetted_apps=${skip_unvetted_apps}`;
   }

   return params;
}

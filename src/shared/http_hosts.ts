import {https} from "./http_host";

const h_steamcdn_akamihd = https("steamcdn-a.akamaihd.net");
type  h_steamcdn_akamihd = typeof h_steamcdn_akamihd;

const h_media_steampowered = https("media.steampowered.com");
type  h_media_steampowered = typeof h_media_steampowered;

const h_steamcommunity = https("steamcommunity.com");
type  h_steamcommunity = typeof h_steamcommunity;

export {h_steamcdn_akamihd, h_media_steampowered, h_steamcommunity};

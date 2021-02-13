import {uint} from "../core/basetypes";

declare const epoch: unique symbol;
export type epoch = uint & {readonly [epoch]: unique symbol};

export const to_date = (seconds: epoch) =>
   new Date(seconds * 1000);

export const from_date = (epoch: Date) =>
   epoch.getTime() / 1000;
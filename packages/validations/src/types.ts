import { VALIDATORS } from "./constants";
export interface ValidatorConfig {
  message: string;
  [key: string]: any;
}

export type ValidatorFunction = (value: string) => string | null;

export type ValidatorName = (typeof VALIDATORS)[number];

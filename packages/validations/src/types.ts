export interface ValidatorConfig {
  message: string;
  [key: string]: any;
}

export type ValidatorFunction = (value: string) => string | null;

import { ValidatorConfig, ValidatorFunction } from "../types";

// This is the same email regex as browsers use when type="email"
export const EMAIL_REGEXP =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function isEmail(config: ValidatorConfig): ValidatorFunction {
  return (value: string) => {
    return !EMAIL_REGEXP.test(value) ? config.message : null;
  };
}

import { ValidatorConfig, ValidatorFunction } from "../../types";
import { EMAIL_REGEXP } from "../constants";

export default function isEmail(config: ValidatorConfig): ValidatorFunction {
  return (value: string) => {
    return !EMAIL_REGEXP.test(value) ? config.message : null;
  };
}

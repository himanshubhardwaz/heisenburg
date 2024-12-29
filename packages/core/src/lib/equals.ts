import { ValidatorConfig, ValidatorFunction } from "../types";

export default function equals(config: ValidatorConfig): ValidatorFunction {
  return function (value) {
    if (value !== config.value) {
      return config.message;
    } else return null;
  };
}

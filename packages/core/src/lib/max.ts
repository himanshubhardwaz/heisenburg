import { ValidatorConfig, ValidatorFunction } from "../types";

export default function max(config: ValidatorConfig): ValidatorFunction {
  return function (value) {
    if (value.length > config.length) {
      return config.message;
    } else return null;
  };
}

import { ValidatorConfig, ValidatorFunction } from "../types";

export default function customValidator(
  config: ValidatorConfig
): ValidatorFunction {
  return function (value) {
    if (!config.validator(value)) return config.message;
    else return null;
  };
}

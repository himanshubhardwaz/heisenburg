import { ValidatorConfig, ValidatorFunction } from "../../types";

export default function satisfiesRegex(
  config: ValidatorConfig
): ValidatorFunction {
  return function (value) {
    if (!config.regex.test(value)) {
      return config.message;
    } else return null;
  };
}

import { ValidatorConfig, ValidatorFunction } from "../types";

export default function isRequired(config: ValidatorConfig): ValidatorFunction {
  return function (value) {
    if (value === "") {
      return config.message;
    } else {
      return null;
    }
  };
}

import { type ValidatorName } from "@heisenburg/validations";

export interface ValidatorConfig {
  message: string;
  [key: string]: any;
}

export type ValidatorFunction = (value: string) => string | null;

export type Validators = Record<
  string,
  (config: ValidatorConfig) => ValidatorFunction
>;

export type FieldConfig = Partial<Record<ValidatorName, ValidatorConfig>>;
export type FieldConfigs = Record<string, FieldConfig>;

export type FieldValues = Record<string, string>;
export type FieldErrors = Record<string, string | null>;
export type FieldBlurred = Record<string, boolean>;

export interface ValidationState {
  values: FieldValues;
  errors: FieldErrors;
  blurred: FieldBlurred;
  submitted: boolean;
}

export type OnSubmitCallbackContext = ValidationState & {
  isFormValid: boolean;
  isInitialFormValid: boolean;
};

export interface ValidationConfig {
  fields: FieldConfigs;
  showErrors: "always" | "blur";
  onSubmit?: (state: OnSubmitCallbackContext) => void;
}

export type OnSubmitCallback = ValidationConfig["onSubmit"];

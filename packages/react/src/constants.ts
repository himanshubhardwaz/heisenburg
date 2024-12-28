export const SHOW_ERROR_OPTIONS = ["always", "blur", "dirty"] as const;

export const FORM_REDUCER_ACTIONS = [
  "change",
  "submit",
  "validate",
  "blur",
] as const;

export const VALIDATORS = [
  "isEmail",
  "isRequired",
  "equals",
  "max",
  "min",
  "satisfiesRegex",
  "customValidator",
] as const;
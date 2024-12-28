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

// This is the same email regex as browsers use when type="email"
export const EMAIL_REGEXP =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

import { useReducer, useMemo, ChangeEvent, FormEvent } from "react";
import * as importedValidators from "@heisenburg/core";
import { type ValidatorName } from "@heisenburg/core";
import useDeepCompareEffect from "use-deep-compare-effect";

import {
  FieldConfig,
  FieldConfigs,
  FieldErrors,
  FieldValues,
  ValidationConfig,
  ValidationState,
  Validators,
} from "../types";

const initialState: ValidationState = {
  values: {},
  errors: {},
  blurred: {},
  submitted: false,
};

const validators: Validators = importedValidators;

function validateField(
  fieldValue: string = "",
  fieldConfig: FieldConfig
): string | null {
  for (const validatorName in fieldConfig) {
    const validatorConfig = fieldConfig[validatorName as ValidatorName];
    const validator = validators[validatorName];
    if (validator && validatorConfig) {
      const configuredValidator = validator(validatorConfig);
      const errorMessage = configuredValidator(fieldValue);
      if (errorMessage) {
        return errorMessage;
      }
    }
  }
  return null;
}

function validateFields(
  fieldValues: FieldValues,
  fieldConfigs: FieldConfigs
): FieldErrors {
  const errors: FieldErrors = {};
  for (const fieldName in fieldConfigs) {
    const fieldConfig = fieldConfigs[fieldName];
    const fieldValue = fieldValues[fieldName];
    if (typeof fieldConfig != "undefined") {
      errors[fieldName] = validateField(fieldValue, fieldConfig);
    }
  }
  return errors;
}

type ValidationAction =
  | { type: "change"; payload: FieldValues }
  | { type: "submit" }
  | { type: "validate"; payload: FieldErrors }
  | { type: "blur"; payload: string };

function validationReducer(
  state: ValidationState,
  action: ValidationAction
): ValidationState {
  switch (action.type) {
    case "change": {
      const values = { ...state.values, ...action.payload };
      return { ...state, values };
    }
    case "submit": {
      return { ...state, submitted: true };
    }
    case "validate": {
      return { ...state, errors: action.payload };
    }
    case "blur": {
      const blurred = { ...state.blurred, [action.payload]: true };
      return { ...state, blurred };
    }
    default: {
      throw new Error("Unknown action type");
    }
  }
}

function getErrors(
  state: ValidationState,
  config: ValidationConfig
): FieldErrors {
  if (config.showErrors === "always" || state.submitted) {
    return state.errors;
  }

  if (config.showErrors === "blur") {
    return Object.entries(state.blurred)
      .filter(([, blurred]) => blurred)
      .reduce<FieldErrors>((acc, [name]) => {
        return { ...acc, [name]: state.errors[name] ?? null };
      }, {});
  }

  return state.submitted ? state.errors : {};
}

export const useForm = (config: ValidationConfig) => {
  const [state, dispatch] = useReducer(validationReducer, initialState);

  useDeepCompareEffect(() => {
    const errors = validateFields(state.values, config.fields);
    dispatch({ type: "validate", payload: errors });
  }, [state.values, config.fields]);

  const errors = useMemo(
    () => getErrors(state, config),
    [state.errors, state.blurred, state.submitted, config.showErrors]
  );

  const isFormValid = useMemo(
    () => Object.values(errors).every((error) => error === null),
    [errors]
  );

  return {
    errors,
    submittedErrors: state.submitted ? state.errors : {},
    submitted: state.submitted,
    isFormValid,
    getFormProps: () => ({
      onSubmit: (e: FormEvent) => {
        e.preventDefault();
        const presentErrors = getErrors(state, {
          ...config,
          showErrors: "always",
        });
        const isInitialFormValid = Object.values(presentErrors).every(
          (error) => error === null
        );
        dispatch({ type: "submit" });
        if (config.onSubmit) {
          config.onSubmit({
            ...state,
            isFormValid,
            isInitialFormValid,
          });
        }
      },
    }),
    getFieldProps: (fieldName: string) => ({
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (!config.fields[fieldName]) {
          return;
        }
        dispatch({
          type: "change",
          payload: { [fieldName]: value },
        });
      },
      onBlur: () => {
        dispatch({ type: "blur", payload: fieldName });
      },
      name: fieldName,
      value: state.values[fieldName] || "",
    }),
  };
};

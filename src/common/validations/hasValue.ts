import { FieldValidationFunctionSync } from "@lemoncode/fonk";

const hasValue: FieldValidationFunctionSync = ({ value }) => {
  const isValid = value && value.trim().length > 0;
  return {
    type: "STRING_HAS_VALUE",
    succeeded: isValid,
    message: isValid ? "" : "Should write a name for the n ew ingredient",
  };
};

export { hasValue };
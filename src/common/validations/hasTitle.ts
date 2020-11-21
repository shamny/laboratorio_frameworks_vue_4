import { FieldValidationFunctionSync } from "@lemoncode/fonk";

const hasTitle: FieldValidationFunctionSync = ({ value }) => {
  const isValid = value && value.trim().length > 0;
  return {
    type: "STRING_HAS_TITLE",
    succeeded: isValid,
    message: isValid ? "" : "Should write some title",
  };
};

export { hasTitle };
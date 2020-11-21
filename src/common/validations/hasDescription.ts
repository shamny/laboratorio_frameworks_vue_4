import { FieldValidationFunctionSync } from "@lemoncode/fonk";

const hasDescription: FieldValidationFunctionSync = ({ value }) => {
  const isValid = value && value.trim().length > 0;
  return {
    type: "STRING_HAS_DESCRIPTION",
    succeeded: isValid,
    message: isValid ? "" : "Should write some description",
  };
};

export { hasDescription };
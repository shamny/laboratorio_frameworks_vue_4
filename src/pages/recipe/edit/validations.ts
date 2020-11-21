import { createFormValidation, Validators, ValidationSchema } from "@lemoncode/fonk";
import { hasDescription } from "../../../common/validations/hasDescription";
import { hasItems } from "../../../common/validations/hasItems";
import { hasTitle } from "../../../common/validations/hasTitle";

const validationSchema: ValidationSchema = {
  field: {
    name: [hasTitle],
    ingredients: [hasItems],
    description: [hasDescription],
  },
};

export const validations = createFormValidation(validationSchema);

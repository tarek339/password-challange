import {
  Input as ChInput,
  FormControl,
  FormHelperText,
  FormLabel,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { IInput } from "../types/interfaces/components";

const Input = ({
  label,
  type,
  value,
  onChange,
  message,
  hidden,
  readOnly,
  rightElement,
}: IInput) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <ChInput
          hidden={hidden}
          readOnly={readOnly}
          type={type}
          value={value}
          onChange={onChange}
        />

        <InputRightElement>{rightElement}</InputRightElement>
      </InputGroup>
      <FormHelperText color="red">{message}</FormHelperText>
    </FormControl>
  );
};

export default Input;

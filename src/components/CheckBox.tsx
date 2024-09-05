import { Checkbox, FormControl, FormHelperText } from "@chakra-ui/react";
import { ICheckBox } from "../types/interfaces/components";

const CheckBox = ({
  title,
  checked,
  defaultChecked,
  onChange,
  message,
}: ICheckBox) => {
  return (
    <FormControl>
      <Checkbox
        defaultChecked={defaultChecked}
        checked={checked}
        onChange={onChange}
      >
        {title}
      </Checkbox>
      <FormHelperText color="red">{message}</FormHelperText>
    </FormControl>
  );
};

export default CheckBox;

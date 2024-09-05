import { Button as ChButton } from "@chakra-ui/react";
import { IButton } from "../types/interfaces/components";

const Button = ({ title, type }: IButton) => {
  return (
    <ChButton colorScheme="blue" type={type}>
      {title}
    </ChButton>
  );
};

export default Button;

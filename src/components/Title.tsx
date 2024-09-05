import { Heading } from "@chakra-ui/react";
import { ITitle } from "../types/interfaces/components";

const Title = ({ as, fontSize, title }: ITitle) => {
  return (
    <Heading as={as} fontSize={fontSize}>
      {title}
    </Heading>
  );
};

export default Title;

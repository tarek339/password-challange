import { Box } from "@chakra-ui/react";
import Input from "../components/Input";
import { CheckIcon, CopyIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { IResult } from "../types/interfaces/interfaces";

const Result = ({
  show,
  generatedPassword,
  copyToClipboard,
  showPassword,
  copied,
}: IResult) => {
  return (
    <Input
      readOnly
      type={show ? "text" : "password"}
      label={"Password"}
      value={generatedPassword}
      onChange={undefined}
      rightElement={
        <>
          <Box onClick={copyToClipboard} cursor="pointer" pr={2}>
            {copied ? <CheckIcon /> : <CopyIcon />}
          </Box>
          <Box onClick={showPassword} cursor="pointer" pr={2}>
            {!show ? <ViewIcon /> : <ViewOffIcon />}
          </Box>
        </>
      }
    />
  );
};

export default Result;

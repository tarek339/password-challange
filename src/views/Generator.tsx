import { Box } from "@chakra-ui/react";
import Title from "../components/Title";
import Input from "../components/Input";
import { useState } from "react";
import CheckBox from "../components/CheckBox";
import Button from "../components/Button";
import { generatePassword } from "../lib/generatePassword";
import { CopyIcon, CheckIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Generator = () => {
  const [passwordLen, setPasswordLen] = useState("8");
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [specialCharacters, setSpecialCharacters] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [optionMessage, setOptionMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [show, setShow] = useState(false);

  const unicodeRegex = /[\p{L}/!@#$%^&*(),.?":{}|<>]/u;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setOptionMessage("");
    setGeneratedPassword("");
    setShow(false);

    if (!passwordLen) {
      setErrorMessage("Field is required");
      return;
    }
    if (unicodeRegex.test(passwordLen)) {
      setErrorMessage("Numbers only");
      return;
    }
    if (+passwordLen > 30 || +passwordLen < 8) {
      setErrorMessage("Mix length of 8 and max length of 30");
      return;
    }
    if (!uppercase && !lowercase && !specialCharacters) {
      setOptionMessage("Choose option");
      return;
    }

    const result = generatePassword(
      +passwordLen,
      specialCharacters,
      uppercase,
      lowercase
    );

    setGeneratedPassword(result);
  };

  const showPassword = () => {
    setShow(!show);
  };

  const copyToClipboard = () => {
    let password = generatedPassword;
    let input = document.createElement("input");
    input.value = password;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <Box display="flex" flexDirection="column" gap={4}>
      <Title title={"Password Generator"} as={"h1"} fontSize={"xxx-large"} />
      <form onSubmit={onSubmit}>
        <Box display="flex" flexDirection="column" gap={4}>
          <Input
            type={"text"}
            label={"Password length (default 8, max 20)"}
            value={passwordLen}
            onChange={(e) => setPasswordLen(e.target.value)}
            message={errorMessage}
          />
          <CheckBox
            title={"Lowercase characters"}
            checked={lowercase}
            defaultChecked
            onChange={(e) => setLowercase(e.target.checked)}
            message={optionMessage}
          />
          <CheckBox
            title={"Uppercase characters"}
            checked={uppercase}
            onChange={(e) => setUppercase(e.target.checked)}
            message={optionMessage}
          />
          <CheckBox
            title={"Special characters"}
            checked={specialCharacters}
            onChange={(e) => setSpecialCharacters(e.target.checked)}
            message={optionMessage}
          />
          <Button type="submit" title={"GENERATE"} />
        </Box>
      </form>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Title title={"Your password"} as={"h3"} fontSize={"xx-large"} />
      </Box>

      {generatedPassword && (
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
      )}
    </Box>
  );
};

export default Generator;

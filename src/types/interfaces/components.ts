import { As, ResponsiveValue } from "@chakra-ui/react";

export interface IInput {
  type: string;
  label: string;
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  message?: string;
  hidden?: boolean;
  readOnly?: boolean;
  rightElement?: JSX.Element | JSX.Element[];
}

export interface ICheckBox {
  title: string;
  checked: boolean;
  defaultChecked?: boolean;
  message?: string;
  onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}

export interface ITitle {
  title: string;
  as: As | undefined;
  fontSize: ResponsiveValue<"x-large" | "xx-large" | "xxx-large"> | undefined;
}

export interface IButton {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
}

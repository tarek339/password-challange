export interface IResult {
  show: boolean;
  generatedPassword: string;
  copyToClipboard: () => void | undefined;
  showPassword: () => void | undefined;
  copied: boolean;
}

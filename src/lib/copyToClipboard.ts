export const copyToClipboard = (generatedPassword: string) => {
  let password = generatedPassword;
  let input = document.createElement("input");
  input.value = password;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
};

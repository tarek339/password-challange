export const generatePassword = (
  length: number,
  includeSpecialCharacters: boolean,
  includeUppercase: boolean,
  includeLowercase: boolean
) => {
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const specialChars = '!@#$%^&*()-_=+[]{}|;:",.<>?`~';

  let characters = "";
  if (includeLowercase) characters += lowercaseLetters;
  if (includeUppercase) characters += uppercaseLetters;
  if (includeSpecialCharacters) characters += specialChars;

  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

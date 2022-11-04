import { mappings } from "./mappings";
import { DefaultRomanizationOptions, RomanizationOptions } from "./opts";

const helperVowels = ["Я", "Е", "Ё", "Ю", "я", "е", "ё", "ю"];
const vowels = [
  "а",
  "э",
  "и",
  "о",
  "у",
  "ө",
  "ү",
  "А",
  "Э",
  "И",
  "О",
  "У",
  "Ө",
  "Ү",
];

export const romanize = (
  input: string,
  opts: RomanizationOptions = DefaultRomanizationOptions
) => {
  let value = "";
  let last = "$";
  const len = input.length;

  for (let i = 0; i < len; i++) {
    if (opts.omitDoubleVowels) {
      if (helperVowels.includes(last) && vowels.includes(input[i])) {
        value = value.substring(0, value.length - 1);
      }
      last = input[i];
    }
    value += mappings[opts.mapping][input[i]] || input[i];
  }

  return value;
};

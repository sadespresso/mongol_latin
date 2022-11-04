export type Mapping = Record<string, string>;

const defaultMapping: Mapping = {
  а: "a",
  э: "e",
  и: "i",
  о: "o",
  у: "u",
  ө: "u",
  ү: "u",
  й: "i",
  ы: "y",
  я: "ya",
  е: "ye",
  ё: "yo",
  ю: "yu",
  м: "m",
  н: "n",
  г: "g",
  л: "l",
  б: "b",
  в: "v",
  р: "r",
  ц: "ts",
  ж: "j",
  з: "z",
  с: "s",
  д: "d",
  т: "t",
  ш: "sh",
  ч: "ch",
  х: "kh",
  ф: "f",
  п: "p",
  к: "k",
  щ: "sh",
  ь: "i",
  ъ: "i",
  А: "A",
  Э: "E",
  И: "I",
  О: "O",
  У: "U",
  Ө: "U",
  Ү: "U",
  Й: "I",
  Ы: "Y",
  Я: "Ya",
  Е: "Ye",
  Ё: "Yo",
  Ю: "Yu",
  М: "M",
  Н: "N",
  Г: "G",
  Л: "L",
  Б: "B",
  В: "V",
  Р: "R",
  Ц: "Ts",
  Ж: "J",
  З: "Z",
  С: "S",
  Д: "D",
  Т: "T",
  Ш: "Sh",
  Ч: "Ch",
  Х: "Kh",
  Ф: "F",
  П: "P",
  К: "K",
  Щ: "Sh",
  Ь: "I",
  Ъ: "I",
};

/**
 * Mappings align with MNS 5217:2012
 *
 * https://estandard.gov.mn/standard/v/4635
 * */
const mns5217_2012: Mapping = {
  ...defaultMapping,
  Ө: "Ö",
  ө: "ö",
  ү: "ü",
};

export const DefaultMapping = "default";
export const MNS5217_2012 = "MNS 5217:2012";
export type MappingType = typeof DefaultMapping | typeof MNS5217_2012;

export const mappings: Record<MappingType, Mapping> = {
  [MNS5217_2012]: mns5217_2012,
  default: defaultMapping,
};

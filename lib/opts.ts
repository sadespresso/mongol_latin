import { DefaultMapping, MappingType, MNS5217_2012 } from "./mappings";

export interface RomanizationOptions {
  mapping: MappingType;
  /** Omits middle letter from cases like "yaa", "yuu" */
  omitDoubleVowels: boolean;
}

export const DefaultRomanizationOptions: RomanizationOptions = {
  mapping: DefaultMapping,
  omitDoubleVowels: true,
};
export const MNS5217_2012Options: RomanizationOptions = {
  mapping: MNS5217_2012,
  omitDoubleVowels: false,
};

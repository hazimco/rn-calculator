export interface Button {
  title: string;
  style: ButtonStyle;
}

export enum ButtonStyle {
  OPERATOR = "orange",
  NUMBER = "#404040",
  UTILITY = "#a0a0a0",
}

export enum UNICODE {
  // OPERATORS
  PLUS_SIGN = "\u002b",
  MINUS_SIGN = "\u2212",
  MULTIPLICATION_SIGN = "\u00D7",
  DIVISION_SIGN = "\u00F7",

  // OTHER
  PLUS_SLASH_MINUS = "\u207A\u2215\u208B",
}

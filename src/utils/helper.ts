import { Button, ButtonStyle, UNICODE } from "../types";

const isOperator = (character: string): boolean => {
  return (
    character === UNICODE.DIVISION_SIGN ||
    character === UNICODE.MULTIPLICATION_SIGN ||
    character === UNICODE.MINUS_SIGN ||
    character === UNICODE.PLUS_SIGN
  );
};

const handleOperatorButton = (currentInput: string[], buttonTitle: string) => {
  if (currentInput.length === 0) return currentInput;

  const lastInputCharacter = currentInput.at(-1) || "";
  if (lastInputCharacter === UNICODE.COMMA) {
    return [...currentInput, "0", buttonTitle];
  }
  if (!isOperator(lastInputCharacter)) {
    return [...currentInput, buttonTitle]; //add operator if last character is not an operator
  } else {
    return currentInput.with(-1, buttonTitle); //replace operator if last character is an operator
  }
};

const handleDecimalButton = (currentInput: string[], button: Button) => {
  const lastInputCharacter = currentInput.at(-1) || "";

  // add 0 before decimal that is added when input is empty, or when last input is an operator
  if (currentInput.length === 0 || isOperator(lastInputCharacter)) {
    return [...currentInput, "0", button.title];
  }

  const lastDecimalIndex = currentInput.findLastIndex(
    (element) => element === button.title
  );

  // if there is no decimal, add it
  if (lastDecimalIndex === -1) {
    return [...currentInput, button.title];
  }

  const lastOperatorIndex = currentInput.findLastIndex(isOperator);

  /* 
  Values between operators are called operands. "0.1" and "2.3" are operands in "0.1 + 2.3"
  Decimal can be added only if an operand does not already have a decimal.
  Since the last operand starts after the last operator, a decimal is allowed
  only if index of last decimal is less than index of last operator.
  */
  if (lastDecimalIndex < lastOperatorIndex) {
    return [...currentInput, button.title];
  }

  return currentInput;
};

const handleDeleteButton = (
  currentInput: string[],
  selectedIndex: number | undefined,
  setSelectedIndex: React.Dispatch<React.SetStateAction<number | undefined>>
) => {
  if (selectedIndex === undefined) return currentInput;

  let updatedInput = currentInput.filter((_, index) => {
    if (index === selectedIndex) {
      setSelectedIndex(selectedIndex - 1);
      return false;
    }
    return true;
  });

  return updatedInput;
};

const handleEditCharacter = (
  currentInput: string[],
  selectedIndex: number,
  buttonTitle: string
) => {
  let updatedInput = [...currentInput];
  updatedInput[selectedIndex] = buttonTitle;
  return updatedInput;
};

const getInputAfterButtonPress = (
  currentInput: string[],
  button: Button,
  selectedIndex: number | undefined,
  setSelectedIndex: React.Dispatch<React.SetStateAction<number | undefined>>
) => {
  switch (button.title) {
    case "AC": {
      return [];
    }
    case UNICODE.ERASE_TO_THE_LEFT: {
      return handleDeleteButton(currentInput, selectedIndex, setSelectedIndex);
    }
    case UNICODE.PLUS_SLASH_MINUS: {
      return currentInput;
    }
    case UNICODE.EQUALS_SIGN: {
      return currentInput;
    }
    case UNICODE.COMMA: {
      return handleDecimalButton(currentInput, button);
    }
  }
  switch (button.style) {
    case ButtonStyle.NUMBER: {
      if (selectedIndex === undefined) {
        return [...currentInput, button.title];
      }

      return handleEditCharacter(currentInput, selectedIndex, button.title);
    }
    case ButtonStyle.OPERATOR: {
      return handleOperatorButton(currentInput, button.title);
    }
    default:
      return currentInput;
  }
};

export { getInputAfterButtonPress };

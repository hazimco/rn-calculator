import { Button, ButtonStyle } from "../types";

const operators = ["÷", "×", "−", "+"];

const handleOperatorButton = (currentInput: string[], button: Button) => {
  if (currentInput.length === 0) return currentInput;

  const lastInputCharacter = currentInput.at(-1) || "";
  if (!operators.includes(lastInputCharacter)) {
    return [...currentInput, button.title]; //add operator if last character is not an operator
  } else {
    return currentInput.with(-1, button.title); //replace operator if last character is an operator
  }
};

const handleDecimalButton = (currentInput: string[], button: Button) => {
  const lastInputCharacter = currentInput.at(-1) || "";

  // add 0 before decimal that is added when input is empty, or when last input is an operator
  if (currentInput.length === 0 || operators.includes(lastInputCharacter)) {
    return [...currentInput, "0", button.title];
  }

  const lastDecimalIndex = currentInput.findLastIndex(
    (element) => element === button.title
  );

  // if there is no decimal, add it
  if (lastDecimalIndex === -1) {
    return [...currentInput, button.title];
  }

  const lastOperatorIndex = currentInput.findLastIndex(
    (element) =>
      element === operators[0] ||
      element === operators[1] ||
      element === operators[2] ||
      element === operators[3]
  );

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

const getInputAfterButtonPress = (currentInput: string[], button: Button) => {
  switch (button.title) {
    case "AC": {
      return [];
    }
    case "%": {
      return currentInput;
    }
    case "\u207A\u2215\u208B": {
      return currentInput;
    }
    case "=": {
      return currentInput;
    }
    case ",": {
      return handleDecimalButton(currentInput, button);
    }
  }
  switch (button.style) {
    case ButtonStyle.NUMBER: {
      return [...currentInput, button.title];
    }
    case ButtonStyle.OPERATOR: {
      return handleOperatorButton(currentInput, button);
    }
    default:
      return currentInput;
  }
};

export { getInputAfterButtonPress };

import { Button, ButtonStyle } from "../types";

const operators = ["÷", "×", "-", "+"];

const handleOperatorButton = (currentInput: string[], button: Button) => {
  if (currentInput.length === 0) return currentInput;

  const lastInputCharacter = currentInput.at(-1) || "";
  if (!operators.includes(lastInputCharacter)) {
    return [...currentInput, button.title]; //add operator if last character is not an operator
  } else {
    return currentInput.with(-1, button.title); //replace operator if last character is an operator
  }
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
      return currentInput;
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

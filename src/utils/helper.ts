import { Button, ButtonStyle } from "../types";

const operators = ["÷", "×", "-", "+"];

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

    default: {
      if (button.style === ButtonStyle.NUMBER) {
        return [...currentInput, button.title];
      }

      const lastInputCharacter = currentInput.at(-1) || "";

      if (button.style === ButtonStyle.OPERATION && currentInput.length > 0) {
        if (!operators.includes(lastInputCharacter)) {
          return [...currentInput, button.title]; //add operator if last character is not an operator
        } else {
          return currentInput.with(-1, button.title); //replace operator if last character is an operator
        }
      }
      return currentInput;
    }
  }
};

export { getInputAfterButtonPress };

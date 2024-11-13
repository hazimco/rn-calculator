import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import InputArea from "./src/components/InputArea";
import ButtonsArea from "./src/components/ButtonsArea";
import { useState } from "react";
import { Button, ButtonStyle } from "./src/types";

const operators = ["÷", "×", "-", "+"];

export default function App() {
  const [input, setInput] = useState<string[]>([]);

  const handlePress = (button: Button) => {
    switch (button.title) {
      case "AC": {
        setInput([]);
        break;
      }
      case "%": {
        break;
      }
      case "\u207A\u2215\u208B": {
        break;
      }
      case "=": {
        break;
      }
      case ",": {
        break;
      }

      default: {
        if (button.style === ButtonStyle.NUMBER) {
          setInput((prev) => [...prev, button.title]);
          return;
        }

        const lastInputCharacter = input.at(-1) || "";

        if (button.style === ButtonStyle.OPERATION && input.length > 0) {
          if (!operators.includes(lastInputCharacter)) {
            setInput([...input, button.title]); //add operator if last character is not an operator
          } else {
            setInput(input.with(-1, button.title)); //replace operator if last character is an operator
          }
        }

        break;
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <InputArea text={input} />
      <ButtonsArea onPress={handlePress} />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

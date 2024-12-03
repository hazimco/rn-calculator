import { StyleSheet, Text, View } from "react-native";
import Mexp from "math-expression-evaluator";
import { UNICODE } from "../types";

const mexp = new Mexp();

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "blue",
    display: "flex",
    alignItems: "flex-end",
  },
  text: {
    fontSize: 36,
    color: "white",
  },
});

interface Props {
  input: string[];
}

const ResultArea = ({ input }: Props) => {
  let result: string;

  const inputWithNonUnicodeOperators = input.map((character) => {
    switch (character) {
      case UNICODE.DIVISION_SIGN:
        return "/";
      case UNICODE.MULTIPLICATION_SIGN:
        return "*";
      case UNICODE.MINUS_SIGN:
        return "-";
      case UNICODE.PLUS_SIGN:
        return "+";
      case UNICODE.COMMA:
        return ".";
      default:
        return character;
    }
  });

  console.log(inputWithNonUnicodeOperators);

  try {
    result = mexp.eval(inputWithNonUnicodeOperators.join("")).toString();
  } catch (error: unknown) {
    if (error instanceof Error) {
      result = error.message;
    } else {
      result = "unknown error";
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{UNICODE.EQUALS_SIGN}</Text>
      <Text style={styles.text}>{result}</Text>
    </View>
  );
};

export default ResultArea;

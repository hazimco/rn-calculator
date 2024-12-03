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

  try {
    result = mexp.eval(input.join("")).toString();
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

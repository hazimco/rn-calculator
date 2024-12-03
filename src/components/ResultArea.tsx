import { StyleSheet, Text } from "react-native";
import Mexp from "math-expression-evaluator";

const mexp = new Mexp();

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "blue",

    fontSize: 36,
    color: "white",
    textAlign: "right",
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

  return <Text style={styles.container}>{`=${result}`}</Text>;
};

export default ResultArea;

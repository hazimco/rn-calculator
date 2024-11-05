import { StyleSheet, View } from "react-native";
import Button from "./Button";

const operations = ["÷", "×", "+", "-", "="];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "lime",
  },
});

const BasicArithmeticOperations = () => {
  return (
    <View style={styles.container}>
      {operations.map((operation) => (
        <Button key={operation} title={operation} backgroundColor={"orange"} />
      ))}
    </View>
  );
};

export default BasicArithmeticOperations;

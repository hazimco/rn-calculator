import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  container: {
    color: "white",
    backgroundColor: "black",
  },
});

const InputArea = () => {
  return <TextInput style={styles.container} />;
};

export default InputArea;

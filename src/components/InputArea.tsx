import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "white",
    backgroundColor: "black",

    borderWidth: 1,
    borderColor: "red",
  },
});

const InputArea = () => {
  return <TextInput style={styles.container} />;
};

export default InputArea;

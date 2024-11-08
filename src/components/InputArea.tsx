import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "white",

    borderWidth: 1,
    borderColor: "red",
  },
});

const InputArea = () => {
  return <TextInput style={styles.container} />;
};

export default InputArea;

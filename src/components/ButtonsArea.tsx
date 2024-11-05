import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "black",

    borderWidth: 1,
    borderColor: "pink",
  },
});

const ButtonsArea = () => {
  return <View style={styles.container}></View>;
};

export default ButtonsArea;

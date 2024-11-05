import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "orange",
  },
});

const Numbers = () => {
  return <View style={styles.container}></View>;
};

export default Numbers;

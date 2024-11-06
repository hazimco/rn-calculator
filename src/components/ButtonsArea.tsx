import { StyleSheet, View } from "react-native";
import BasicArithmeticOperations from "./BasicArithmeticOperations";
import Numbers from "./Numbers";
import UtilityButtons from "./UtilityButtons";

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "black",

    flexDirection: "row",

    borderWidth: 1,
    borderColor: "pink",
  },
  leftContainer: {
    flex: 3, //because it is three buttons wide
  },
});

const ButtonsArea = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <UtilityButtons />
        <Numbers />
      </View>
      <BasicArithmeticOperations />
    </View>
  );
};

export default ButtonsArea;

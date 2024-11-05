import { StyleSheet, View } from "react-native";
import BasicArithmeticOperations from "./BasicArithmeticOperations";
import Numbers from "./Numbers";
import UtilityButtons from "./UtilityButtons";

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "black",

    borderWidth: 1,
    borderColor: "pink",
  },
});

const ButtonsArea = () => {
  return (
    <View style={styles.container}>
      <UtilityButtons />
      <Numbers />
      <BasicArithmeticOperations />
    </View>
  );
};

export default ButtonsArea;

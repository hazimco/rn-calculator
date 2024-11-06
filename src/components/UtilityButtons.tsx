import { StyleSheet, View } from "react-native";
import Button from "./Button";

const utilities = ["AC", "\u207A\u2215\u208B", "%"]; //\u207A\u2215\u208B is +/-

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "purple",
    flex: 1, //because it is one button high
  },
});

const UtilityButtons = () => {
  return (
    <View style={styles.container}>
      {utilities.map((utility) => (
        <Button
          key={utility}
          title={utility}
          backgroundColor={"#a0a0a0"}
          textColor={"black"}
        />
      ))}
    </View>
  );
};

export default UtilityButtons;

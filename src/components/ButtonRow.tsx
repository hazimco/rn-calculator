import { StyleSheet, View } from "react-native";
import Button from "./Button";
import { ButtonStyle, Button as ButtonType } from "../types";

interface Props {
  rowList: ButtonType[];
  onPress: (button: ButtonType) => void;
}

const ButtonRow = ({ rowList, onPress }: Props) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
    },
  });

  return (
    <View style={styles.container}>
      {rowList.map((button) => {
        return (
          <Button
            key={button.title}
            button={button}
            backgroundColor={button.style}
            textColor={button.style === ButtonStyle.UTILITY ? "black" : "white"}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
};

export default ButtonRow;

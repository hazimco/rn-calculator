import { StyleSheet, View } from "react-native";
import Button from "./Button";
import { Button as ButtonType, Type } from "../types";

interface Props {
  rowList: ButtonType[];
}

const ButtonRow = ({ rowList }: Props) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
    },
  });

  return (
    <View style={styles.container}>
      {rowList.map((button) => {
        const backgroundColor =
          button.type === Type.OPERATION
            ? "orange"
            : button.type === Type.UTILITY
            ? "#a0a0a0"
            : "#404040";

        return (
          <Button
            key={button.title}
            title={`${button.title}`}
            backgroundColor={backgroundColor}
          />
        );
      })}
    </View>
  );
};

export default ButtonRow;

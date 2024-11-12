import { StyleSheet, View } from "react-native";
import Button from "./Button";
import { ButtonStyle, Button as ButtonType } from "../types";

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
        return (
          <Button
            key={button.title}
            title={`${button.title}`}
            backgroundColor={button.style}
            textColor={button.style === ButtonStyle.UTILITY ? "black" : "white"}
          />
        );
      })}
    </View>
  );
};

export default ButtonRow;

import { StyleSheet, View } from "react-native";
import Button from "./Button";
import { Button as ButtonType } from "../types";

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
      {rowList.map((button) => (
        <Button key={button.title} title={`${button.title}`} />
      ))}
    </View>
  );
};

export default ButtonRow;

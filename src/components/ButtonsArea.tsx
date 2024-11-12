import { StyleSheet, View } from "react-native";
import ButtonRow from "./ButtonRow";
import { Button, ButtonStyle } from "../types";

const firstRow: Button[] = [
  { title: "AC", style: ButtonStyle.UTILITY },
  { title: "\u207A\u2215\u208B", style: ButtonStyle.UTILITY },
  { title: "%", style: ButtonStyle.UTILITY },
  { title: "÷", style: ButtonStyle.OPERATION },
];

const secondRow: Button[] = [
  { title: "7", style: ButtonStyle.NUMBER },
  { title: "8", style: ButtonStyle.NUMBER },
  { title: "9", style: ButtonStyle.NUMBER },
  { title: "×", style: ButtonStyle.OPERATION },
];

const thirdRow: Button[] = [
  { title: "4", style: ButtonStyle.NUMBER },
  { title: "5", style: ButtonStyle.NUMBER },
  { title: "6", style: ButtonStyle.NUMBER },
  { title: "-", style: ButtonStyle.OPERATION },
];

const fourthRow: Button[] = [
  { title: "1", style: ButtonStyle.NUMBER },
  { title: "2", style: ButtonStyle.NUMBER },
  { title: "3", style: ButtonStyle.NUMBER },
  { title: "+", style: ButtonStyle.OPERATION },
];

const fifthRow: Button[] = [
  { title: "0", style: ButtonStyle.NUMBER },
  { title: ",", style: ButtonStyle.NUMBER },
  { title: "=", style: ButtonStyle.OPERATION },
];

const allRows = [firstRow, secondRow, thirdRow, fourthRow, fifthRow];

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,

    borderWidth: 1,
    borderColor: "pink",
  },
});

const ButtonsArea = () => {
  return (
    <View style={styles.container}>
      {allRows.map((row, index) => (
        <ButtonRow key={index} rowList={row} />
      ))}
    </View>
  );
};

export default ButtonsArea;

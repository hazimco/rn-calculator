import { StyleSheet, View } from "react-native";
import ButtonRow from "./ButtonRow";
import { Button, Type } from "../types";

const firstRow: Button[] = [
  { title: "AC", type: Type.UTILITY },
  { title: "\u207A\u2215\u208B", type: Type.UTILITY },
  { title: "%", type: Type.UTILITY },
  { title: "÷", type: Type.OPERATION },
];

const secondRow: Button[] = [
  { title: "7", type: Type.NUMBER },
  { title: "8", type: Type.NUMBER },
  { title: "9", type: Type.NUMBER },
  { title: "×", type: Type.OPERATION },
];

const thirdRow: Button[] = [
  { title: "4", type: Type.NUMBER },
  { title: "5", type: Type.NUMBER },
  { title: "6", type: Type.NUMBER },
  { title: "-", type: Type.OPERATION },
];

const fourthRow: Button[] = [
  { title: "1", type: Type.NUMBER },
  { title: "2", type: Type.NUMBER },
  { title: "3", type: Type.NUMBER },
  { title: "+", type: Type.OPERATION },
];

const fifthRow: Button[] = [
  { title: "0", type: Type.NUMBER },
  { title: ",", type: Type.NUMBER },
  { title: "=", type: Type.OPERATION },
];

const allRows = [firstRow, secondRow, thirdRow, fourthRow, fifthRow];

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
      {allRows.map((row, index) => (
        <ButtonRow key={index} rowList={row} />
      ))}
    </View>
  );
};

export default ButtonsArea;

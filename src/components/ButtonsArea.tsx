import { StyleSheet, View } from "react-native";
import ButtonRow from "./ButtonRow";

const firstRow = [
  { title: "AC" },
  { title: "\u207A\u2215\u208B" },
  { title: "%" },
  { title: "÷" },
];

const secondRow = [
  { title: "7" },
  { title: "8" },
  { title: "9" },
  { title: "×" },
];

const thirdRow = [
  { title: "4" },
  { title: "5" },
  { title: "6" },
  { title: "-" },
];

const fourthRow = [
  { title: "1" },
  { title: "2" },
  { title: "3" },
  { title: "+" },
];

const fifthRow = [{ title: "0" }, { title: "1" }, { title: "=" }];

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

import { StyleSheet, View } from "react-native";
import ButtonRow from "./ButtonRow";
import { Button, ButtonStyle, UNICODE } from "../types";

const firstRow: Button[] = [
  { title: "AC", style: ButtonStyle.UTILITY },
  { title: UNICODE.PLUS_SLASH_MINUS, style: ButtonStyle.UTILITY },
  { title: UNICODE.ERASE_TO_THE_LEFT, style: ButtonStyle.UTILITY },
  { title: UNICODE.DIVISION_SIGN, style: ButtonStyle.OPERATOR },
];

const secondRow: Button[] = [
  { title: "7", style: ButtonStyle.NUMBER },
  { title: "8", style: ButtonStyle.NUMBER },
  { title: "9", style: ButtonStyle.NUMBER },
  { title: UNICODE.MULTIPLICATION_SIGN, style: ButtonStyle.OPERATOR },
];

const thirdRow: Button[] = [
  { title: "4", style: ButtonStyle.NUMBER },
  { title: "5", style: ButtonStyle.NUMBER },
  { title: "6", style: ButtonStyle.NUMBER },
  { title: UNICODE.MINUS_SIGN, style: ButtonStyle.OPERATOR },
];

const fourthRow: Button[] = [
  { title: "1", style: ButtonStyle.NUMBER },
  { title: "2", style: ButtonStyle.NUMBER },
  { title: "3", style: ButtonStyle.NUMBER },
  { title: UNICODE.PLUS_SIGN, style: ButtonStyle.OPERATOR },
];

const fifthRow: Button[] = [
  { title: "0", style: ButtonStyle.NUMBER },
  { title: UNICODE.COMMA, style: ButtonStyle.NUMBER },
  { title: UNICODE.EQUALS_SIGN, style: ButtonStyle.OPERATOR },
];

const allRows = [firstRow, secondRow, thirdRow, fourthRow, fifthRow];

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,

    borderWidth: 1,
    borderColor: "pink",
  },
});

interface Props {
  onPress: (button: Button) => void;
}

const ButtonsArea = ({ onPress }: Props) => {
  return (
    <View style={styles.container}>
      {allRows.map((row, index) => (
        <ButtonRow key={index} rowList={row} onPress={onPress} />
      ))}
    </View>
  );
};

export default ButtonsArea;

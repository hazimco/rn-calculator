import { StyleSheet, View } from "react-native";
import Button from "./Button";

const firstRow = [7, 8, 9];
const secondRow = [4, 5, 6];
const thirdRow = [1, 2, 3];
const fourthRow = [0, ","];

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "orange",
    flex: 4, //because it is four buttons high
  },
});

const Numbers = () => {
  return (
    <View style={styles.container}>
      <ButtonRow rowList={firstRow} />
      <ButtonRow rowList={secondRow} />
      <ButtonRow rowList={thirdRow} />
      <ButtonRow rowList={fourthRow} />
    </View>
  );
};

interface ButtonRowProps {
  rowList: (number | string)[];
}

const ButtonRow = ({ rowList }: ButtonRowProps) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
    },
  });
  return (
    <View style={styles.container}>
      {rowList.map((number) => (
        <Button key={number} title={`${number}`} backgroundColor={"#404040"} />
      ))}
    </View>
  );
};

export default Numbers;
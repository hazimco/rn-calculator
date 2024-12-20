import { Pressable, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 10,
  },
  text: {
    color: "white",
    fontSize: 36,
  },
  selected: {
    backgroundColor: "green",
  },
});

interface Props {
  text: string[];
  selectedIndex?: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const InputArea = ({ text, selectedIndex, setSelectedIndex }: Props) => {
  return (
    <View style={styles.container}>
      {text.map((t, i) => (
        <Pressable
          key={t + i}
          onPress={() =>
            setSelectedIndex((prev) => (prev === i ? undefined : i))
          }
        >
          <Text
            style={[styles.text, selectedIndex === i ? styles.selected : null]}
          >
            {t}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default InputArea;

import { Pressable, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    color: "white",

    borderWidth: 1,
    borderColor: "red",
  },
  text: {
    color: "white",
    fontSize: 36,
  },
});

interface Props {
  text: string[];
}

const InputArea = ({ text }: Props) => {
  return (
    <View style={styles.container}>
      {text.map((t, i) => (
        <Pressable key={t + i}>
          <Text style={styles.text}>{t}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default InputArea;

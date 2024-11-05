import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import InputArea from "./src/components/InputArea";
import ButtonsArea from "./src/components/ButtonsArea";

export default function App() {
  return (
    <View style={styles.container}>
      <InputArea />
      <ButtonsArea />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

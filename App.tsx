import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import InputArea from "./src/components/InputArea";
import ButtonsArea from "./src/components/ButtonsArea";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <InputArea />
      <ButtonsArea />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

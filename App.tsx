import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import InputArea from "./src/components/InputArea";
import ButtonsArea from "./src/components/ButtonsArea";
import { useRef, useState } from "react";
import { Button } from "./src/types";
import { getInputAfterButtonPress } from "./src/utils/helper";

export default function App() {
  const [input, setInput] = useState<string[]>([]);

  const scrollViewRef = useRef<ScrollView>(null);

  const handlePress = (button: Button) => {
    setInput(getInputAfterButtonPress(input, button));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() => {
          scrollViewRef.current?.scrollToEnd({ animated: true });
        }}
      >
        <InputArea text={input} />
      </ScrollView>
      <ButtonsArea onPress={handlePress} />
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

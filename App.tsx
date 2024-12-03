import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import InputArea from "./src/components/InputArea";
import ButtonsArea from "./src/components/ButtonsArea";
import { useRef, useState } from "react";
import { Button, UNICODE } from "./src/types";
import { getInputAfterButtonPress } from "./src/utils/helper";
import ResultArea from "./src/components/ResultArea";

export default function App() {
  const [input, setInput] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>();
  const [showResult, setShowResult] = useState(false);

  const scrollViewRef = useRef<ScrollView>(null);

  const handlePress = (button: Button) => {
    if (button.title === UNICODE.EQUALS_SIGN) {
      setShowResult(true);
      return;
    }

    setInput(
      getInputAfterButtonPress(input, button, selectedIndex, setSelectedIndex)
    );
    setShowResult(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() => {
          scrollViewRef.current?.scrollToEnd({ animated: true });
        }}
      >
        <InputArea
          text={input}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </ScrollView>
      {showResult && <ResultArea input={input} />}
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

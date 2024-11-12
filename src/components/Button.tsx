import {
  ColorValue,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Button as ButtonType } from "../types";

const BUTTON_MARGIN = 5;
const BUTTON_WIDTH = Dimensions.get("window").width / 4 - BUTTON_MARGIN * 2; // dividing by 4 since we have four buttons horizontally (in portrait)

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    justifyContent: "center",
    margin: BUTTON_MARGIN,
    width: BUTTON_WIDTH,
    height: BUTTON_WIDTH, // since we want height to equal width
  },
  text: {
    textAlign: "center",
    fontSize: 36,
  },
  zeroButton: {
    width: BUTTON_WIDTH * 2 + BUTTON_MARGIN * 2,
  },
});

interface Props {
  button: ButtonType;
  backgroundColor?: ColorValue;
  textColor?: ColorValue;
  onPress: (button: ButtonType) => void;
}

const Button = ({
  button,
  backgroundColor,
  textColor = "white",
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        { backgroundColor },
        styles.container,
        button.title === "0" && styles.zeroButton,
      ]}
      onPress={() => onPress(button)}
    >
      <Text style={[{ color: textColor }, styles.text]}>{button.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

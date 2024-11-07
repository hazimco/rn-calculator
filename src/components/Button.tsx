import {
  ColorValue,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const BUTTON_MARGIN = 5;
const BUTTON_WIDTH = Dimensions.get("window").width / 4 - BUTTON_MARGIN * 2; // dividing by 4 since we have four buttons horizontally (in portrait)

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "white",
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
});

interface Props {
  title: string;
  backgroundColor?: ColorValue;
  textColor?: ColorValue;
}

const Button = ({ title, backgroundColor, textColor = "white" }: Props) => {
  return (
    <TouchableOpacity style={[{ backgroundColor }, styles.container]}>
      <Text style={[{ color: textColor }, styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
